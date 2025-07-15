// Mobile menu toggle: show/hide navigation links on small screens
document.getElementById('menu-toggle').addEventListener('click', () => {
  document.getElementById('nav-links').classList.toggle('show');
});

// Dark mode toggle: toggle 'dark-mode' class on body
document.getElementById('dark-mode-toggle').addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

// Contact form submission alert
document.getElementById('contact-form').addEventListener('submit', e => {
  alert('Thank you for your message! I will get back to you shortly.');
  // The form action is mailto:, so it will open the user's email client.
});
