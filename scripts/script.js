
// JavaScript para mostrar y ocultar la información al pasar el ratón
const peliculas = document.querySelectorAll('.peliculas-lista li');

peliculas.forEach(pelicula => {
    pelicula.addEventListener('mouseenter', () => {
        const info = pelicula.querySelector('p');
        info.style.display = 'block';
    });

    pelicula.addEventListener('mouseleave', () => {
        const info = pelicula.querySelector('p');
        info.style.display = 'none';
    });
});
