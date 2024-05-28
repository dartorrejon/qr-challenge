const $resolution = document.querySelector('.resolucion');

window.addEventListener('resize', ev => {
    const ancho = window.innerWidth
    const alto = window.innerHeight
    $resolution.textContent = `${ancho} x ${alto}`
})
