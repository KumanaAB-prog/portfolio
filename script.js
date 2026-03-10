// Enhanced Mobile Navigation Toggle with animations
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
    
    // Add bounce animation to hamburger
    hamburger.style.animation = 'bounce 0.5s ease';
    setTimeout(() => {
        hamburger.style.animation = '';
    }, 500);
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Enhanced smooth scrolling with easing
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            // Add click animation
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
            
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Enhanced navbar with scroll effects
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    const scrolled = window.scrollY > 100;
    
    navbar.classList.toggle('scrolled', scrolled);
    
    // Parallax effect for hero
    const hero = document.querySelector('.hero');
    if (hero) {
        const scrolled = window.pageYOffset;
        hero.style.transform = `translateY(${scrolled * 0.3}px)`;
    }
});

// Advanced Intersection Observer with staggered animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const animationObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            // Stagger animations
            setTimeout(() => {
                entry.target.classList.add('fade-in-up');
                
                // Add specific animations based on element type
                if (entry.target.classList.contains('skill-category')) {
                    entry.target.style.animationDelay = `${index * 0.1}s`;
                } else if (entry.target.classList.contains('project-card')) {
                    entry.target.style.animationDelay = `${index * 0.2}s`;
                } else if (entry.target.classList.contains('timeline-item')) {
                    entry.target.classList.add(index % 2 === 0 ? 'fade-in-left' : 'fade-in-right');
                }
            }, index * 100);
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.skill-category, .project-card, .timeline-item, .recommendation-category, .stat').forEach(el => {
    el.classList.add('animate-on-scroll');
    animationObserver.observe(el);
});

// Enhanced profile photo handling with animations
function handleProfilePhoto() {
    const profileImg = document.getElementById('profile-img');
    const placeholder = document.getElementById('profile-placeholder');
    
    if (profileImg && placeholder) {
        profileImg.onload = function() {
            placeholder.style.opacity = '0';
            placeholder.style.transform = 'scale(0.8)';
            setTimeout(() => {
                placeholder.style.display = 'none';
                profileImg.style.display = 'block';
                profileImg.style.opacity = '0';
                profileImg.style.transform = 'scale(0.8)';
                
                // Animate photo in
                setTimeout(() => {
                    profileImg.style.transition = 'all 0.8s ease';
                    profileImg.style.opacity = '1';
                    profileImg.style.transform = 'scale(1)';
                }, 50);
            }, 300);
        };
        
        profileImg.onerror = function() {
            placeholder.style.display = 'flex';
            profileImg.style.display = 'none';
            // Add error animation
            placeholder.style.animation = 'pulse 2s ease-in-out infinite';
        };
        
        // Check if image is already loaded
        if (profileImg.complete && profileImg.naturalHeight !== 0) {
            profileImg.onload();
        } else {
            placeholder.style.display = 'flex';
            profileImg.style.display = 'none';
        }
    }
}

// Enhanced typing animation with cursor
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    // Add cursor
    const cursor = document.createElement('span');
    cursor.innerHTML = '|';
    cursor.style.animation = 'blink 1s infinite';
    cursor.style.color = '#fbbf24';
    
    function type() {
        if (i < text.length) {
            element.innerHTML = text.substring(0, i + 1);
            element.appendChild(cursor);
            i++;
            setTimeout(type, speed);
        } else {
            // Remove cursor after typing
            setTimeout(() => {
                cursor.remove();
            }, 2000);
        }
    }
    
    type();
}

// Particle effect for hero section
function createParticles() {
    const hero = document.querySelector('.hero');
    const particleCount = 50;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.style.position = 'absolute';
        particle.style.width = '2px';
        particle.style.height = '2px';
        particle.style.background = 'rgba(255, 255, 255, 0.5)';
        particle.style.borderRadius = '50%';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animation = `float ${3 + Math.random() * 4}s ease-in-out infinite`;
        particle.style.animationDelay = Math.random() * 2 + 's';
        hero.appendChild(particle);
    }
}

// Enhanced contact form handling with animations
const contactForm = document.querySelector('.contact-form form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const name = this.querySelector('input[type="text"]').value;
        const email = this.querySelector('input[type="email"]').value;
        const subject = this.querySelector('input[type="text"]:nth-of-type(2)').value;
        const message = this.querySelector('textarea').value;
        
        // Simple validation with animations
        const inputs = this.querySelectorAll('input, textarea');
        let isValid = true;
        
        inputs.forEach(input => {
            if (!input.value.trim()) {
                input.style.border = '2px solid #ef4444';
                input.style.animation = 'shake 0.5s ease';
                isValid = false;
                setTimeout(() => {
                    input.style.border = '';
                    input.style.animation = '';
                }, 500);
            }
        });
        
        if (!isValid) {
            return;
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const emailInput = this.querySelector('input[type="email"]');
        if (!emailRegex.test(email)) {
            emailInput.style.border = '2px solid #ef4444';
            emailInput.style.animation = 'shake 0.5s ease';
            setTimeout(() => {
                emailInput.style.border = '';
                emailInput.style.animation = '';
            }, 500);
            return;
        }
        
        // Simulate form submission with loading animation
        const submitBtn = this.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        submitBtn.disabled = true;
        submitBtn.style.background = '#6b7280';
        
        // Success animation
        setTimeout(() => {
            submitBtn.innerHTML = '<i class="fas fa-check"></i> Message Sent!';
            submitBtn.style.background = '#10b981';
            
            // Show success message
            const successMsg = document.createElement('div');
            successMsg.innerHTML = '✨ Thank you! I\'ll get back to you soon.';
            successMsg.style.cssText = `
                position: fixed;
                top: 20px;
                right: 20px;
                background: #10b981;
                color: white;
                padding: 1rem 2rem;
                border-radius: 8px;
                box-shadow: 0 4px 12px rgba(16, 185, 129, 0.3);
                z-index: 9999;
                animation: slideInFromTop 0.5s ease;
            `;
            document.body.appendChild(successMsg);
            
            // Remove success message
            setTimeout(() => {
                successMsg.style.animation = 'fadeInUp 0.5s ease reverse';
                setTimeout(() => successMsg.remove(), 500);
            }, 3000);
            
            this.reset();
            
            // Reset button
            setTimeout(() => {
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
                submitBtn.style.background = '';
            }, 2000);
        }, 2000);
    });
}

// Add shake animation for form validation
const shakeKeyframes = `
    @keyframes shake {
        0%, 100% { transform: translateX(0); }
        25% { transform: translateX(-5px); }
        75% { transform: translateX(5px); }
    }
`;
const shakeStyle = document.createElement('style');
shakeStyle.textContent = shakeKeyframes;
document.head.appendChild(shakeStyle);

// Initialize everything when page loads
window.addEventListener('load', () => {
    handleProfilePhoto();
    createParticles();
    
    const heroTitle = document.querySelector('.hero-content h1');
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        setTimeout(() => {
            typeWriter(heroTitle, originalText, 80);
        }, 1000);
    }
    
    // Add entrance animations to hero elements
    const heroElements = document.querySelectorAll('.hero-content > *');
    heroElements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        setTimeout(() => {
            el.style.transition = 'all 0.8s ease';
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }, 500 + (index * 200));
    });
});

// Add active class to current navigation item with animation
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-menu a[href^="#"]');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
            link.style.animation = 'pulse 0.5s ease';
            setTimeout(() => {
                link.style.animation = '';
            }, 500);
        }
    });
});

// Enhanced stats animation with counting effect
function animateStats() {
    const stats = document.querySelectorAll('.stat h3');
    stats.forEach(stat => {
        const finalValue = stat.textContent;
        if (finalValue !== '∞') {
            const numericValue = parseInt(finalValue);
            let currentValue = 0;
            const increment = numericValue / 50;
            
            const timer = setInterval(() => {
                currentValue += increment;
                if (currentValue >= numericValue) {
                    stat.textContent = finalValue;
                    stat.style.animation = 'bounce 0.5s ease';
                    clearInterval(timer);
                } else {
                    stat.textContent = Math.floor(currentValue) + '+';
                }
            }, 30);
        } else {
            // Special animation for infinity symbol
            stat.style.animation = 'pulse 2s ease-in-out infinite';
        }
    });
}

// Trigger stats animation when about section is visible
const aboutSection = document.querySelector('.about');
if (aboutSection) {
    const aboutObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateStats();
                aboutObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    aboutObserver.observe(aboutSection);
}

// Enhanced hover effects for interactive elements
document.querySelectorAll('.skill-tag').forEach(tag => {
    tag.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-2px) scale(1.05)';
        this.style.transition = 'all 0.2s ease';
    });
    
    tag.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Add project link interactions
document.querySelectorAll('.project-link').forEach(link => {
    link.addEventListener('click', function(e) {
        if (this.getAttribute('href') === '#') {
            e.preventDefault();
            
            // Create animated notification
            const notification = document.createElement('div');
            notification.innerHTML = '🚀 Project link coming soon! Stay tuned.';
            notification.style.cssText = `
                position: fixed;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                background: #2563eb;
                color: white;
                padding: 1.5rem 2rem;
                border-radius: 12px;
                box-shadow: 0 10px 30px rgba(37, 99, 235, 0.3);
                z-index: 9999;
                animation: scaleIn 0.3s ease;
                text-align: center;
                font-weight: 500;
            `;
            document.body.appendChild(notification);
            
            setTimeout(() => {
                notification.style.animation = 'scaleIn 0.3s ease reverse';
                setTimeout(() => notification.remove(), 300);
            }, 2000);
        }
    });
});

// Console message for developers with style
console.log(`
%c🚀 Welcome to Kumana's Portfolio! %c
%c👨‍💻 Built with love and lots of coffee %c
%c💡 Interested in collaborating? Let's connect! %c
%c📧 Contact: kumana.abebe@example.com %c
`, 
'background: linear-gradient(90deg, #667eea, #764ba2); color: white; padding: 10px; border-radius: 5px; font-size: 16px; font-weight: bold;', '',
'background: #2563eb; color: white; padding: 5px; border-radius: 3px;', '',
'background: #10b981; color: white; padding: 5px; border-radius: 3px;', '',
'background: #f59e0b; color: white; padding: 5px; border-radius: 3px;', ''
);