// Profile review counter
let orderCount = 0;

// Get DOM elements
const menuGrid = document.getElementById('menuGrid');
const navButtons = document.querySelectorAll('.nav-btn');
const orderCounter = document.getElementById('orderCounter');
const orderCountDisplay = document.getElementById('orderCount');
const orderButtons = document.querySelectorAll('.order-btn');

// Filter profile items by category
function filterMenu(category) {
    const menuItems = document.querySelectorAll('.menu-item');

    menuItems.forEach(item => {
        if (category === 'all') {
            item.classList.remove('hidden');
            // Add staggered animation
            setTimeout(() => {
                item.style.animation = 'fadeIn 0.5s ease-in';
            }, 50);
        } else {
            if (item.dataset.category === category) {
                item.classList.remove('hidden');
                item.style.animation = 'fadeIn 0.5s ease-in';
            } else {
                item.classList.add('hidden');
            }
        }
    });
}

// Handle navigation button clicks
navButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        navButtons.forEach(btn => btn.classList.remove('active'));

        // Add active class to clicked button
        button.classList.add('active');

        // Filter menu
        const category = button.dataset.category;
        filterMenu(category);
    });
});

// Handle review button clicks
orderButtons.forEach(button => {
    button.addEventListener('click', function(e) {
        // Increment counter
        orderCount++;
        orderCountDisplay.textContent = orderCount;

        // Show counter if hidden
        orderCounter.classList.add('show');

        // Add visual feedback
        const menuItem = this.closest('.menu-item');
        menuItem.style.transform = 'scale(0.95)';
        setTimeout(() => {
            menuItem.style.transform = '';
        }, 200);

        // Change button text temporarily
        const originalText = this.textContent;
        this.textContent = 'Reviewed';
        this.style.background = '#28a745';

        setTimeout(() => {
            this.textContent = originalText;
            this.style.background = '';
        }, 1000);

        // Animate counter
        orderCounter.style.transform = 'scale(1.2)';
        setTimeout(() => {
            orderCounter.style.transform = 'scale(1)';
        }, 300);
    });
});

// Smooth scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add scroll animation for elements
function revealOnScroll() {
    const elements = document.querySelectorAll('.menu-item, .contact-item');

    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;

        if (elementTop < window.innerHeight - elementVisible) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
}

window.addEventListener('scroll', revealOnScroll);

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    console.log('Student profile website loaded successfully.');

    // Set initial state
    filterMenu('all');

    // Initialize scroll animations
    revealOnScroll();
});
