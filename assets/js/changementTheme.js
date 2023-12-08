function setTheme(theme) {
    // Supprimer toutes les classes de thème du body
    document.body.classList.remove('dark-mode', 'protonopia', 'deuteranopia', 'tritanopia');
  
    // Ajouter la classe du thème sélectionné au body
    document.body.classList.add(theme);
  }
  