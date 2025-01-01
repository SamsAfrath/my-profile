document.addEventListener('DOMContentLoaded', function() {
    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Animate skill bars on scroll
    const skillBars = document.querySelectorAll('.progress-bar');
    const observerOptions = {
        threshold: 0.5
    };

    const skillObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progressBar = entry.target;
                const targetWidth = progressBar.style.width;
                progressBar.style.width = '0%';
                setTimeout(() => {
                    progressBar.style.width = targetWidth;
                }, 100);
                observer.unobserve(progressBar);
            }
        });
    }, observerOptions);

    skillBars.forEach(bar => {
        skillObserver.observe(bar);
    });

    // Project carousel initialization
    const projectCarousels = document.querySelectorAll('.carousel');
    projectCarousels.forEach(carousel => {
        new bootstrap.Carousel(carousel, {
            interval: 3000,
            touch: true
        });
    });

    // Add animation classes on scroll
    const animatedElements = document.querySelectorAll('.timeline-item, .project-card, .skill-category');
    const fadeObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in');
            }
        });
    }, { threshold: 0.1 });

    animatedElements.forEach(element => {
        fadeObserver.observe(element);
    });





    
    // Initialize Bootstrap carousel
    const carousel = new bootstrap.Carousel(document.querySelector('#ecommerceSlider'), {
        interval: 3000,
        wrap: true,
        keyboard: true
    });

    // Add indicators dynamically
    const carouselInner = document.querySelector('.carousel-inner');
    const slides = carouselInner.querySelectorAll('.carousel-item');
    const indicators = document.createElement('div');
    indicators.className = 'carousel-indicators';

    slides.forEach((_, index) => {
        const button = document.createElement('button');
        button.setAttribute('type', 'button');
        button.setAttribute('data-bs-target', '#ecommerceSlider');
        button.setAttribute('data-bs-slide-to', index.toString());
        if (index === 0) button.classList.add('active');
        indicators.appendChild(button);
    });

    document.querySelector('#ecommerceSlider').appendChild(indicators);
});