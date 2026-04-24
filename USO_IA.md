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

Entre la sección de Los más deseados y las tarjetas, añade capsulas con todos las categorías de productos que hay disponibles. Si se añaden más categorías, estas de deben añadir de forma automática, asegurándote de que el diseño se mantenga correcto. Que estas tengan un borde y letra del mismo color pero sin un color de fondo. Y que el la capsula que esté seleccionada tenga un color de fondo. asefgurate de que la letra tenga buen contraste. Estas capsulas deben estar centradas y tener un tamaño adecuado para la pantalla.

Tambien haz que las tarjetas esten en solo 3 columnas en computadores grandes, y en móviles solo una columna. Que estas esten espaciadas correctamente. 

no utilices todo el ancho de la pantalla, deja un margen de espacio a los lados de los productos. Para el color de fondo de las capsulas de las categorías, utiliza tonalidades moradas con un gradiente suave. Que se vea elegante. con menos padding vertical en las cápsulas.

## Quinto prompt para Antigravity - Login -.

Que la imagen de natura al clickearla te lleve al inicio en la parte de arriba de la página, y que el icono de login me despliegue un pop  up, donde deba ingresar el nombre y la contraseña, el placeholder del nombre diga: 'Escriba "admin"', y en la parte de la contraseña diga 'Escriba "123"'. Y un botón de ingresar que tenga un gradiante naranjo con morado, como el que tiene la línea bajo el título "Los más deseados" Todo esto validado por JS, que debe tener un inicio de sesión con las credenciales por defecto, el login siempre garantizando buenas prácticas de seguridad (prevención de XSS, sanitización, validación robusta).

## Sexto prompt para Antigravity - Dashboard -.

Para finalizar el login, que tenga una aparición desde abajo, con una transición suave. 
Tras el inicio exitoso de sesión, me lleve al dashboard. Recuerda bloquear la página del dashboard si no se ha utilizado las credenciales correctas para el inicio de sesión, utilizando local storage o session storage según corresponda. Además el formulario que se encuentra en el dashboard, debe tener todos los campos necesarios para agregar un producto, y el botón de "Guardar" debe guardar el producto en el catálogo. En "coleccion", que se pueda escribir una nueva, o elegir unacategoría existente. Si es una nueva, que se guarde en el arreglo de categorías. El botón de "Guardar", debe guardar el producto en el arreglo de productos. 