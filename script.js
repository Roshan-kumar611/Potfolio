// Scroll animation (optional)
window.addEventListener("scroll", () => {
  document.querySelectorAll("section").forEach(section => {
    let position = section.getBoundingClientRect().top;
    if (position < window.innerHeight - 100) {
      section.classList.add("show");
    }
  });
});

// Navbar toggle
const toggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

toggle.addEventListener('click', () => {
  navLinks.classList.toggle('active'); // match CSS class
});

// Close nav when a link is clicked (optional)
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
  });
});
