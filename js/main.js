/* 
   مؤسسة المعيار العقارية - JavaScript Interaction & Routing
*/

document.addEventListener('DOMContentLoaded', () => {
  // Highlight active link based on current path
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('nav.main-nav a');

  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath || (currentPath === '' && href === 'index.html')) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });

  // Ensure text justification and spacing remain uniform across viewports
  console.log('Almieyar Real Estate application initialized successfully.');
});
