document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("header").innerHTML = `
        <header>
            <h1>Mi Página Web</h1>
            <nav>
                <ul>
                    <li><a href="index.html">Inicio</a></li>
                    <li><a href="galeria.html">Galería</a></li>
                    <li><a href="informacion.html">Información</a></li>
                </ul>
            </nav>
        </header>
    `;

    document.getElementById("footer").innerHTML = `
        <footer>
            <p>© 2025 Mi Sitio Web - Todos los derechos reservados</p>
        </footer>
    `;
});
