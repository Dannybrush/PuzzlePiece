const sidebar = document.querySelector('.sidebar');
const content = document.querySelector('.content');

sidebar.addEventListener('mouseenter', () => {
  content.classList.add('active');  // Shift content when sidebar is hovered
});

sidebar.addEventListener('mouseleave', () => {
  content.classList.remove('active');  // Reset content position when sidebar is hidden
});
