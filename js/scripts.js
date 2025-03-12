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




