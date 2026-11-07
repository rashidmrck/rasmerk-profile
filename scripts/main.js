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
  hamburger.setAttribute('aria-expanded', 'false');
  hamburger.querySelectorAll('span').forEach(s => { s.style.transform = ''; s.style.opacity = '1'; });
}));

// Reveal decorative sections only when animation is available and enabled.
if ('IntersectionObserver' in window && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.05 });

  document.querySelectorAll('.reveal').forEach(element => {
    element.classList.add('reveal-pending');
    observer.observe(element);
  });
}

// Keep newly opened previews visible after the previous card collapses.
const stackedShowcase = matchMedia('(max-width: 900px)');
document.querySelectorAll('.showcase-feature').forEach(feature => {
  const summary = feature.querySelector('summary');
  const preview = feature.querySelector('.showcase-preview');

  summary.addEventListener('click', event => {
    if (feature.open && !stackedShowcase.matches) {
      event.preventDefault();
    }
  });

  feature.addEventListener('toggle', () => {
    if (!feature.open || !stackedShowcase.matches || document.activeElement !== summary) return;

    const navBottom = navbar.getBoundingClientRect().bottom;
    const previewTop = preview.getBoundingClientRect().top;
    if (summary.getBoundingClientRect().top < navBottom || previewTop > window.innerHeight * 0.55) {
      summary.scrollIntoView({ block: 'start' });
    }
  });
});
