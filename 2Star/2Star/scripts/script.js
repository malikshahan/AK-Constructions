// Modal functions
function showModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.classList.add("active");
    
    // Add fade-in animation
    modal.style.opacity = "0";
    setTimeout(() => {
        modal.style.transition = "opacity 0.3s ease";
        modal.style.opacity = "1";
    }, 10);
}

function hideModal(modalId) {
    const modal = document.getElementById(modalId);
    
    // Add fade-out animation
    modal.style.opacity = "0";
    setTimeout(() => {
        modal.classList.remove("active");
        modal.style.transition = "";
    }, 300);
}

// Active navigation highlighting
document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-link");

    // Add red line animation to navbar links
    navLinks.forEach((link) => {
        link.addEventListener("mouseenter", () => {
            if (!link.classList.contains("active")) {
                link.style.transform = "translateY(-2px)";
            }
        });
        
        link.addEventListener("mouseleave", () => {
            if (!link.classList.contains("active")) {
                link.style.transform = "translateY(0)";
            }
        });
    });

    // Scroll spy functionality with smoother transitions
    window.addEventListener("scroll", () => {
        let current = "";
        let scrollPosition = window.pageYOffset;

        // Check which section is in view
        sections.forEach((section) => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.clientHeight;
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                current = section.getAttribute("id");
            }
        });

        // Add active class to the corresponding link with smoother transition
        navLinks.forEach((link) => {
            link.classList.remove("active");
            link.style.transition = "all 0.3s ease";
            if (link.getAttribute("href").includes(current)) {
                link.classList.add("active");
                link.style.transform = "translateY(-2px)";
            } else {
                link.style.transform = "translateY(0)";
            }
        });
    });
    
    // Add scroll animations to elements
    const animateOnScroll = function() {
        const cards = document.querySelectorAll('.card, .hover-effect, .hover-popup');
        
        cards.forEach(card => {
            const cardPosition = card.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.2;
            
            if (cardPosition < screenPosition) {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }
        });
    };
    
    // Initialize card animations
    const initCardAnimations = function() {
        const cards = document.querySelectorAll('.card, .hover-effect, .hover-popup');
        
        cards.forEach(card => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(30px)';
            card.style.transition = 'all 0.6s ease';
        });
    };
    
    initCardAnimations();
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Trigger once on load
    
    // Form input animations
    const formInputs = document.querySelectorAll('input, textarea');
    
    formInputs.forEach(input => {
        input.addEventListener('focus', () => {
            input.parentElement.querySelector('label')?.classList.add('text-red-500');
        });
        
        input.addEventListener('blur', () => {
            input.parentElement.querySelector('label')?.classList.remove('text-red-500');
        });
    });
});

// Image hover effects
document.addEventListener("DOMContentLoaded", function() {
    const projectImages = document.querySelectorAll('.image-fade');
    
    projectImages.forEach(img => {
        img.addEventListener('mouseenter', () => {
            img.style.transform = 'scale(1.05)';
        });
        
        img.addEventListener('mouseleave', () => {
            img.style.transform = 'scale(1)';
        });
    });
});

// Button hover effect
document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll('.btn, button[type="submit"]');
    
    buttons.forEach(button => {
        button.addEventListener('mouseenter', () => {
            button.style.transform = 'translateY(-3px)';
            button.style.boxShadow = '0 6px 15px rgba(229, 9, 20, 0.3)';
        });
        
        button.addEventListener('mouseleave', () => {
            button.style.transform = 'translateY(0)';
            button.style.boxShadow = 'none';
        });
    });
});

// Fancybox initialization
$(document).ready(function () {
    $(".fancybox").fancybox({
        openEffect: "none",
        closeEffect: "none",
        helpers: {
            overlay: {
                css: {
                    'background': 'rgba(15, 15, 15, 0.85)'
                }
            }
        }
    });

    $(".zoom").hover(function () {
        $(this).addClass('transition');
    }, function () {
        $(this).removeClass('transition');
    });
});

let lastScrollTop = 0;
const navbar = document.getElementById("navbar");

if (navbar) {  // Ensure navbar exists
    window.addEventListener("scroll", function () {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > lastScrollTop) {
            // Scrolling down, hide navbar
            navbar.classList.add("nav-hidden");
        } else {
            // Scrolling up, show navbar
            navbar.classList.remove("nav-hidden");
        }

        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // Prevent negative values
    });
}

const express = require("express");
const app = express();

// Serve static files from "public" directory
app.use(express.static("public"));

app.listen(3000, () => console.log("Server running on port 3000"));

