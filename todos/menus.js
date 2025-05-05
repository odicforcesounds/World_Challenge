var menuToggle = document.getElementById('menu-toggle');
var sidebar = document.querySelector('.sidebar');
var content = document.querySelector('.content');

menuToggle.addEventListener('click', function() {
  sidebar.classList.toggle('collapsed');
  content.classList.toggle('collapsed');
});

