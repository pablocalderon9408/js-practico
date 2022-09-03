const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu')

menuEmail.addEventListener("click", toggleDesktopMenu)


// toggle es una función para quitar y poner. Se debe ingresar primero al classList para ejecutar
// otras funciones como: add, remove, contains.
function toggleDesktopMenu(){
    desktopMenu.classList.toggle("inactive");
    }

