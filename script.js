/* =========================================
   1. ฐานข้อมูลสินค้า (DATABASE)
   - อัปเดตลิงก์รูปภาพจริง
   ========================================= */
const productsDB = [
    // --- NIKE ---
    { id: 101, brand: "Nike", name: "Air Zoom Pegasus 40", category: "Footwear", price: 4200, image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=500", colors: ["Blue", "Black"], sizes: ["40", "41", "42"] },
    { id: 102, brand: "Nike", name: "Dri-FIT Run Division", category: "Apparel", price: 1100, image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?auto=format&fit=crop&w=500", colors: ["Black", "Grey"], sizes: ["M", "L", "XL"] },
    { id: 103, brand: "Nike", name: "Metcon 9", category: "Footwear", price: 4800, image: "https://images.unsplash.com/photo-1605348532760-6753d2c43329?auto=format&fit=crop&w=500", colors: ["Red", "Black"], sizes: ["41", "42", "43"] },
    { id: 104, brand: "Nike", name: "Pro Hypercool Tights", category: "Apparel", price: 1900, image: "https://images.unsplash.com/photo-1517438476312-10d79c077509?auto=format&fit=crop&w=500", colors: ["Black"], sizes: ["M", "L"] },
    { id: 105, brand: "Nike", name: "Phantom GX Elite", category: "Footwear", price: 8900, image: "https://images.unsplash.com/photo-1511556532299-8f662fc26c06?auto=format&fit=crop&w=500", colors: ["Volt"], sizes: ["40", "41", "42"] },

    // --- ADIDAS ---
    { id: 201, brand: "Adidas", name: "Ultraboost Light", category: "Footwear", price: 5500, image: "https://assets.adidas.com/images/w_600,f_auto,q_auto/e45d363186da4d328080e9abc2839a55_9366/Ultraboost_Light_ID3318.jpg", colors: ["White", "Black"], sizes: ["41", "42", "43"] },
    { id: 202, brand: "Adidas", name: "Tiro 23 Pants", category: "Apparel", price: 1800, image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=500", colors: ["Black", "Navy"], sizes: ["M", "L", "XL"] },
    { id: 203, brand: "Adidas", name: "Predator Accuracy", category: "Footwear", price: 4500, image: "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?auto=format&fit=crop&w=500", colors: ["Black/Pink"], sizes: ["40", "41", "42"] },

    // --- PUMA ---
    { id: 301, brand: "Puma", name: "Deviate Nitro 2", category: "Footwear", price: 3800, image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=500", colors: ["Red", "Orange"], sizes: ["40", "41", "42"] },
    { id: 302, brand: "Puma", name: "Active Shorts", category: "Apparel", price: 950, image: "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?auto=format&fit=crop&w=500", colors: ["Black"], sizes: ["M", "L"] },

    // --- UNDER ARMOUR ---
    { id: 401, brand: "Under Armour", name: "HeatGear Armour", category: "Apparel", price: 1290, image: "https://images.unsplash.com/photo-1483721310020-03333e577078?auto=format&fit=crop&w=500", colors: ["Black", "Grey"], sizes: ["M", "L", "XL"] },
    { id: 402, brand: "Under Armour", name: "Curry 11", category: "Footwear", price: 6200, image: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&w=500", colors: ["White/Gold"], sizes: ["41", "42", "43"] },

    // --- YONEX ---
    { id: 501, brand: "Yonex", name: "Astrox 99 Pro", category: "Equipment", price: 5800, image: "https://tse2.mm.bing.net/th/id/OIP.jV8VpSEnTIgbryOPf1L6qwHaHa?rs=1&pid=ImgDetMain&o=7&rm=3", colors: ["Orange"], sizes: ["4U", "3U"] },
    { id: 502, brand: "Yonex", name: "Power Cushion 65Z", category: "Footwear", price: 3900, image: "https://images.unsplash.com/photo-1562183241-b937e95585b6?auto=format&fit=crop&w=500", colors: ["White/Tiger"], sizes: ["40", "41", "42"] },

    // --- GARMIN ---
    { id: 601, brand: "Garmin", name: "Forerunner 265", category: "Electronics", price: 13900, image: "https://tse4.mm.bing.net/th/id/OIP.4bfuwAUSP8NQxb9dJRcjlgHaHa?rs=1&pid=ImgDetMain&o=7&rm=3", colors: ["Black", "White"], sizes: ["Std"] },

    // --- WILSON ---
    { id: 701, brand: "Wilson", name: "Evolution Basketball", category: "Equipment", price: 1800, image: "https://tse2.mm.bing.net/th/id/OIP.injWJkyzKKwGWkmB-ib8mwHaHa?rs=1&pid=ImgDetMain&o=7&rm=3", colors: ["Orange"], sizes: ["Size 7"] },
    { id: 702, brand: "Wilson", name: "Clash 100 v2", category: "Equipment", price: 8500, image: "https://tse1.mm.bing.net/th/id/OIP.h9LGdn6KAx7YTHq8AVijJgHaHa?rs=1&pid=ImgDetMain&o=7&rm=3", colors: ["Red"], sizes: ["G2"] },

    // --- SPEEDO ---
    { id: 801, brand: "Speedo", name: "Biofuse 2.0", category: "Accessories", price: 790, image: "https://speedo.com.au/dw/image/v2/BDFS_PRD/on/demandware.static/-/Sites-speedo-master-catalog/default/dw966fe107/images/8_0023281/8_00232817134OBS_1.jpg?sw=1000&sh=1000", colors: ["Black/Blue"], sizes: ["One Size"] }
];

/* =========================================
   2. ตัวแปร Global และการตั้งค่าเริ่มต้น
   ========================================= */
let shoppingCart = JSON.parse(localStorage.getItem('shoppingCart')) || [];
const SHIPPING_FEE = 50;
const FALLBACK_IMAGE = "https://placehold.co/300x300/e2e8f0/1e293b?text=No+Image";

/* =========================================
   3. ฟังก์ชันหลัก: Render สินค้า
   ========================================= */
function renderProductList(products) {
    const productList = document.getElementById('productList');
    productList.innerHTML = '';

    if (products.length === 0) {
        productList.innerHTML = '<p style="color:#666; grid-column:1/-1; text-align:center; padding: 20px;">ไม่พบสินค้าที่ค้นหา</p>';
        return;
    }

    products.forEach(p => {
        const colorOptions = p.colors.map(c => `<option value="${c}">${c}</option>`).join('');
        const sizeOptions = p.sizes.map(s => `<option value="${s}">${s}</option>`).join('');

        const card = document.createElement('div');
        card.className = 'product-card';
        card.setAttribute('data-id', p.id);
        
        // HTML ของการ์ดสินค้า + ระบบป้องกันรูปเสีย (onerror)
        card.innerHTML = `
            <div class="card-image">
                <img 
                    src="${p.image}" 
                    alt="${p.name}" 
                    onerror="this.onerror=null; this.src='${FALLBACK_IMAGE}';"
                >
            </div>
            <div class="card-details">
                <h4>${p.name}</h4>
                <p class="brand">${p.brand} • ${p.category}</p>
                <div class="product-options">
                    <select class="option-select color-select">${colorOptions}</select>
                    <select class="option-select size-select">${sizeOptions}</select>
                </div>
                <div class="price-row"><span class="price">${p.price.toLocaleString()} ฿</span></div>
                <button class="btn-add" onclick="addToCart(this)">เพิ่มในตะกร้า</button>
            </div>
        `;
        productList.appendChild(card);
    });
}

/* =========================================
   4. ระบบกรองสินค้า (Filter)
   ========================================= */
function applyFilters() {
    const brand = document.getElementById('brand').value;
    const minInput = document.getElementById('min-price').value;
    const maxInput = document.getElementById('max-price').value;
    const minPrice = minInput ? parseFloat(minInput) : 0;
    const maxPrice = maxInput ? parseFloat(maxInput) : Infinity;

    const checkedColorBoxes = document.querySelectorAll('.checkbox-group input:checked');
    const selectedColors = Array.from(checkedColorBoxes).map(cb => cb.value.toLowerCase());

    const filtered = productsDB.filter(p => {
        // 1. กรอง Brand
        if (brand && p.brand !== brand) return false;
        
        // 2. กรองราคา
        if (p.price < minPrice || p.price > maxPrice) return false;
        
        // 3. กรองสี
        if (selectedColors.length > 0) {
            const productColorsLowCase = p.colors.map(c => c.toLowerCase());
            const hasColor = selectedColors.some(sel => 
                productColorsLowCase.some(prodColor => prodColor.includes(sel))
            );
            if (!hasColor) return false;
        }
        return true;
    });

    renderProductList(filtered);
}

/* =========================================
   5. ระบบตะกร้าสินค้า (Cart Logic)
   ========================================= */
function addToCart(btnElement) {
    const card = btnElement.closest('.product-card');
    const id = card.getAttribute('data-id');
    const product = productsDB.find(p => p.id == id);
    const color = card.querySelector('.color-select').value;
    const size = card.querySelector('.size-select').value;
    
    // สร้าง ID เฉพาะสำหรับสินค้านั้นๆ (เช่น รองเท้า A สีแดง ไซส์ 40)
    const variantId = `${id}-${color}-${size}`;
    const variantName = `${product.name} (${color}, ${size})`;

    const item = shoppingCart.find(i => i.id === variantId);
    if (item) {
        item.qty++; 
    } else {
        shoppingCart.push({ id: variantId, name: variantName, price: product.price, qty: 1 });
    }

    updateCart();
    
    // Visual Feedback (เปลี่ยนปุ่มชั่วคราว)
    const originalText = btnElement.innerText;
    btnElement.innerText = "เรียบร้อย ✓";
    btnElement.style.background = "#198754"; // สีเขียว
    
    setTimeout(() => {
        btnElement.innerText = originalText;
        btnElement.style.background = "";
    }, 1000);
}

function updateQuantity(id, el) {
    const val = parseInt(el.value);
    const item = shoppingCart.find(i => i.id === id);
    if (val < 1) {
        removeItem(id); 
    } else { 
        item.qty = val; 
        updateCart(); 
    }
}

function removeItem(id) {
    shoppingCart = shoppingCart.filter(i => i.id !== id);
    updateCart();
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
        tbody.innerHTML = `<tr><td colspan="6" style="text-align:center;padding:30px;color:#888;">ตะกร้ายังว่างอยู่</td></tr>`;
        return;
    }
    
    tbody.innerHTML = shoppingCart.map(item => `
        <tr>
            <td>${item.name}</td>
            <td>--</td>
            <td>${item.price.toLocaleString()}</td>
            <td><input type="number" value="${item.qty}" onchange="updateQuantity('${item.id}', this)" style="width:50px;text-align:center;padding:5px;border:1px solid #ddd;border-radius:4px;"></td>
            <td>${(item.price * item.qty).toLocaleString()}</td>
            <td><button onclick="removeItem('${item.id}')" style="color:#dc3545;background:none;border:none;cursor:pointer;font-weight:bold;">ลบ</button></td>
        </tr>
    `).join('');
}

function updateTotals() {
    const subtotal = shoppingCart.reduce((sum, i) => sum + (i.price * i.qty), 0);
    const shipping = subtotal > 0 ? SHIPPING_FEE : 0;
    const total = subtotal + shipping;
    
    if(document.getElementById('subtotal')) {
        document.getElementById('subtotal').textContent = subtotal.toLocaleString() + ' ฿';
        document.getElementById('shipping').textContent = shipping.toLocaleString() + ' ฿';
        document.getElementById('grandTotal').textContent = total.toLocaleString() + ' ฿';
    }
}

function updateBadge() {
    const badge = document.getElementById('cartCountBadge');
    const count = shoppingCart.reduce((sum, i) => sum + i.qty, 0);
    if(badge) { 
        badge.textContent = count; 
        badge.style.display = count > 0 ? 'inline-block' : 'none'; 
    }
}

/* =========================================
   6. ระบบสั่งซื้อ & Export Excel
   ========================================= */
function confirmOrder() {
    const form = document.getElementById('shippingForm');
    
    // Validation
    if (!shoppingCart.length) return alert('ตะกร้าสินค้าว่างเปล่า กรุณาเลือกสินค้าก่อนครับ');
    if (!form.checkValidity()) return alert('กรุณากรอกข้อมูลจัดส่งให้ครบถ้วนครับ');
    
    // ดึงค่าจากฟอร์ม
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const addressPart = document.getElementById('address').value;
    const province = document.getElementById('province').value;
    const zip = document.getElementById('zip').value;
    const note = document.getElementById('note').value;
    
    const fullAddress = `${addressPart} จ.${province} ${zip}`;
    const payment = document.querySelector('input[name="paymentMethod"]:checked').nextElementSibling.innerText;
    
    // เรียกฟังก์ชัน Export Excel
    exportToExcel(name, phone, email, fullAddress, note, payment);
    
    alert(`ยืนยันคำสั่งซื้อเรียบร้อย!\nระบบกำลังดาวน์โหลดใบเสร็จ (Excel) ให้คุณ...`);
    
    // Reset ตะกร้าและฟอร์ม
    shoppingCart = []; 
    updateCart(); 
    form.reset(); 
    window.scrollTo(0,0);
}

function exportToExcel(name, phone, email, address, note, payment) {
    let csvContent = "\uFEFF"; // BOM สำหรับภาษาไทย
    csvContent += "วันที่,ชื่อลูกค้า,เบอร์โทร,อีเมล,ที่อยู่จัดส่ง,หมายเหตุ,ชำระเงิน,รายการสินค้า,จำนวน,ราคาต่อหน่วย,รวม\n";
    
    const date = new Date().toLocaleString('th-TH');

    shoppingCart.forEach(item => {
        // ใช้ "..." ครอบข้อมูลเพื่อป้องกันกรณีมีเครื่องหมายจุลภาคในข้อความ
        let row = [
            `"${date}"`, 
            `"${name}"`, 
            `"${phone}"`, 
            `"${email}"`, 
            `"${address}"`, 
            `"${note}"`, 
            `"${payment}"`, 
            `"${item.name}"`, 
            item.qty, 
            item.price, 
            (item.price * item.qty)
        ];
        csvContent += row.join(",") + "\n";
    });

    const total = shoppingCart.reduce((s, i) => s + (i.price * i.qty), 0) + SHIPPING_FEE;
    csvContent += `,,,,,,,,,,ยอดสุทธิ: ${total}\n`;

    const encodedUri = encodeURI("data:text/csv;charset=utf-8," + csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `SportPro_Order_${Date.now()}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

/* =========================================
   7. เริ่มต้นทำงาน (Initialization)
   ========================================= */
document.addEventListener('DOMContentLoaded', () => {
    renderProductList(productsDB);
    updateCart();
});