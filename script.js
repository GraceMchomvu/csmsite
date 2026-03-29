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

// ===== Scroll Reveal Animation =====
const revealObserverOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
};

const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('reveal-visible');
            observer.unobserve(entry.target); // Only animate once
        }
    });
}, revealObserverOptions);

// Observe all elements with .reveal-on-scroll class
document.querySelectorAll('.reveal-on-scroll').forEach((el, index) => {
    // Optional: Add staggered delay if parent has .stagger-children
    if (el.closest('.stagger-reveal-group')) {
        el.style.transitionDelay = `${(index % 5) * 0.1}s`;
    }
    revealObserver.observe(el);
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
    const givingObserver = new IntersectionObserver(function (entries) {
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
    button.addEventListener('click', function (e) {
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

// ===== Hero Text Cycling Animation =====
(function () {
    const wordElement = document.getElementById('heroForWord');
    if (!wordElement) return;

    const words = [
        "Prophecy",
        "Healing",
        "Worship",
        "Answers",
        "Prayer",
        "Testimony",
        "You",
        "Families",
        "Nations"
    ];

    let currentIndex = 0;

    setInterval(() => {
        // Fade out
        wordElement.style.opacity = '0';
        wordElement.style.transform = 'translateY(10px)';

        setTimeout(() => {
            // Change text
            currentIndex = (currentIndex + 1) % words.length;
            wordElement.textContent = words[currentIndex];

            // Fade in
            wordElement.style.opacity = '1';
            wordElement.style.transform = 'translateY(0)';
        }, 300); // Wait for fade out to finish

    }, 2500); // Change every 2.5 seconds
})();

// ===== Hero Background Slideshow =====
(function() {
    const slides = document.querySelectorAll('.hero-slideshow .slide');
    if (slides.length > 0) {
        let currentSlide = 0;
        setInterval(() => {
            slides[currentSlide].classList.remove('active');
            currentSlide = (currentSlide + 1) % slides.length;
            slides[currentSlide].classList.add('active');
        }, 5000); // Change image every 5 seconds
    }
})();

// ===== Language Translation =====
const languageSelector = document.getElementById('language-selector');

function setLanguage(lang) {
    if (!window.csmTranslations || !window.csmTranslations[lang]) return;
    const t = window.csmTranslations[lang];
    
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (t[key]) {
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                el.placeholder = t[key];
            } else {
                el.innerHTML = t[key];
            }
        }
    });

    // Handle HTML dir for Arabic
    if (lang === 'ar') {
        document.documentElement.dir = 'rtl';
        document.documentElement.lang = 'ar';
    } else {
        document.documentElement.dir = 'ltr';
        document.documentElement.lang = lang;
    }
    
    if (languageSelector) {
        languageSelector.value = lang;
    }
    
    localStorage.setItem('csmLanguage', lang);

    if (typeof updateServiceDates === 'function') {
        updateServiceDates(lang);
    }
}

if (languageSelector) {
    languageSelector.addEventListener('change', (e) => {
        setLanguage(e.target.value);
    });
}

// Initialize after translating if any translations exist
window.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('csmLanguage') || 'en';
    if(window.csmTranslations) {
        setLanguage(savedLang);
    } else {
        if (typeof updateServiceDates === 'function') {
            updateServiceDates(savedLang);
        }
    }
});

// ===== Dynamic Service Dates =====
function getNextDayOfWeek(dayOfWeek, lang = 'en') {
    const today = new Date();
    const resultDate = new Date(today);
    
    let distance = (dayOfWeek + 7 - today.getDay()) % 7;
    resultDate.setDate(today.getDate() + distance);
    
    let locale = 'en-US';
    if (lang === 'sw') locale = 'sw-TZ';
    else if (lang === 'fr') locale = 'fr-FR';
    else if (lang === 'es') locale = 'es-ES';
    else if (lang === 'ar') locale = 'ar-SA';
    
    const options = { month: 'short', day: 'numeric' };
    return resultDate.toLocaleDateString(locale, options);
}

function updateServiceDates(lang = 'en') {
    const satEl = document.getElementById('date-sat');
    if (satEl) satEl.textContent = getNextDayOfWeek(6, lang);
    
    const sunEl = document.getElementById('date-sun');
    if (sunEl) sunEl.textContent = getNextDayOfWeek(0, lang);
    
    const tueEl = document.getElementById('date-tue');
    if (tueEl) tueEl.textContent = getNextDayOfWeek(2, lang);
    
    const thuEl = document.getElementById('date-thu');
    if (thuEl) thuEl.textContent = getNextDayOfWeek(4, lang);
}

// ===== Easter Countdown =====
function initEasterCountdown() {
    const countdownEl = document.getElementById('easterCountdown');
    if (!countdownEl) return;

    // Easter target: April 5, 2026, 00:00:00 local time
    const easterDate = new Date('April 5, 2026 00:00:00').getTime();

    function update() {
        const now = new Date().getTime();
        const distance = easterDate - now;

        if (distance < 0) {
            countdownEl.innerHTML = "He Is Risen!";
            countdownEl.classList.add('risen');
            
            const cross = document.querySelector('.rotating-cross');
            if(cross) {
                cross.style.color = "#fbbf24"; // Turn golden too
                cross.style.animation = "pulseGlow 2s infinite alternate"; 
            }
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const secs = Math.floor((distance % (1000 * 60)) / 1000);

        countdownEl.innerHTML = `Easter: ${days}d ${hours}h ${mins}m ${secs}s`;
    }

    update();
    setInterval(update, 1000);
}

// Initialize when ready
if(document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initEasterCountdown);
} else {
    initEasterCountdown();
}

