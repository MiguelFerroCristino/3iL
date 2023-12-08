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
