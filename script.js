function toggleMenu() {
    var className = 'nav-links-block';
    var navLinks = document.getElementById('navLinks');
    if (!navLinks.classList.contains(className)) {
        navLinks.classList.add(className);
    } else {
        navLinks.classList.remove(className);
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const fechaActual = new Date();
    const fechaFormateada = fechaActual.getFullYear();
    const div = document.getElementById('date');

    div.textContent = fechaFormateada;
});