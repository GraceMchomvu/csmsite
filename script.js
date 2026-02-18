// ===== Mobile Navigation Toggle =====
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });
}

// Close mobile menu when a link is clicked
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (navMenu) navMenu.classList.remove('active');
        if (hamburger) hamburger.classList.remove('active');
        updateActiveLink(link);
    });
});

// ===== Active Navigation Link =====
function updateActiveLink(clickedLink) {
    navLinks.forEach(link => link.classList.remove('active'));
    clickedLink.classList.add('active');
}

// Update active link on scroll
const hasHashNavLinks = Array.from(navLinks).some(link => {
    const href = link.getAttribute('href') || '';
    return href.startsWith('#');
});

if (hasHashNavLinks) {
    window.addEventListener('scroll', () => {
        let current = '';

        const sections = document.querySelectorAll('section');
        sections.forEach(section => {
            const sectionTop = section.offsetTop;

            if (scrollY >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            const href = link.getAttribute('href') || '';
            if (!href.startsWith('#')) return;
            link.classList.remove('active');
            if (href.slice(1) === current) {
                link.classList.add('active');
            }
        });
    });
}

// ===== Smooth Scrolling =====
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

// ===== Form Submission =====
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();

        // Get form values
        const formData = new FormData(this);

        // Simple validation and submission feedback
        alert('Thank you for your message! We will get back to you soon.');

        // Reset form
        this.reset();

        // In a real application, you would send this data to a server
        console.log('Form submitted with data:', {
            name: formData.get('name'),
            email: formData.get('email'),
            subject: formData.get('subject'),
            message: formData.get('message'),
        });
    });
}

// ===== Scroll Animation =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeIn 0.6s ease forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Apply animation to cards on scroll
document.querySelectorAll('.service-card, .event-card, .info-item, .feature-item').forEach(card => {
    card.style.opacity = '0';
    observer.observe(card);
});

// ===== Counter Animation =====
function animateCounters() {
    const counters = document.querySelectorAll('.impact-number');
    const speed = 50;

    counters.forEach(counter => {
        const target = parseInt(counter.innerText);
        let current = 0;
        const increment = target / speed;

        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                counter.innerText = target + '%';
                clearInterval(timer);
            } else {
                counter.innerText = Math.ceil(current) + '%';
            }
        }, 20);
    });
}

// Trigger counter animation when scroll to giving section
const givingSection = document.querySelector('.giving');
if (givingSection) {
    const givingObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounters();
                givingObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    givingObserver.observe(givingSection);
}

// ===== Keyboard Navigation =====
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    }
});

// ===== Add Year to Footer =====
const year = new Date().getFullYear();
const footerYear = document.querySelector('.footer-bottom p');
if (footerYear) {
    const currentText = footerYear.innerText;
    footerYear.innerText = currentText.replace('2026', year);
}

// ===== Newsletter Subscription =====
document.querySelectorAll('.newsletter-input button').forEach(button => {
    button.addEventListener('click', function(e) {
        e.preventDefault();
        const emailInput = this.previousElementSibling;
        const email = emailInput.value;
        
        if (email && email.includes('@')) {
            alert('Thank you for subscribing! Check your email for confirmation.');
            emailInput.value = '';
        } else {
            alert('Please enter a valid email address.');
        }
    });
});

// ===== Dynamic Content Loading Animation =====
window.addEventListener('load', () => {
    document.body.style.opacity = '1';
});

// ===== Print Friendly Styles =====
window.addEventListener('beforeprint', () => {
    document.body.style.backgroundColor = 'white';
});
