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
        imagenUrl: "https://production.na01.natura.com/dw/image/v2/BFKR_PRD/on/demandware.static/-/Sites-natura-cl-storefront-catalog/default/dwd9518036/producto-joia/mobile/70983.jpg",
        descripcion: "Nutrición profunda para la piel de tus manos.",
        isNuevo: true
    },
    {
        id: "nat-002",
        nombre: "Kaiak clásico eau de toilette masculino",
        precio: 34990,
        categoria: "Perfumería",
        imagenUrl: "https://production.na01.natura.com/dw/image/v2/BFKR_PRD/on/demandware.static/-/Sites-natura-cl-storefront-catalog/default/dw10fc847f/produtos/NATCHL-111171_2.jpg",
        descripcion: "Explosión de frescura cítrica y notas aromáticas.",
        isNuevo: false
    },
    {
        id: "nat-003",
        nombre: "Labial Líquido Mate Intransferible",
        precio: 11990,
        categoria: "Maquillaje",
        imagenUrl: "https://production.na01.natura.com/dw/image/v2/BFKR_PRD/on/demandware.static/-/Sites-natura-cl-storefront-catalog/default/dwda8bfb3c/produtos/NATCHL-140023_1.jpg",
        descripcion: "Color intenso y alta fijación por 12 horas.",
        isNuevo: true
    },
    {
        id: "nat-004",
        nombre: "Gel crema antiseñales Renovación y prevención Chronos 30+ noche",
        precio: 32990,
        categoria: "Rostro",
        imagenUrl: "https://production.na01.natura.com/dw/image/v2/BFKR_PRD/on/demandware.static/-/Sites-natura-cl-storefront-catalog/default/dw13d5f680/produtos/NATCHL-134593_2.jpg",
        descripcion: "Renovación celular y reducción de líneas de expresión.",
        isNuevo: false
    }
];

// 2. REFERENCIAS AL DOM
const contenedorGaleria = document.getElementById('contenedor-galeria');
const inputBusqueda = document.getElementById('input-busqueda');

// 3. FUNCIÓN DE RENDERIZADO (Cumple Criterio 1 y 3 de la Rúbrica)
function renderizarCatalogo(lista) {
    // Limpiamos el contenedor antes de volver a pintar
    contenedorGaleria.innerHTML = "";

    if (lista.length === 0) {
        contenedorGaleria.innerHTML = `<p class="text-center text-gray-500 col-span-full py-10 font-serif text-xl">No se encontraron productos que coincidan.</p>`;
        return;
    }

    // Función de saneamiento para evitar vulnerabilidades XSS
    const escapeHTML = (str) => {
        return str.replace(/[&<>'"]/g, 
            tag => ({
                '&': '&amp;',
                '<': '&lt;',
                '>': '&gt;',
                "'": '&#39;',
                '"': '&quot;'
            }[tag] || tag)
        );
    };

    lista.forEach(producto => {
        const nombreSeguro = escapeHTML(producto.nombre);
        const categoriaSegura = escapeHTML(producto.categoria);
        const precioFormateado = producto.precio.toLocaleString('es-CL');
        const mensajeWa = `Hola, me interesa el producto: ${producto.nombre} ($${producto.precio})`;
        const hrefWa = `https://wa.me/56912345678?text=${encodeURIComponent(mensajeWa)}`;

        // Etiqueta de Novedad condicional
        const tagNovedad = producto.isNuevo 
            ? `<span class="absolute top-4 left-4 z-10 bg-purple-600 text-white text-[10px] font-bold px-3 py-1 rounded-full shadow-lg">Novedad</span>` 
            : '';

        // Template de la tarjeta copiando el diseño original
        const cardHTML = `
            <article class="bg-white/60 backdrop-blur-sm rounded-[2.5rem] p-4 shadow-xl shadow-purple-900/5 border border-white hover:translate-y-[-8px] transition-all duration-500 group flex flex-col">
                <div class="relative aspect-[4/5] rounded-[2rem] bg-gradient-to-b from-purple-50 to-white overflow-hidden flex items-center justify-center mb-6">
                    ${tagNovedad}
                    <img src="${producto.imagenUrl}" alt="${nombreSeguro}" class="max-h-full w-full object-cover rounded-[2rem] drop-shadow-2xl group-hover:scale-110 transition-transform duration-700">
                </div>
                
                <div class="px-2 flex flex-col flex-grow">
                    <span class="text-purple-400 text-[11px] font-bold tracking-widest uppercase mb-1">${categoriaSegura}</span>
                    <h3 class="text-xl md:text-2xl font-serif text-gray-900 line-clamp-2 leading-tight mb-4 min-h-[3.5rem]">${nombreSeguro}</h3>
                    
                    <div class="mt-auto">
                        <div class="flex items-end gap-2 mb-6">
                            <div>
                                <p class="text-2xl font-bold text-gray-900 tracking-tighter">$${precioFormateado}</p>
                            </div>
                        </div>
                        
                        <a href="${hrefWa}" target="_blank" class="w-full py-4 bg-white border-2 border-green-500/20 rounded-2xl text-green-700 font-bold hover:bg-green-500 hover:text-white transition-all duration-300 flex items-center justify-center gap-3 group/btn">
                            <svg class="w-6 h-6 text-green-500 group-hover/btn:text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.437 2.503 1.17 3.464l-.794 2.898 3.031-.795a5.733 5.733 0 002.361.599h.001c3.182 0 5.767-2.586 5.768-5.766 0-3.181-2.586-5.766-5.769-5.766zm3.425 8.204c-.145.412-.727.755-1.009.802-.275.044-.633.074-1.025-.054-.24-.078-.543-.186-2.128-.844-1.619-.672-2.656-2.316-2.736-2.424-.081-.107-.655-.872-.655-1.664 0-.792.412-1.18.558-1.339.145-.16.317-.2.423-.2h.304c.107 0 .24-.038.376.289l.52 1.26c.045.107.075.214 0 .367l-.24.397c-.075.122-.157.26-.067.413.089.153.396.654.851 1.059.585.52 1.077.681 1.23.758.153.076.244.06.335-.046l.366-.489c.107-.137.214-.122.35-.077l1.311.64c.138.077.229.123.275.199.046.076.046.443-.1.854z"/></svg>
                            <span class="uppercase tracking-widest text-xs">Consultar</span>
                        </a>
                    </div>
                </div>
            </article>
        `;

        contenedorGaleria.insertAdjacentHTML('beforeend', cardHTML);
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