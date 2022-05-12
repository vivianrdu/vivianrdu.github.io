$(document).ready(function () {

    var footeritems = '';
  
    footeritems += '<p class="small">Coded from scratch! Work in progress. <button onclick="darkMode()" class="button">🌙</button></p>'
           + '<script>function darkMode() {var element = document.body;element.classList.toggle("dark-mode");}</script>'
    $('#footer').append(footeritems);
    
  }
  );