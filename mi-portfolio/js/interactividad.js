window.addEventListener('load', () => {
    const numBubbles = 50;  // Número de burbujas
    const container = document.body;  // El contenedor donde se van a crear las burbujas

    for (let i = 0; i < numBubbles; i++) {
        const bubble = document.createElement('div');
        bubble.classList.add('bubble');
        
        // Opción para crear cuadrados en lugar de círculos
        if (Math.random() > 0.5) {
            bubble.classList.add('square');
        }
        
        // Posición aleatoria para cada burbuja/cuadrado
        bubble.style.left = `${Math.random() * 100}vw`;  // Aseguramos que las burbujas estén distribuidas por todo el ancho
        bubble.style.top = `${Math.random() * 100}vh`;  // Aseguramos que las burbujas estén distribuidas por todo el alto
        bubble.style.animationDuration = `${4 + Math.random() * 2}s`;  // Duración de la animación aleatoria
        bubble.style.animationDelay = `${Math.random() * 3}s`;  // Retraso aleatorio de la animación

        // Añadir la burbuja al contenedor
        container.appendChild(bubble);
        
        // Desaparecer las burbujas después de un tiempo
        setTimeout(() => {
            bubble.remove();
        }, 7000);  // Después de 7 segundos las burbujas desaparecerán
    }
});

// Detecta cuando un elemento entra en la vista y activa la animación
window.addEventListener('scroll', () => {
    const elements = document.querySelectorAll('.slide-in');
    
    elements.forEach(element => {
        const position = element.getBoundingClientRect().top;
        if (position < window.innerHeight) {
            element.classList.add('visible');
        }
    });
});

// Detecta cuando un elemento entra en la vista y activa la animación
window.addEventListener('scroll', () => {
    const elements = document.querySelectorAll('.slide-in');

    elements.forEach(element => {
        const position = element.getBoundingClientRect().top;
        if (position < window.innerHeight) {
            element.classList.add('visible');
        }
    });
});


// Detecta cuando un elemento entra en la vista y activa la animación
window.addEventListener('scroll', () => {
    const elements = document.querySelectorAll('.contact-element, .contact-link, .contact-form, .contact-map');

    elements.forEach(element => {
        const position = element.getBoundingClientRect().top;
        if (position < window.innerHeight) {
            element.classList.add('visible');
        }
    });
});

