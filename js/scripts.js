document.addEventListener("DOMContentLoaded", function () {
  const menuSign = document.querySelector(".nav-bar-menu-sign");
  const sideMenuWrapper = document.querySelector(".sidemenu-wrapper");

  function toggleMenu() {
    sideMenuWrapper.classList.toggle("active");
    menuSign.classList.toggle("active");
  }

  // Toggle when clicking the menu sign.
  menuSign.addEventListener("click", function (e) {
    e.stopPropagation();
    toggleMenu();
  });

  // Toggle when clicking outside the sidepanelmenu.
  sideMenuWrapper.addEventListener("click", function (e) {
    // Only toggle if clicking on the wrapper, not inside the menu.
    if (e.target === sideMenuWrapper) {
      toggleMenu();
    }
  });
});


document.addEventListener('DOMContentLoaded', () => {
  const footer = document.querySelector('.uui-footer07_component');
  
  // Intersection Observer to trigger animation when footer is in view
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // Stop observing once animated
      }
    });
  }, {
    threshold: 0.1 // Trigger when 10% of footer is visible
  });

  observer.observe(footer);
});

