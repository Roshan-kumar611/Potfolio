// script.js

// Scroll animation - add "show" class when section is visible
(function() {
  const sections = document.querySelectorAll("section");
  function onScroll() {
    sections.forEach(section => {
      const rect = section.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        section.classList.add("show");
      }
    });
  }
  // initial check + throttled scroll listener
  onScroll();
  let scrollTimeout = null;
  window.addEventListener("scroll", () => {
    if (scrollTimeout) return;
    scrollTimeout = setTimeout(() => {
      onScroll();
      scrollTimeout = null;
    }, 100);
  });
})();

// Mobile menu toggle
(function() {
  const toggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  const resumeBtn = document.querySelector('.resume-btn');

  if (!toggle || !navLinks) return; // fail-safe

  // toggle active state and aria-expanded for accessibility
  toggle.addEventListener('click', () => {
    const isActive = navLinks.classList.toggle('active');
    toggle.setAttribute('aria-expanded', isActive ? 'true' : 'false');
    // change hamburger icon into X visually by rotating lines (optional)
    toggle.classList.toggle('open');
  });

  // Close nav when a link is clicked (mobile)
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      if (navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.classList.remove('open');
      }
    });
  });

  // Close menu on outside click (optional)
  document.addEventListener('click', (e) => {
    if (!navLinks.classList.contains('active')) return;
    const insideNav = e.target.closest('.nav-links') || e.target.closest('.menu-toggle');
    if (!insideNav) {
      navLinks.classList.remove('active');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.classList.remove('open');
    }
  });

  // keyboard: ESC closes menu
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navLinks.classList.contains('active')) {
      navLinks.classList.remove('active');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.classList.remove('open');
    }
  });
})();

// Prevent form default for demo (remove if you have backend)
(function() {
  const form = document.querySelector('.contact-form');
  if (!form) return;
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    // simple feedback (replace with real send later)
    alert('Thanks! Message sending is not configured in this demo.');
    form.reset();
  });
})();
