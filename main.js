// js/main.js

document.addEventListener('DOMContentLoaded', () => {
    // Código para el menú móvil
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    if (mobileMenuBtn && navLinks) {
        mobileMenuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });

        // Cierra el menú al hacer clic en un enlace
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
            });
        });
    }
    
    // JS para las animaciones al hacer scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.2 });

    document.querySelectorAll('.animate-on-scroll').forEach(element => {
        observer.observe(element);
    });
});

document.addEventListener('DOMContentLoaded', () => {
    // 1. Funcionalidad del Menú Móvil (manteniendo tu lógica)
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    if (mobileMenuBtn && navLinks) {
        mobileMenuBtn.addEventListener('click', () => {
            // Lógica para alternar la visibilidad del menú móvil
            navLinks.classList.toggle('active');
        });
    }

    // 2. Funcionalidad de Añadir al Carrito (Asegurando que no sea WhatsApp)
    const addToCartButtons = document.querySelectorAll('.add-to-cart');

    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Se obtiene el nombre y la referencia del producto
            const productName = button.closest('.product-content').querySelector('.product-name').textContent;
            const productRef = button.dataset.productId;
            
            // SIMULACIÓN DE AÑADIR AL CARRITO: 
            // En lugar de ir a WhatsApp, muestra una alerta y luego
            // podrías implementar la lógica de pasarela de pagos.
            alert(`¡Producto Agregado! 🎉\n"${productName}" ha sido añadido a tu carrito de compras.\nReferencia: ${productRef}`);

            // Aquí iría la lógica real para guardar el producto en el carrito (ej: localStorage, API)
            console.log(`Producto añadido al carrito: ${productName} (ID: ${productRef})`);
        });
    });

    // 3. Animación al hacer scroll (manteniendo tu lógica)
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