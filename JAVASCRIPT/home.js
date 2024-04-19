document.querySelector('.dropdown').addEventListener('click', function() {
    // Inverti lo stato di visualizzazione del menu quando si clicca sul div
    var dropdownContent = this.querySelector('.dropdown-content');
    dropdownContent.style.display = (dropdownContent.style.display === 'block') ? 'none' : 'block';
  });