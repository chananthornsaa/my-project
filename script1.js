let shoppingCart = JSON.parse(localStorage.getItem('shoppingCart')) || [];
const SHIPPING_FEE = 50;

// --- 1. Filter Logic ---
function applyFilters() {
    const brand = document.getElementById('brand').value;
    const minPrice = parseFloat(document.getElementById('min-price').value) || 0;
    const maxPrice = parseFloat(document.getElementById('max-price').value) || Infinity;
    const colors = Array.from(document.querySelectorAll('.checkbox-group input:checked')).map(cb => cb.value);

    document.querySelectorAll('.product-card').forEach(card => {
        const pBrand = card.getAttribute('data-brand');
        const pColor = card.getAttribute('data-color');
        const pPrice = parseFloat(card.getAttribute('data-price'));
        
        let show = true;
        if (brand && pBrand !== brand) show = false;
        if (colors.length && !colors.includes(pColor)) show = false;
        if (pPrice < minPrice || pPrice > maxPrice) show = false;

        // ถ้าเป็นสินค้าแนะนำ (ไม่มี data-brand) ให้แสดงตลอด
        if (!pBrand && card.parentElement.id === 'recommendedProducts') show = true; 

        card.style.display = show ? 'flex' : 'none';
    });
}

// --- 2. Cart Logic ---
function addToCart(id, name, price) {
    const item = shoppingCart.find(i => i.id === id);
    if (item) item.qty++; else shoppingCart.push({ id, name, price, qty: 1 });
    updateCart();
    alert(`✅ เพิ่ม "${name}" ลงตะกร้าแล้ว!`);
}

function updateQuantity(id, el) {
    const val = parseInt(el.value);
    const item = shoppingCart.find(i => i.id === id);
    if (val < 1) removeItem(id);
    else { item.qty = val; updateCart(); }
}

function removeItem(id) {
    if (confirm('ลบสินค้านี้?')) {
        shoppingCart = shoppingCart.filter(i => i.id !== id);
        updateCart();
    }
}

function updateCart() {
    localStorage.setItem('shoppingCart', JSON.stringify(shoppingCart));
    renderCartItems();
    updateTotals();
    updateBadge();
}

function renderCartItems() {
    const tbody = document.getElementById('cartItems');
    if (!tbody) return;
    
    if (!shoppingCart.length) {
        tbody.innerHTML = `<tr><td colspan="5" style="text-align:center;padding:20px;">ไม่มีสินค้าในตะกร้า</td></tr>`;
        return;
    }

    tbody.innerHTML = shoppingCart.map(item => `
        <tr>
            <td>${item.name}</td>
            <td>${item.price.toLocaleString()}</td>
            <td><input type="number" value="${item.qty}" class="item-qty" onchange="updateQuantity(${item.id}, this)"></td>
            <td>${(item.price * item.qty).toLocaleString()}</td>
            <td><button class="remove-btn" onclick="removeItem(${item.id})">×</button></td>
        </tr>
    `).join('');
}

function updateTotals() {
    const subtotal = shoppingCart.reduce((sum, i) => sum + (i.price * i.qty), 0);
    const shipping = subtotal > 0 ? SHIPPING_FEE : 0;
    const total = subtotal + shipping;

    const setTxt = (id, val) => { 
        const el = document.getElementById(id); 
        if (el) el.textContent = val.toLocaleString() + ' บาท'; 
    };

    setTxt('subtotal', subtotal);
    setTxt('shipping', shipping);
    setTxt('grandTotal', total);
    setTxt('summarySubtotal', subtotal);
    setTxt('summaryShipping', shipping);
    setTxt('summaryGrandTotal', total);
}

function updateBadge() {
    const badge = document.getElementById('cartCountBadge');
    const count = shoppingCart.reduce((sum, i) => sum + i.qty, 0);
    if(badge) {
        badge.textContent = count;
        badge.style.display = count > 0 ? 'inline-block' : 'none';
    }
}

// --- 3. Checkout & Excel Export Logic (อัปเดตใหม่) ---

function confirmOrder() {
    const form = document.getElementById('shippingForm');
    if (!shoppingCart.length) return alert('ตะกร้าว่างเปล่า!');
    if (!form.checkValidity()) return alert('กรุณากรอกที่อยู่ให้ครบ');
    
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;
    const payment = document.querySelector('input[name="paymentMethod"]:checked').parentElement.innerText.trim();
    
    // 1. เรียกฟังก์ชันสร้างไฟล์ Excel (CSV)
    exportToExcel(name, phone, address, payment);

    alert(`🎉 สั่งซื้อสำเร็จ!\nระบบได้ดาวน์โหลดใบสั่งซื้อเป็นไฟล์ Excel ให้คุณแล้ว`);
    
    shoppingCart = [];
    updateCart();
    form.reset();
    window.scrollTo(0,0);
}

// ฟังก์ชันสร้างไฟล์ CSV (เปิดใน Excel ได้)
function exportToExcel(name, phone, address, payment) {
    // สร้าง Header ของตาราง Excel
    let csvContent = "\uFEFF"; // BOM เพื่อให้รองรับภาษาไทย
    csvContent += "วันที่สั่งซื้อ,ชื่อลูกค้า,เบอร์โทร,ที่อยู่จัดส่ง,วิธีการชำระเงิน,ชื่อสินค้า,จำนวน,ราคาต่อหน่วย,ราคารวม\n";

    const orderDate = new Date().toLocaleString('th-TH');

    // วนลูปสินค้าในตะกร้าเพื่อเพิ่มลงในไฟล์
    shoppingCart.forEach(item => {
        const totalItemPrice = item.price * item.qty;
        // จัดรูปแบบข้อมูล CSV (ถ้ามีเครื่องหมายจุลภาคในข้อความ ให้ใส่เครื่องหมายคำพูดครอบ)
        let row = [
            `"${orderDate}"`,
            `"${name}"`,
            `"${phone}"`,
            `"${address}"`,
            `"${payment}"`,
            `"${item.name}"`,
            item.qty,
            item.price,
            totalItemPrice
        ];
        csvContent += row.join(",") + "\n";
    });

    // เพิ่มบรรทัดสรุปยอดรวม
    const { grandTotal } = calculateTotals();
    csvContent += `,,,,,,,,ยอดสุทธิ: ${grandTotal}\n`;

    // สร้างลิงก์ดาวน์โหลด
    const encodedUri = encodeURI("data:text/csv;charset=utf-8," + csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `Order_${new Date().getTime()}.csv`); // ตั้งชื่อไฟล์ตามเวลา
    document.body.appendChild(link); // จำเป็นสำหรับ Firefox
    link.click();
    document.body.removeChild(link);
}

// --- 4. Review & FAQ Logic ---
let rating = 0;
document.querySelectorAll('.star').forEach(s => {
    s.addEventListener('click', function() {
        rating = this.dataset.rating;
        document.querySelectorAll('.star').forEach(st => st.classList.toggle('active', st.dataset.rating <= rating));
    });
});

function submitReview() {
    if(!rating) return alert('โปรดให้ดาว');
    alert(`ขอบคุณสำหรับ ${rating} ดาว!`);
    document.getElementById('reviewText').value = '';
}

document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
        const ans = btn.nextElementSibling;
        const icon = btn.querySelector('.icon');
        const isOpen = ans.classList.contains('active');
        
        document.querySelectorAll('.faq-answer').forEach(a => a.classList.remove('active'));
        document.querySelectorAll('.icon').forEach(i => i.textContent = '+');
        
        if(!isOpen) {
            ans.classList.add('active');
            icon.textContent = '-';
        }
    });
});

// --- Init ---
document.addEventListener('DOMContentLoaded', () => {
    applyFilters();
    updateCart();
});