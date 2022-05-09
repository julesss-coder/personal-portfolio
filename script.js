// Hide collapsable navbar after user clicks one of the menu items
var collapsedNavbar = document.getElementsByClassName('navbar-collapse')[0];

collapsedNavbar.addEventListener('click', function(event) {
  if (event.target.classList.contains('nav-link')) {
    collapsedNavbar.classList.remove('show');
  }
});
  
// Hide collapsable navbar after user clicks outside the navbar
document.addEventListener('click', function(event) {
  // if event.target of click does not have an ancestor with .navbar:
  if (!event.target.closest('.navbar')) {
    // hide navbar
    collapsedNavbar.classList.remove('show');
  }
})





