// ========================================
// HARBOUR GRAND HOTEL - MAIN JAVASCRIPT
// ========================================

(function() {
    'use strict';

    // ----- 1. MOBILE MENU TOGGLE -----
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', function(e) {
            e.stopPropagation();
            navLinks.classList.toggle('open');
        });

        // Close menu on link click
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('open');
            });
        });

        // Close menu on outside click
        document.addEventListener('click', function(e) {
            if (!e.target.closest('.navbar')) {
                navLinks.classList.remove('open');
            }
        });
    }

    // ----- 2. SMOOTH SCROLL -----
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // ----- 3. ACTIVE NAV LINK -----
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-links a').forEach(link => {
        const linkPage = link.getAttribute('href');
        if (linkPage === currentPage || 
            (currentPage === 'index.html' && linkPage === '#')) {
            link.classList.add('active');
        }
    });

    // ----- 4. SET MIN DATE -----
    const dateInputs = document.querySelectorAll('input[type="date"]');
    if (dateInputs.length) {
        const today = new Date().toISOString().split('T')[0];
        dateInputs.forEach(input => {
            input.setAttribute('min', today);
        });
    }

    console.log('🚀 Harbour Grand Hotel loaded!');

})();
