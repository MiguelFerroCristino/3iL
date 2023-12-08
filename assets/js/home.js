let IsOpen = false;
const menu = document.getElementById('menu');

function openMenu() {
    const dropdown = document.querySelector('.dropdown-acces');

    if (!IsOpen) {
        dropdown.style.display = 'block';
        dropdown.style.animation = 'dropdownAnimation 0.5s ease';
        IsOpen = true;
    } else {
        dropdown.classList.remove('open');
        dropdown.style.animation = 'reversedropdownAnimation 0.5s ease-in';
        setTimeout(() => {
            dropdown.style.display = 'none';
        }, 490);
        IsOpen = false;
    }

}
