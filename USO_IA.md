# Docuemntación de los Prompts

## Primero Prompt para Gemini-Canvas

Actúa como un desarrollador Front-End experto. Te adjunto un boceto de la interfaz que necesito construir para un catálogo de productos cosméticos (tipo Natura). Basándote en esta imagen, genera el código HTML5 semántico utilizando Tailwind CSS (mediante CDN) para los estilos.

El diseño debe ser limpio, enfocado en conversiones, responsivo (mobile-first) y utilizar tonos acordes a una marca de belleza y naturaleza.

Necesito que el código contenga la estructura base para dos secciones principales (pueden estar en el mismo archivo para luego yo separarlas u ocultarlas):

Catálogo Público: Una grilla para los productos, donde cada tarjeta tenga espacio para la imagen, título, precio y un botón de 'Consultar' (estilo WhatsApp).

Dashboard de Administración: Una sección que simule el área privada, con un formulario limpio que contenga campos para el nombre del producto, precio, URL de la imagen, descripción y un botón de 'Guardar'.

Entrégame únicamente la estructura HTML y las clases de Tailwind listas para usar. La lógica de JavaScript la construiré yo aparte.

## Primero prompt para Gemini Pro

Prompt: "Genera una función en JavaScript que renderice una lista de productos Natura evitando el uso de innerHTML para prevenir ataques XSS, utilizando document.createElement."

Mejora: El código resultante separa la lógica de filtrado de la de renderizado, permitiendo que la búsqueda sea fluida y segura.

## Tercer Prompt para Antigravity

Asegúrate de los IDs: En tu HTML, el contenedor donde van las tarjetas debe tener id="contenedor-galeria" y el buscador id="input-busqueda".

Referencia en HTML: No olvides poner <script src="js/main.js"></script> al final de tu archivo HTML (antes del cierre de </body>).

Revisa el archivo main.js que se encuentra en la carpeta js. Asegúrate de que tenga una correcta implementación de la lógica de filtrado y renderizado. Debe contar con un arreglo que contenga la información de al menos 4 productos. Con su respectivo renderizado y la capacidad de filtrar por nombre o categoría. No olvides de utilizar las mejores prácticas de desarrollo Front-End. Que tenga una correcta implementación con el index.html.

## Cuarto prompt para Antigravity - Misceláneos -.

Cambia el logo actual junto con la palabra "natura" por el logo de natura que se encuentra en la carpeta "img". Asegúrate de que el logo se muestre correctamente en todos los tamaños de pantalla. 

También añade sobre el precio, un valor más pequeño y con un gris, tachado, tanto en el index como en los objetos del main.js.

También mejora el aspecto del logo de whatsapp, haciendo que sea más grande, tanto en los botones de Consultar, como en el fijo que acompña la página.

Que las imágenes de los productos, al momento de acercarse con el hover, la imagen mantenga su tamaño ocultando el desborde.
Estiliza el botn de Consultar y que tenga un tamaño adecuado para la tarjeta.

---

Entre la sección de Los más deseados y las tarjetas, añade capsulas con todos las categorías de productos que hay disponibles. Si se añaden más categorías, estas de deben añadir de forma automática, asegurándote de que el diseño se mantenga correcto. Que estas tengan un borde y letra del mismo color pero sin un color de fondo. Y que el la capsula que esté seleccionada tenga un color de fondo. asefgurate de que la letra tenga buen contraste. Estas capsulas deben estar centradas y tener un tamaño adecuado para la pantalla.

---

Tambien haz que las tarjetas esten en solo 3 columnas en computadores grandes, y en móviles solo una columna. Que estas esten espaciadas correctamente. 

---

no utilices todo el ancho de la pantalla, deja un margen de espacio a los lados de los productos. Para el color de fondo de las capsulas de las categorías, utiliza tonalidades moradas con un gradiente suave. Que se vea elegante. con menos padding vertical en las cápsulas.

## Quinto prompt para Antigravity - Login -.

Que la imagen de natura al clickearla te lleve al inicio en la parte de arriba de la página, y que el icono de login me despliegue un pop  up, donde deba ingresar el nombre y la contraseña, el placeholder del nombre diga: 'Escriba "admin"', y en la parte de la contraseña diga 'Escriba "123"'. Y un botón de ingresar que tenga un gradiante naranjo con morado, como el que tiene la línea bajo el título "Los más deseados" Todo esto validado por JS, que debe tener un inicio de sesión con las credenciales por defecto, el login siempre garantizando buenas prácticas de seguridad (prevención de XSS, sanitización, validación robusta).

## Sexto prompt para Antigravity - Dashboard -.

Para finalizar el login, que tenga una aparición desde abajo, con una transición suave. 
Tras el inicio exitoso de sesión, me lleve al dashboard. Recuerda bloquear la página del dashboard si no se ha utilizado las credenciales correctas para el inicio de sesión, utilizando local storage o session storage según corresponda. Además el formulario que se encuentra en el dashboard, debe tener todos los campos necesarios para agregar un producto, y el botón de "Guardar" debe guardar el producto en el catálogo. En "coleccion", que se pueda escribir una nueva, o elegir unacategoría existente. Si es una nueva, que se guarde en el arreglo de categorías. El botón de "Guardar", debe guardar el producto en el arreglo de productos. 

---

una vez logueado, debería poder ver la página principal presionando el logo de natura, y si vuelvo a presionar el login, me debería llevar al dashboard. Una vez iniciada la sesión, me debería aparecer un botón de cerrar sesión, que al cerrarla me lleve a la página principal y me borre el local storage. este botón aparecerá en la parte superior derecha al lado del login.

## Séptimo, Prompts para Antigravity - Dashboard -. 

Al momento de crear un producto, cambia el alert por un pop up de información que diga: "Producto agregado correctamente" y que tenga el mismo estilo que las tarjetas. Además que el pop up tenga un icono de check.
Hice la prueba y no está cargando los productos en la grilla. Haz que los productos se muestren en la grilla, y la nueva categoría también. y que al cerrar sesión se borre el local storage de la sesión, pero que los productos creados se mantengan en el arreglo de productos.

En la versión movil, elimina la sección inferior donde dice "Galería" y "Estudio"

---

Actúa como un desarrollador Front-End experto. Ya tengo una aplicación web funcionando con HTML, Tailwind CSS y Vanilla JS.
Necesito que me ayudes a refactorizar la sección del Dashboard para incluir un sistema completo de gestión. Requiero lo siguiente:

1. Interfaz de Pestañas (Tabs) en el Dashboard:
Genera el código HTML/Tailwind y la lógica JS para tener dos pestañas en el Dashboard:

Tab 1: "Crear Producto" (Donde irá el formulario que ya tengo).

Tab 2: "Gestionar Productos" (La nueva sección).

2. Sección "Gestionar Productos" (Read & Update):

En esta pestaña, debe renderizarse una tabla o lista estilizada con Tailwind que muestre todos los productos guardados en el localStorage.

Cada fila debe mostrar la miniatura de la imagen, el nombre, el precio y dos botones de acción: 'Editar' (ícono azul o verde) y 'Eliminar' (ícono rojo).

Lógica de Edición: Al hacer clic en 'Editar', los datos de ese producto deben cargar en un formulario (puede ser un modal o reciclar el formulario de creación modificado) para actualizar el objeto en el arreglo y guardar los cambios en el localStorage.

3. Lógica de Eliminación (Delete) y Modal de Confirmación:

Al hacer clic en el botón 'Eliminar' de un producto, NO debe borrarse inmediatamente.

Debe abrirse un Modal (Pop-up) centrado en la pantalla, con un fondo oscuro translúcido (backdrop-blur), preguntando: "¿Estás seguro de que deseas eliminar [Nombre del Producto]?".

El Modal debe tener dos botones: 'Cancelar' (cierra el modal sin hacer nada) y 'Sí, eliminar' (rojo).

Si se confirma, el producto debe eliminarse del arreglo mediante su id, el localStorage debe actualizarse, el Modal debe cerrarse y la lista de productos en el DOM debe volver a renderizarse sin recargar la página.

Crear las modificaciones necesarias para las pestañas y el modal, y el código JavaScript correspondiente, asegurándote de usar buenas prácticas, funciones modulares y manipulación segura del DOM.

---

Algo pasó. los productos no aparecen, solo dos producto que ni siquiera estaban antes: "Kriska Shock Eau de Toilette" y "Humor Paz y Humor Masculino", pero sin imagen. el boton de login ya no sirve, el de whatsapp volvió al estilo inicial, tampoco aparecen las cápsulas de las categorías.

---

no, no es eso. Lo probé en otro navegador y pasa lo mismo. Ni siquiera aparecen los productos que tengo quemados, que ya vienen por defecto en el main.js en el array inventarioInicial.

---

No puedo eliminar los productos creados, ni editarlos. Presiono los botones y no pasa nada, pero solo con los del local storage. los que vienen quemados sí se pueden editar y eliminar. 

---

Ahora haz un tercer botón en la parte superior derecha que diga "Eliminar Local Storage", que al presionarlo me borre todo el local storage y me recargue la página, eliminando todos los cambios y restaurando solo los 4 objetos quemados. y al hacerlo, en el lugar de "Colección" aparezca un pop up con un check y diga "Catálogo restaurado exitosamente"

--

Que el botón aparezca solo cuando el usuario esté logueado y primero pregunte si estoy seguro de querer eliminar el local storage, poniendo como advertencia que se eliminarán todos los productos agregados y se restaurará el catálogo inicial.

## Quinto prompt para Antigravity - Descuentos - 

Crea al dlado delmprecio, un rectangulo naranjo donde salga el porcentaje del descuento en cada uno de los productos que tengan descuento. Si no tienen descuento, que no aparezca nada.

que el rectangulo sea un poco más grande, que el fondo sea naranja natura y los números blancos.


## Sexto prompt para Antigravity - Funcionalidad botón whatsapp 

Actúa como un desarrollador Front-End. En mi catálogo dinámico generado con JavaScript, cada tarjeta de producto tiene un botón de 'Consultar'. Necesito que actualices la lógica de creación de este botón para que genere un enlace de WhatsApp completamente dinámico y seguro.

Requisitos técnicos para el botón:

Número de destino: Usa una variable constante en la parte superior del archivo para el teléfono (ej. const WHATSAPP_PRODUCTO = "56987090528";).

Mensaje dinámico: Utiliza Template Literals (Template Strings) para armar un mensaje que diga exactamente: "Hola Amanda, me interesa el producto [Nombre del Producto] que está a un valor de $[Precio]. ¿Aún te queda stock?". Los datos deben extraerse del objeto del producto iterado.

Seguridad de URL: El mensaje completo debe pasar obligatoriamente por la función encodeURIComponent() antes de concatenarse a la URL base de WhatsApp (https://wa.me/).

Comportamiento: El enlace debe abrirse en una pestaña nueva (target="_blank").

## Séptimo prompt para Antigravity - Auditoría de código -

Actúa como un profesor evaluador estricto de Desarrollo Front-End. > Te voy a proporcionar el código actual de mi proyecto (HTML y JavaScript). Necesito que audites este código contra los siguientes requisitos obligatorios de mi rúbrica de evaluación y me des un reporte detallado indicando "✅ CUMPLE", "⚠️ ADVERTENCIA" o "❌ NO CUMPLE" para cada punto, junto con el código exacto para corregir los errores si los hay.

Requisitos a auditar:

Prevención XSS Estricta: Verifica que NO se esté utilizando innerHTML para inyectar datos del usuario o del array. Exige el uso de document.createElement y textContent.

Validaciones Avanzadas: Revisa las funciones del formulario. ¿Hay RegEx implementado? ¿Se validan números positivos, campos vacíos y formatos correctos antes de guardar?

Estructuras de Datos: Verifica que el estado de la app se maneje a través de un arreglo de objetos y que las actualizaciones (CRUD) se reflejen mutando este arreglo (y el localStorage).

Modularidad y Funciones Puras: Evalúa si el código JavaScript está correctamente factorizado en funciones pequeñas y reutilizables en lugar de código espagueti monolítico.

Manejo del DOM: Verifica que las actualizaciones visuales tras crear, editar o eliminar un registro, o al usar la barra de búsqueda, ocurran de manera fluida y sin fugas de memoria.

Lista de Verificación: Sumativa 2 - INACAP
1. Seguridad y Validaciones (Criterio 1)

[ ] El formulario de creación/edición tiene al menos 3 tipos de campos distintos (ej. text, number, url o select).

[ ] Hay validaciones con Expresiones Regulares (RegEx) en JavaScript (ej. validar que la URL de la imagen sea válida o que el precio sea solo números).

[ ] CRÍTICO: No hay ningún innerHTML inyectando variables directamente. Todo el renderizado usa document.createElement() y textContent.

2. Datos y Almacenamiento (Criterio 2)

[ ] El inventario principal es un Arreglo.

[ ] Cada producto es un Objeto con sus propiedades bien definidas.

[ ] El sistema lee y guarda correctamente usando localStorage (esto cubre el punto extra de creatividad/funcionalidad).

3. Manipulación del DOM y Eventos (Criterio 3)

[ ] La grilla de productos se actualiza dinámicamente si agregas, editas o eliminas un producto (sin tener que apretar F5).

[ ] El buscador filtra la lista en tiempo real.

[ ] El modal de confirmación para eliminar aparece y desaparece correctamente.

4. Código Modular y Limpio (Criterio 4)

[ ] El código JS no es un solo bloque gigante. Existen funciones con nombres claros como guardarProducto(), renderizarCatalogo(), eliminarProducto().

[ ] El código está comentado explicando qué hace cada bloque principal.

5. Entregables Finales (Criterio 5 y General)

[ ] Creaste el archivo USO_IA.md detallando los prompts que usamos (puedes usar el historial de esta conversación para armarlo).

[ ] El proyecto está subido a un repositorio de GitHub.

[ ] El proyecto está desplegado y visible online (ej. usando GitHub Pages).


## octavo prompt para Antigravity - Resolución de Problemas

Al inciar sesión, si no ingreso las credenciales correctas y presiono "Ingresar", no pasa nada, pero recuerdo que antes sí entregaba un mensaje de error.

al cerrar sesión, que aparezca un mensaje que de aviso de esto

ayúdame con una última cosa? una vez que se haya logueado, pon dos menus en el centro, algo como "Vitrina | Dasboard" y que se oculten cuando se cierre la sesión. Obviamente es para ir del incio al dashboard, porque que sea el logo de natura y el icono de login no es muy intuitivo

Sabes qué se nos olvidó se;alar en el Readme que "El proyecto incluye 4 productos como datos de prueba para validar el renderizado del DOM", y aprovechando, puedes arreglar mejor el texto que puse sobre los links de netlify y github pages, que aparecen todos en una linea junto al autor