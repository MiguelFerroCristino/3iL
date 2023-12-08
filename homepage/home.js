let IsOpen = false;
let IsOpen2 = false;

const menu2 = document.getElementById('menu2');
const menu = document.getElementById('menu');

function openMenu2() {
    const dropdown2 = document.querySelector('.dropdown-acces2');

    if (!IsOpen2) {
        dropdown2.style.display = 'block';
        
        IsOpen2 = true;
    } else {
        dropdown2.classList.remove('open');
       
            dropdown2.style.display = 'none';
        
        IsOpen2 = false;
    }

}

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
