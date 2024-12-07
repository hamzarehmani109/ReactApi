document.addEventListener('DOMContentLoaded', function() {
    var sidebarToggle = document.getElementById('sidebarToggle');
    var sidebar = document.getElementById('sidebar');
    var mainContent = document.querySelector('.main-content');
  
    sidebarToggle.addEventListener('click', function() {
      sidebar.classList.toggle('collapsed');
      if (sidebar.classList.contains('collapsed')) {
        mainContent.classList.remove('expanded');
      } else {
        mainContent.classList.add('expanded');
      }
    });
  });
  