const navbar = document.querySelector('.navbar');
const mobileToggle = document.querySelector('.mobile-menu-btn');

mobileToggle?.addEventListener('click', () => {
  navbar?.classList.toggle('open');
});

const revealItems = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.12,
  }
);

revealItems.forEach((item) => observer.observe(item));
