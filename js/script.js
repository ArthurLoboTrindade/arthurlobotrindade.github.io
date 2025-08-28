const btnMobile = document.getElementById('btn-mobile');

function toggleMenu() {
    const nav = document.getElementById('menu-principal');
    nav.classList.toggle('ativo');
}

btnMobile.addEventListener('click', toggleMenu);