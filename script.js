/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*==================== CHANGE BACKGROUND HEADER ====================*/ 
function scrollHeader(){
    const nav = document.getElementById('header')
    // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*==================== SHOW SCROLL UP ====================*/ 
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 560) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*==================== SCROLL REVEAL ANIMATION ====================*/
// Initialize scroll reveal animations
function revealSections() {
    const sections = document.querySelectorAll('.section');
    
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (sectionTop < windowHeight - 100) {
            section.classList.add('show');
        }
    });
}

// Run on page load and scroll
window.addEventListener('scroll', revealSections);
window.addEventListener('load', revealSections);

/*==================== SMOOTH SCROLLING ====================*/
// Smooth scrolling for navigation links
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

/*==================== HERO ANIMATION ====================*/
// Add animation to hero elements on page load
window.addEventListener('load', () => {
    const heroTitle = document.querySelector('.hero__title');
    const heroDescription = document.querySelector('.hero__description');
    const heroButtons = document.querySelector('.hero__buttons');
    const heroImg = document.querySelector('.hero__img');
    const heroStats = document.querySelector('.hero__stats');
    const heroBadge = document.querySelector('.hero__badge');
    
    // Animate badge
    if (heroBadge) {
        heroBadge.style.opacity = '0';
        heroBadge.style.transform = 'translateY(-20px)';
        heroBadge.style.transition = 'all 0.6s ease-out';
        
        setTimeout(() => {
            heroBadge.style.opacity = '1';
            heroBadge.style.transform = 'translateY(0)';
        }, 100);
    }
    
    if (heroTitle) {
        heroTitle.style.opacity = '0';
        heroTitle.style.transform = 'translateY(30px)';
        heroTitle.style.transition = 'all 0.8s ease-out';
        
        setTimeout(() => {
            heroTitle.style.opacity = '1';
            heroTitle.style.transform = 'translateY(0)';
        }, 300);
    }
    
    if (heroDescription) {
        heroDescription.style.opacity = '0';
        heroDescription.style.transform = 'translateY(30px)';
        heroDescription.style.transition = 'all 0.8s ease-out';
        
        setTimeout(() => {
            heroDescription.style.opacity = '1';
            heroDescription.style.transform = 'translateY(0)';
        }, 500);
    }
    
    // Animate stats
    if (heroStats) {
        heroStats.style.opacity = '0';
        heroStats.style.transform = 'translateY(20px)';
        heroStats.style.transition = 'all 0.6s ease-out';
        
        setTimeout(() => {
            heroStats.style.opacity = '1';
            heroStats.style.transform = 'translateY(0)';
        }, 700);
    }
    
    if (heroButtons) {
        heroButtons.style.opacity = '0';
        heroButtons.style.transform = 'translateY(30px)';
        heroButtons.style.transition = 'all 0.8s ease-out';
        
        setTimeout(() => {
            heroButtons.style.opacity = '1';
            heroButtons.style.transform = 'translateY(0)';
        }, 900);
    }
    
    if (heroImg) {
        heroImg.style.opacity = '0';
        heroImg.style.transform = 'scale(0.8) rotate(-10deg)';
        heroImg.style.transition = 'all 1.2s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
        
        setTimeout(() => {
            heroImg.style.opacity = '1';
            heroImg.style.transform = 'scale(1) rotate(0deg)';
        }, 1100);
    }
    
    // Animate tech circles with stagger effect
    const techCircles = document.querySelectorAll('.tech-circle');
    techCircles.forEach((circle, index) => {
        circle.style.opacity = '0';
        circle.style.transform = 'scale(0)';
        circle.style.transition = 'all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
        
        setTimeout(() => {
            circle.style.opacity = '1';
            circle.style.transform = 'scale(1)';
        }, 1300 + (index * 100));
    });
    
    // Animate central logo
    const centralLogo = document.querySelector('.central-logo');
    if (centralLogo) {
        centralLogo.style.opacity = '0';
        centralLogo.style.transform = 'scale(0) rotate(180deg)';
        centralLogo.style.transition = 'all 1s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
        
        setTimeout(() => {
            centralLogo.style.opacity = '1';
            centralLogo.style.transform = 'scale(1) rotate(0deg)';
        }, 1800);
    }
});

/*==================== SERVICES CARDS ANIMATION ====================*/
// Animate services cards when they come into view
function animateServicesCards() {
    const cards = document.querySelectorAll('.services__card');
    
    cards.forEach((card, index) => {
        const cardTop = card.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (cardTop < windowHeight - 100) {
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, index * 100);
        }
    });
}

// Initialize services cards
window.addEventListener('load', () => {
    const cards = document.querySelectorAll('.services__card');
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'all 0.6s ease-out';
    });
});

window.addEventListener('scroll', animateServicesCards);

/*==================== CONTACT CARDS ANIMATION ====================*/
// Animate contact cards when they come into view
function animateContactCards() {
    const cards = document.querySelectorAll('.contact__card');
    
    cards.forEach((card, index) => {
        const cardTop = card.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (cardTop < windowHeight - 100) {
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, index * 150);
        }
    });
}

// Initialize contact cards
window.addEventListener('load', () => {
    const cards = document.querySelectorAll('.contact__card');
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'all 0.6s ease-out';
    });
});

window.addEventListener('scroll', animateContactCards);

/*==================== WHATSAPP INTEGRATION ====================*/
// WhatsApp chat functionality with enhanced UX
function openWhatsAppChat() {
    const phoneNumber = '918013759513';
    const message = encodeURIComponent('Hello! I need IT support services from IT TECH SOLUTION. Can you help me?');
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;
    
    // Add visual feedback
    const whatsappFloat = document.querySelector('.whatsapp-float');
    if (whatsappFloat) {
        whatsappFloat.style.transform = 'scale(0.9)';
        setTimeout(() => {
            whatsappFloat.style.transform = 'scale(1.15) rotate(5deg)';
        }, 100);
    }
    
    window.open(whatsappURL, '_blank');
}

// Add click event to WhatsApp buttons
document.addEventListener('DOMContentLoaded', () => {
    const whatsappButtons = document.querySelectorAll('a[href*="wa.me"]');
    
    whatsappButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            // Add a small delay for better UX
            setTimeout(() => {
                // Track WhatsApp click (you can add analytics here)
                console.log('WhatsApp chat opened');
            }, 100);
        });
    });
});

/*==================== SIMPLE BOOKING MODAL ====================*/
document.addEventListener('DOMContentLoaded', function() {
    const bookServiceBtn = document.getElementById('book-service-btn');
    const bookingModal = document.getElementById('booking-modal');
    const closeBtn = document.getElementById('close-btn');
    const modalOverlay = document.getElementById('modal-overlay');

    // Open modal
    if (bookServiceBtn) {
        bookServiceBtn.addEventListener('click', function(e) {
            e.preventDefault();
            if (bookingModal) {
                bookingModal.classList.add('show');
                document.body.style.overflow = 'hidden';
            }
        });
    }

    // Close modal function
    function closeModal() {
        if (bookingModal) {
            bookingModal.classList.remove('show');
            document.body.style.overflow = '';
        }
    }

    // Close modal events
    if (closeBtn) {
        closeBtn.addEventListener('click', closeModal);
    }

    if (modalOverlay) {
        modalOverlay.addEventListener('click', closeModal);
    }

    // Close on Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && bookingModal.classList.contains('show')) {
            closeModal();
        }
    });
});

// Enhanced Google Form submission handling
window.addEventListener('message', function(event) {
    // Verify the message is from Google Forms
    if (event.origin.includes('google.com') || event.origin.includes('docs.google.com')) {
        console.log('📨 Message from Google Form:', event.data);
        
        // Handle different form events
        if (event.data === 'formSubmitted' || 
            (typeof event.data === 'string' && event.data.includes('submitted'))) {
            
            // Close the modal after successful submission
            closeBookingModal();
            
            // Show enhanced success message
            showSuccessMessage();
            
            // Track successful submission
            console.log('✅ Form submitted successfully');
        }
    }
});

// Show success message with better UX
function showSuccessMessage() {
    // Create success notification
    const successNotification = document.createElement('div');
    successNotification.className = 'success-notification';
    successNotification.innerHTML = `
        <div class="success-content">
            <div class="success-icon">
                <i class="fas fa-check-circle"></i>
            </div>
            <div class="success-text">
                <h3>Booking Submitted Successfully!</h3>
                <p>Thank you for choosing IT Tech Solution. We'll contact you within 24 hours to confirm your service appointment.</p>
                <div class="success-actions">
                    <a href="https://wa.me/918013759513" target="_blank" class="success-btn whatsapp-btn">
                        <i class="fab fa-whatsapp"></i> Chat on WhatsApp
                    </a>
                    <button onclick="closeSuccessNotification()" class="success-btn close-btn">
                        <i class="fas fa-times"></i> Close
                    </button>
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(successNotification);
    
    // Show notification with animation
    setTimeout(() => {
        successNotification.classList.add('show');
    }, 100);
    
    // Auto-close after 10 seconds
    setTimeout(() => {
        closeSuccessNotification();
    }, 10000);
}

// Close success notification
function closeSuccessNotification() {
    const notification = document.querySelector('.success-notification');
    if (notification) {
        notification.classList.remove('show');
        setTimeout(() => {
            notification.remove();
        }, 300);
    }
}

// Adjust iframe height based on content and screen size
function adjustIframeHeight() {
    if (bookingIframe) {
        const modalContent = document.querySelector('.modal__content');
        const modalHeader = document.querySelector('.modal__header');
        const modalInfo = document.querySelector('.modal__info');
        const modalFooter = document.querySelector('.modal__footer');
        
        if (modalContent && modalHeader && modalInfo && modalFooter) {
            const availableHeight = window.innerHeight - 100; // Account for margins
            const usedHeight = modalHeader.offsetHeight + modalInfo.offsetHeight + modalFooter.offsetHeight + 40; // Account for padding
            const iframeHeight = Math.max(500, availableHeight - usedHeight);
            
            bookingIframe.style.height = `${iframeHeight}px`;
        }
    }
}

// Adjust height on load and resize
window.addEventListener('load', adjustIframeHeight);
window.addEventListener('resize', throttle(adjustIframeHeight, 250));

// Form analytics and tracking
function trackBookingEvent(action, details = {}) {
    console.log(`📊 Booking Event: ${action}`, details);
    
    // You can integrate with Google Analytics or other tracking services here
    if (typeof gtag !== 'undefined') {
        gtag('event', action, {
            event_category: 'Booking',
            event_label: 'Service Booking Form',
            ...details
        });
    }
}

/*==================== FORM VALIDATION ====================*/
function validateForm(form) {
    const inputs = form.querySelectorAll('input[required], textarea[required], select[required]');
    let isValid = true;
    
    inputs.forEach(input => {
        if (!input.value.trim()) {
            input.classList.add('error');
            isValid = false;
            
            // Add error message
            let errorMessage = input.nextElementSibling;
            if (!errorMessage || !errorMessage.classList.contains('error-message')) {
                errorMessage = document.createElement('span');
                errorMessage.classList.add('error-message');
                errorMessage.style.color = 'red';
                errorMessage.style.fontSize = '0.8rem';
                input.parentNode.insertBefore(errorMessage, input.nextSibling);
            }
            errorMessage.textContent = `Please ${input.tagName === 'SELECT' ? 'select' : 'enter'} ${input.name}`;
        } else {
            input.classList.remove('error');
            const errorMessage = input.nextElementSibling;
            if (errorMessage && errorMessage.classList.contains('error-message')) {
                errorMessage.remove();
            }
        }

        // Phone number validation
        if (input.id === 'phone' && input.value.trim()) {
            const phoneRegex = /^[\d\s+\-()]{10,15}$/;
            if (!phoneRegex.test(input.value.trim())) {
                input.classList.add('error');
                isValid = false;
                let errorMessage = input.nextElementSibling;
                if (!errorMessage || !errorMessage.classList.contains('error-message')) {
                    errorMessage = document.createElement('span');
                    errorMessage.classList.add('error-message');
                    errorMessage.style.color = 'red';
                    errorMessage.style.fontSize = '0.8rem';
                    input.parentNode.insertBefore(errorMessage, input.nextSibling);
                }
                errorMessage.textContent = 'Please enter a valid phone number';
            }
        }

        // Email validation
        if (input.id === 'email' && input.value.trim()) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(input.value.trim())) {
                input.classList.add('error');
                isValid = false;
                let errorMessage = input.nextElementSibling;
                if (!errorMessage || !errorMessage.classList.contains('error-message')) {
                    errorMessage = document.createElement('span');
                    errorMessage.classList.add('error-message');
                    errorMessage.style.color = 'red';
                    errorMessage.style.fontSize = '0.8rem';
                    input.parentNode.insertBefore(errorMessage, input.nextSibling);
                }
                errorMessage.textContent = 'Please enter a valid email address';
            }
        }
    });
    
    return isValid;
}

// Set minimum date for booking to today
const dateInput = document.getElementById('date');
if (dateInput) {
    const today = new Date().toISOString().split('T')[0];
    dateInput.min = today;
}

// Phone number formatting
const phoneInput = document.getElementById('phone');
if (phoneInput) {
    phoneInput.addEventListener('input', (e) => {
        // Allow only numbers and common phone number characters
        e.target.value = e.target.value.replace(/[^0-9+\-\s()]/g, '');
    });
}

/*==================== LOADING ANIMATION ====================*/
// Add loading animation for better UX
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
    
    // Remove any loading overlays if they exist
    const loader = document.querySelector('.loader');
    if (loader) {
        loader.style.opacity = '0';
        setTimeout(() => {
            loader.style.display = 'none';
        }, 500);
    }
});

/*==================== MOBILE MENU IMPROVEMENTS ====================*/
// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    const navMenu = document.getElementById('nav-menu');
    const navToggle = document.getElementById('nav-toggle');
    
    if (navMenu && navMenu.classList.contains('show-menu')) {
        if (!navMenu.contains(e.target) && !navToggle.contains(e.target)) {
            navMenu.classList.remove('show-menu');
        }
    }
});

// Handle escape key to close mobile menu
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        const navMenu = document.getElementById('nav-menu');
        if (navMenu && navMenu.classList.contains('show-menu')) {
            navMenu.classList.remove('show-menu');
        }
    }
});

/*==================== PERFORMANCE OPTIMIZATIONS ====================*/
// Throttle scroll events for better performance
function throttle(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply throttling to scroll events
const throttledScrollActive = throttle(scrollActive, 100);
const throttledScrollHeader = throttle(scrollHeader, 100);
const throttledScrollUp = throttle(scrollUp, 100);
const throttledRevealSections = throttle(revealSections, 100);
const throttledAnimateServicesCards = throttle(animateServicesCards, 100);
const throttledAnimateContactCards = throttle(animateContactCards, 100);

// Replace original scroll listeners with throttled versions
window.removeEventListener('scroll', scrollActive);
window.removeEventListener('scroll', scrollHeader);
window.removeEventListener('scroll', scrollUp);
window.removeEventListener('scroll', revealSections);
window.removeEventListener('scroll', animateServicesCards);
window.removeEventListener('scroll', animateContactCards);

window.addEventListener('scroll', throttledScrollActive);
window.addEventListener('scroll', throttledScrollHeader);
window.addEventListener('scroll', throttledScrollUp);
window.addEventListener('scroll', throttledRevealSections);
window.addEventListener('scroll', throttledAnimateServicesCards);
window.addEventListener('scroll', throttledAnimateContactCards);

/*==================== ACCESSIBILITY IMPROVEMENTS ====================*/
// Add keyboard navigation support
document.addEventListener('keydown', (e) => {
    // Tab navigation improvements
    if (e.key === 'Tab') {
        document.body.classList.add('keyboard-navigation');
    }
});

document.addEventListener('mousedown', () => {
    document.body.classList.remove('keyboard-navigation');
});

// Add focus indicators for better accessibility
const focusableElements = document.querySelectorAll('a, button, input, textarea, select');
focusableElements.forEach(element => {
    element.addEventListener('focus', () => {
        element.classList.add('focused');
    });
    
    element.addEventListener('blur', () => {
        element.classList.remove('focused');
    });
});

/*==================== LAZY LOADING FOR IMAGES ====================*/
// Implement lazy loading for better performance
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });

    const lazyImages = document.querySelectorAll('img[data-src]');
    lazyImages.forEach(img => imageObserver.observe(img));
}

/*==================== ENHANCED INTERACTIONS ====================*/
// Add hover effects for service cards
document.addEventListener('DOMContentLoaded', () => {
    const serviceCards = document.querySelectorAll('.services__card');
    
    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Add click effect for buttons
    const buttons = document.querySelectorAll('.button');
    buttons.forEach(button => {
        button.addEventListener('click', (e) => {
            // Create ripple effect
            const ripple = document.createElement('span');
            const rect = button.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');
            
            button.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
    
    // Add parallax effect to floating hexagons
    const floatingHexagons = document.querySelectorAll('.floating-hexagon');
    
    window.addEventListener('mousemove', (e) => {
        const mouseX = e.clientX / window.innerWidth;
        const mouseY = e.clientY / window.innerHeight;
        
        floatingHexagons.forEach((hex, index) => {
            const speed = (index + 1) * 0.5;
            const x = (mouseX - 0.5) * speed * 20;
            const y = (mouseY - 0.5) * speed * 20;
            
            hex.style.transform = `translate(${x}px, ${y}px) rotate(${x}deg)`;
        });
    });
});

/*==================== SCROLL ANIMATIONS ====================*/
// Enhanced scroll animations
function enhancedScrollAnimations() {
    const elements = document.querySelectorAll('.services__card, .contact__card, .highlight__card');
    
    elements.forEach((element, index) => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementTop < windowHeight - 50) {
            setTimeout(() => {
                element.classList.add('animate-in');
            }, index * 100);
        }
    });
}

window.addEventListener('scroll', throttle(enhancedScrollAnimations, 100));

/*==================== COUNTER ANIMATION ====================*/
// Animate numbers in hero stats
function animateCounters() {
    const counters = document.querySelectorAll('.stat-number');
    
    counters.forEach(counter => {
        const target = counter.textContent;
        const isNumber = /^\d+/.test(target);
        
        if (isNumber) {
            const finalNumber = parseInt(target.match(/\d+/)[0]);
            let current = 0;
            const increment = finalNumber / 50;
            const timer = setInterval(() => {
                current += increment;
                if (current >= finalNumber) {
                    counter.textContent = target;
                    clearInterval(timer);
                } else {
                    counter.textContent = Math.floor(current) + target.replace(/\d+/, '');
                }
            }, 30);
        }
    });
}

// Trigger counter animation when hero section is visible
const heroObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            setTimeout(animateCounters, 1000);
            heroObserver.unobserve(entry.target);
        }
    });
});

const heroSection = document.querySelector('.hero');
if (heroSection) {
    heroObserver.observe(heroSection);
}

console.log('🚀 IT TECH SOLUTION - Enhanced Website Loaded Successfully!');
console.log('✨ Features: Hexagonal Design, Smooth Animations, Interactive Elements');
console.log('📱 Contact: 8013759513 | 📧 ittechsolutioncare@gmail.com');