// -- Navbar scroll effect ---------------------------------------------------
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 20);
}, { passive: true });

// -- Mobile hamburger -------------------------------------------------------
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('nav-links');
hamburger.addEventListener('click', () => {
  const open = navLinks.classList.toggle('open');
  hamburger.setAttribute('aria-expanded', open);
  hamburger.querySelectorAll('span')[0].style.transform = open ? 'rotate(45deg) translate(5px, 5px)' : '';
  hamburger.querySelectorAll('span')[1].style.opacity  = open ? '0' : '1';
  hamburger.querySelectorAll('span')[2].style.transform = open ? 'rotate(-45deg) translate(5px, -5px)' : '';
});
// Close menu on nav link click
navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  navLinks.classList.remove('open');
  hamburger.querySelectorAll('span').forEach(s => { s.style.transform = ''; s.style.opacity = '1'; });
}));

// -- Scroll reveal (Intersection Observer) ---------------------------------
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// -- Stagger feature cards --------------------------------------------------
const cardObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 60);
      cardObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.05 });

document.querySelectorAll('.feature-card').forEach(card => {
  card.classList.add('reveal');
  cardObserver.observe(card);
});

// Interactive Showcase Logic
const tabs = document.querySelectorAll('.showcase-tab');
const showcaseImg = document.getElementById('showcase-image');

if (tabs.length > 0 && showcaseImg) {
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      // Remove active class from all
      tabs.forEach(t => t.classList.remove('active'));
      // Add active to clicked
      tab.classList.add('active');
      
      // Get new image src
      const newSrc = tab.getAttribute('data-img');
      
      // Simple fade effect
      showcaseImg.classList.add('fade');
      setTimeout(() => {
        showcaseImg.src = newSrc;
        showcaseImg.classList.remove('fade');
      }, 150);
    });
  });
}

// Screenshots carousel tabs
const ssTabs = document.querySelectorAll('.ss-tab');
const ssImage = document.getElementById('ss-image');
if (ssTabs.length > 0 && ssImage) {
  ssTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      ssTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const newSrc = tab.getAttribute('data-ss');
      ssImage.style.opacity = '0.4';
      setTimeout(() => { ssImage.src = newSrc; ssImage.style.opacity = '1'; }, 150);
    });
  });
}
