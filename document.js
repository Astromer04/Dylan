document.addEventListener('DOMContentLoaded', () => {
    // 1. Lógica para generar y mostrar las 102 camisetas
    const productsGrid = document.getElementById('products-grid');
    
    // Definición del ciclo de nombres/descripciones (para alternar cada 8 productos)
    const productDetails = [
        { name: "Camiseta Oversize Básica - Negro Azabache", desc: "Algodón 100% orgánico, corte relajado y acabados premium." },
        { name: "T-shirt Minimalista - Blanco Nuclear", desc: "Logo sutil bordado en el pecho. Comodidad y estilo elevado." },
        { name: "Camiseta Heavyweight - Gris Cemento", desc: "Tejido pesado de 240g, ideal para una caída estructurada y duradera." },
        { name: "Camiseta Estampado Urbano - Abstracto", desc: "Diseño gráfico único en la espalda con pigmentos naturales." },
        { name: "Long-Fit Urban - Azul Océano", desc: "Corte extra largo, perfecto para *layering* y un auténtico look street-wear." },
        { name: "T-shirt Tie-Dye - Edición Pastel", desc: "Proceso de teñido artesanal, cada pieza es única. Full color y estilo." },
        { name: "Oversize con Bolsillo - Verde Oliva", desc: "Bolsillo frontal funcional y cuello reforzado para mayor resistencia." },
        { name: "Camiseta Edición Limitada - Vino Tinto", desc: "Algodón peinado de lujo. Un color profundo y exclusivo." }
    ];

    let html = '';
    const totalProducts = 102;
    const price = "$65.000 COP";

    for (let i = 1; i <= totalProducts; i++) {
        const detail = productDetails[(i - 1) % productDetails.length];
        
        // Generación de cada tarjeta de producto
        html += `
            <div class="product-card">
                <div class="product-image"> 
                    <img src="images/CAMISETA(${i}).JPEG" alt="${detail.name}"> 
                </div> 
                <div class="product-content"> 
                    <h2 class="product-name">${detail.name} (Ref. ${i})</h2> 
                    <p class="product-description">${detail.desc}</p> 
                    <p class="product-price">${price}</p> 
                    <button class="btn btn-primary add-to-cart" data-product-id="${i}">Añadir al carrito</button>
                </div> 
            </div> 
        `;
    }

    // Inyectar el HTML generado en el contenedor products-grid.
    // Esto resuelve el problema de "página en blanco" causado por document.write.
    if (productsGrid) {
        productsGrid.innerHTML = html;
    }


    // 2. Funcionalidad de Añadir al Carrito (Simulación)
    // Se debe re-seleccionar los botones después de que el HTML ha sido inyectado
    const addToCartButtons = document.querySelectorAll('.add-to-cart');

    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            const productName = button.closest('.product-content').querySelector('.product-name').textContent;
            
            // Muestra una alerta de confirmación
            alert(`¡Producto Agregado! 🎉\n"${productName}" ha sido añadido a tu carrito de compras.`);

            // Aquí se ejecutaría la lógica real de añadir a un carrito.
            console.log(`Producto añadido: ${productName}`);
        });
    });


    // 3. Funcionalidad del Menú Móvil (manteniendo tu lógica)
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    if (mobileMenuBtn && navLinks) {
        mobileMenuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // 4. Animación al hacer scroll (manteniendo tu lógica)
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1 
    });

    document.querySelectorAll('.animate-on-scroll').forEach(element => {
        observer.observe(element);
    });
});