// Mobile menu functionality
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

mobileMenuBtn?.addEventListener('click', () => {
    navLinks?.classList.toggle('active');
    const spans = mobileMenuBtn.querySelectorAll('span');
    spans.forEach(span => span.classList.toggle('active'));
});

// Form validation
const contactForm = document.getElementById('contactForm');

contactForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const message = document.getElementById('message');
    
    if (!name || !email || !message) return;
    
    // Basic validation
    let isValid = true;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (name.value.trim().length < 2) {
        showError(name, 'Name must be at least 2 characters long');
        isValid = false;
    }
    
    if (!emailRegex.test(email.value)) {
        showError(email, 'Please enter a valid email address');
        isValid = false;
    }
    
    if (message.value.trim().length < 10) {
        showError(message, 'Message must be at least 10 characters long');
        isValid = false;
    }
    
    if (isValid) {
        // Simulate form submission
        alert('Thank you for your message! We will get back to you soon.');
        contactForm.reset();
    }
});

function showError(input, message) {
    const formGroup = input.parentElement;
    let errorDiv = formGroup.querySelector('.error-message');
    
    if (!errorDiv) {
        errorDiv = document.createElement('div');
        errorDiv.className = 'error-message';
        errorDiv.style.color = 'red';
        errorDiv.style.fontSize = '0.8rem';
        errorDiv.style.marginTop = '0.5rem';
        formGroup.appendChild(errorDiv);
    }
    
    errorDiv.textContent = message;
    
    // Remove error message after 3 seconds
    setTimeout(() => {
        errorDiv.remove();
    }, 3000);
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});