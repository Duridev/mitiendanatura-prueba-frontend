# Especificación #1: Motor de Datos, Renderizado del Catálogo y Búsqueda

## 1. Estructura de Datos (Estado Inicial Simulando Base de Datos)
Se creará un arreglo global constante llamado `inventarioInicial` que contendrá objetos representando los productos de Natura. Esta será nuestra "Base de Datos" temporal. Cada objeto respetará la siguiente estructura:

```javascript
{
  id: "nat-001", // String: Identificador único
  nombre: "Pulpa Hidratante para Manos Castaña", // String: Nombre del producto
  precio: 9500, // Number: Valor numérico para cálculos
  categoria: "Cuerpo y Baño", // String: Para posibles filtros
  imagenUrl: "[https://ejemplo.com/castana.jpg](https://ejemplo.com/castana.jpg)", // String: URL de la imagen
  descripcion: "Nutrición profunda para la piel de tus manos.", // String
  isNuevo: true // Boolean: Determina si lleva la etiqueta "Novedad"
}
```
*Se instanciarán al menos 4 productos variados para probar correctamente la grilla CSS.*

## 2. Renderizado Seguro del DOM (Prevención XSS)
Se construirá una función modular `renderizarCatalogo(listaProductos)` que recibirá un arreglo y pintará las tarjetas en el HTML.
* **Seguridad:** Para cumplir con la rúbrica, **está estrictamente prohibido** armar toda la tarjeta concatenando un `innerHTML` gigante. Se debe usar `document.createElement()` para los nodos principales y `textContent` para inyectar los textos (nombre, precio), evitando vulnerabilidades de inyección de código.
* **Generación del Botón:** El botón "Consultar" debe construir dinámicamente un enlace a WhatsApp (`https://wa.me/569XXXXXXX?text=...`) inyectando el nombre del producto y el precio usando Template Literals.

## 3. Motor de Búsqueda (Filtrado de Arreglos)
Se implementará una lógica para la barra de búsqueda del Header.
* **Evento:** Se capturará el evento `input` (o `keyup`) en el campo de búsqueda.
* **Lógica:** Se usará el método `.filter()` sobre el arreglo `inventarioInicial` para buscar coincidencias parciales del texto ingresado con la propiedad `nombre` o `categoria` del producto (ignorando mayúsculas y minúsculas).
* **Actualización:** El resultado del filtro se pasará a la función `renderizarCatalogo()` para que la pantalla se actualice en tiempo real sin recargar la página.