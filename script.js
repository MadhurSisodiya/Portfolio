// Custom cursor
const cursor = document.querySelector('.cursor');
const cursorFollower = document.querySelector('.cursor-follower');
const links = document.querySelectorAll('a, button, .btn, input, textarea');

document.addEventListener('mousemove', (e) => {
  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';
  
  cursorFollower.style.left = e.clientX + 'px';
  cursorFollower.style.top = e.clientY + 'px';
});

// Cursor effects on hover
links.forEach(link => {
  link.addEventListener('mouseenter', () => {
    cursor.classList.add('active');
    cursorFollower.classList.add('active');
  });
  
  link.addEventListener('mouseleave', () => {
    cursor.classList.remove('active');
    cursorFollower.classList.remove('active');
  });
});

// Mobile menu toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const navItems = document.querySelectorAll('.nav-item');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navLinks.classList.toggle('active');
});

navItems.forEach(item => {
  item.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navLinks.classList.remove('active');
  });
});

// Scroll animation
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animated');
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll('.section').forEach(section => {
  observer.observe(section);
});

// Header scroll effect
const header = document.querySelector('header');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// Typewriter effect
const typewriterText = document.getElementById('typewriter-text');
const textArray = ["Creative Developer", "UI/UX Designer", "IoT Enthusiast"];
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingDelay = 150;

function typeWriter() {
  const currentText = textArray[textIndex];
  
  if (isDeleting) {
    typewriterText.textContent = currentText.substring(0, charIndex - 1);
    charIndex--;
    typingDelay = 50;
  } else {
    typewriterText.textContent = currentText.substring(0, charIndex + 1);
    charIndex++;
    typingDelay = 150;
  }
  
  if (!isDeleting && charIndex === currentText.length) {
    isDeleting = true;
    typingDelay = 2000; // Wait before deleting
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    textIndex = (textIndex + 1) % textArray.length;
    typingDelay = 500; // Wait before typing next text
  }
  
  setTimeout(typeWriter, typingDelay);
}

// Start the typewriter effect
window.addEventListener('load', typeWriter);

// Timeline animation
const timelineItems = document.querySelectorAll('.timeline-item');
const timelineObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      entry.target.style.animationDelay = `${index * 0.3}s`;
      entry.target.style.opacity = 1;
    }
  });
}, { threshold: 0.2 });

timelineItems.forEach(item => {
  timelineObserver.observe(item);
});

// Project cards hover effects
const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;
    
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-5px)`;
  });
  
  card.addEventListener('mouseleave', () => {
    card.style.transform = '';
  });
});

// Contact form validation
const contactForm = document.querySelector('.contact-form');
const formFields = document.querySelectorAll('.form-group input, .form-group textarea');

if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    let isValid = true;
    
    formFields.forEach(field => {
      if (!field.value.trim()) {
        isValid = false;
        field.style.borderColor = '#ff6b6b';
      } else {
        field.style.borderColor = '';
      }
    });
    
    if (isValid) {
      // Here you would typically send the form data to a server
      alert('Form submitted successfully!');
      contactForm.reset();
    }
  });
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    
    if (targetElement) {
      const headerHeight = document.querySelector('header').offsetHeight;
      const targetPosition = targetElement.offsetTop - headerHeight;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  });
});