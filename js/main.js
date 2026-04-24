/**
 * PROYECTO: Catálogo Natura - Amanda
 * ENTREGA: Sumativa 2 - Front End
 * * NOTA DE APOYO IA: Se utilizó IA para estructurar el renderizado seguro 
 * mediante document.createElement, evitando vulnerabilidades XSS.
 */

// 1. "BASE DE DATOS" INICIAL (Según SPEC-01)
const inventarioInicial = [
    {
        id: "nat-001",
        nombre: "Pulpa Hidratante para Manos Castaña",
        precio: 9500,
        categoria: "Cuerpo y Baño",
        imagenUrl: "https://placehold.co/400x400/f3f4f6/374151?text=Castaña",
        descripcion: "Nutrición profunda para la piel de tus manos.",
        isNuevo: true
    },
    {
        id: "nat-002",
        nombre: "Perfume Kaiak Clásico Masculino",
        precio: 28900,
        categoria: "Perfumería",
        imagenUrl: "https://placehold.co/400x400/f3f4f6/374151?text=Kaiak",
        descripcion: "Explosión de frescura cítrica y notas aromáticas.",
        isNuevo: false
    },
    {
        id: "nat-003",
        nombre: "Labial Matte Intransferible Una",
        precio: 10200,
        categoria: "Maquillaje",
        imagenUrl: "https://placehold.co/400x400/f3f4f6/374151?text=Labial",
        descripcion: "Color intenso y alta fijación por 12 horas.",
        isNuevo: true
    },
    {
        id: "nat-004",
        nombre: "Crema de Noche Chronos 30+",
        precio: 32400,
        categoria: "Rostro",
        imagenUrl: "https://placehold.co/400x400/f3f4f6/374151?text=Chronos",
        descripcion: "Renovación celular y reducción de líneas de expresión.",
        isNuevo: false
    }
];

// 2. REFERENCIAS AL DOM
const contenedorGaleria = document.getElementById('contenedor-galeria');
const inputBusqueda = document.getElementById('input-busqueda');

// 3. FUNCIÓN DE RENDERIZADO SEGURO (Cumple Criterio 1 y 3 de la Rúbrica)
function renderizarCatalogo(lista) {
    // Limpiamos el contenedor antes de volver a pintar
    contenedorGaleria.textContent = "";

    if (lista.length === 0) {
        const mensajeNoResultados = document.createElement('p');
        mensajeNoResultados.textContent = "No se encontraron productos que coincidan.";
        mensajeNoResultados.className = "text-center text-gray-500 col-span-full py-10";
        contenedorGaleria.appendChild(mensajeNoResultados);
        return;
    }

    lista.forEach(producto => {
        // Crear el contenedor de la tarjeta (Clases de Tailwind del maquetado)
        const card = document.createElement('article');
        card.className = "bg-white/80 backdrop-blur-md rounded-2xl p-4 shadow-sm hover:shadow-xl transition-all duration-300 group border border-white/20";

        // Imagen
        const img = document.createElement('img');
        img.src = producto.imagenUrl;
        img.alt = producto.nombre;
        img.className = "w-full h-48 object-cover rounded-xl mb-4 group-hover:scale-105 transition-transform duration-500";
        
        // Título (Seguridad: textContent evita inyección de scripts)
        const titulo = document.createElement('h3');
        titulo.textContent = producto.nombre;
        titulo.className = "font-semibold text-gray-800 text-lg leading-tight mb-2 h-12 overflow-hidden";

        // Precio
        const precio = document.createElement('p');
        precio.textContent = `$${producto.precio.toLocaleString('es-CL')}`;
        precio.className = "text-orange-600 font-bold text-xl mb-4";

        // Botón Consultar (WhatsApp Dinámico)
        const btnConsultar = document.createElement('a');
        const mensajeWa = `Hola Amanda, me interesa el producto: ${producto.nombre} ($${producto.precio})`;
        btnConsultar.href = `https://wa.me/56912345678?text=${encodeURIComponent(mensajeWa)}`; // Cambia el número por el de Amanda
        btnConsultar.target = "_blank";
        btnConsultar.className = "block w-full text-center bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 rounded-lg transition-colors";
        btnConsultar.textContent = "Consultar";

        // Ensamblaje de la tarjeta
        card.appendChild(img);
        card.appendChild(titulo);
        card.appendChild(precio);
        card.appendChild(btnConsultar);

        // Inyectar al contenedor principal
        contenedorGaleria.appendChild(card);
    });
}

// 4. LÓGICA DE BÚSQUEDA (Criterio 2: Manejo de Arreglos)
function filtrarProductos() {
    const terminoBusqueda = inputBusqueda.value.toLowerCase();
    
    const productosFiltrados = inventarioInicial.filter(producto => {
        return (
            producto.nombre.toLowerCase().includes(terminoBusqueda) ||
            producto.categoria.toLowerCase().includes(terminoBusqueda)
        );
    });

    renderizarCatalogo(productosFiltrados);
}

// 5. INICIALIZACIÓN Y EVENTOS
document.addEventListener('DOMContentLoaded', () => {
    // Primera carga del catálogo
    renderizarCatalogo(inventarioInicial);

    // Escuchar la barra de búsqueda
    inputBusqueda.addEventListener('input', filtrarProductos);
});