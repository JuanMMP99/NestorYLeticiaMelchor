// Función para cargar los productos desde el archivo JSON
async function cargarProductos(filtro = "Todo") {
    try {
        const respuesta = await fetch('productos.json');
        if (!respuesta.ok) {
            throw new Error(`Error HTTP: ${respuesta.status}`);
        }

        const datos = await respuesta.json();
        const contenedorProductos = document.querySelector('.row-cols-1');
        contenedorProductos.innerHTML = '';

        // Filtrado por etiqueta
        const productosFiltrados = filtro === "Todo"
            ? datos.productos
            : datos.productos.filter(p => p.etiqueta === filtro);

        productosFiltrados.forEach(producto => {
            const tarjetaHTML = `
                <div class="col">
                    <div class="card h-100 shadow-sm">
                        <img src="${producto.imagen}" class="card-img-top" alt="${producto.nombre}">
                        <div class="card-body">
                            <div class="clearfix mb-3">
                                <span class="float-end price-hp">$ ${producto.precio.toFixed(2)}</span>
                            </div>
                            <h5 class="card-title">${producto.nombre}</h5>
                            <p class="card-text">${producto.descripcion}</p>
                            <div class="text-center my-4">
                                <a href="#" class="btn btn-warning" data-id="${producto.id}">Comprar</a>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            contenedorProductos.innerHTML += tarjetaHTML;
        });

        document.querySelectorAll('.btn-warning').forEach(boton => {
            boton.addEventListener('click', function(e) {
                e.preventDefault();
                const productoId = this.getAttribute('data-id');
                comprarProducto(productoId);
            });
        });

    } catch (error) {
        console.error('Error al cargar los productos:', error);
        document.querySelector('.row-cols-1').innerHTML = `
            <div class="col-12 text-center">
                <p class="text-danger">Hubo un error al cargar los productos.</p>
            </div>
        `;
    }
}


// Función para manejar la compra de un producto
function comprarProducto(id) {
    console.log(`Comprando producto con ID: ${id}`);
    // Aquí puedes agregar la lógica para el carrito de compras
    alert(`¡Producto agregado al carrito! ID: ${id}`);
}

// Cargar los productos cuando el documento esté listo
document.addEventListener('DOMContentLoaded', function() {
    cargarProductos();
});

document.addEventListener('DOMContentLoaded', function() {
    cargarProductos();

    document.querySelectorAll('#filtros-categorias button').forEach(btn => {
        btn.addEventListener('click', () => {
            const filtro = btn.getAttribute('data-categoria');
            cargarProductos(filtro);
        });
    });
});
