let IsOpen = false;
const menu = document.getElementById('menu');

function openMenu() {
    const dropdown = document.querySelector('.dropdown-acces');

    if (!IsOpen) {
        dropdown.style.display = 'block';
        IsOpen = true;
    } else {
        dropdown.classList.remove('open');
       
            dropdown.style.display = 'none';
        
        IsOpen = false;
    }

}
function setTheme(theme) {
    // Supprimer toutes les classes de thème du body
    document.body.classList.remove('dark-mode', 'protonopia', 'deuteranopia', 'tritanopia');
  
    // Ajouter la classe du thème sélectionné au body
    document.body.classList.add(theme);
}
  