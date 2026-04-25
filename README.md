# 🛍️ Outlet Natura - Proyecto Sumativa 2

**Asignatura:** Desarrollo Front-End  
**Institución:** INACAP  
**Año:** 2026  
**Autor:** Daniel Uribe Galaz "Duridev"  
**Link página web:** [Netlify (Recomendado)](https://mitiendanatura-prueba.netlify.app/)  
**Link Github Pages:** [GitHub Pages](https://duridev.github.io/MitiendaNatura-prueba/)  

> *Nota: Se recomienda utilizar el enlace de Netlify para la corrección, ya que Github Pages puede presentar problemas intermitentes de visualización y carga de JavaScript.*
---

## 📝 Descripción del Proyecto

Este proyecto consiste en el desarrollo de una aplicación web Front-End orientada a la venta de productos de catálogo bajo el concepto de **"Outlet Exclusivo Natura"**. El sitio actúa como una vitrina digital de productos rebajados, permitiendo tanto la visualización para el cliente final como la administración del inventario a través de un panel de control simulado (Estudio).

La aplicación destaca por su estética moderna (inspirada en la tendencia *Glassmorphism*), sus altos estándares de seguridad contra inyecciones de código y una experiencia de usuario (UX) sumamente fluida.

---

## 👨‍🏫 Nota para el Profesor Evaluador

Este proyecto ha sido rigurosamente construido para cumplir y superar los criterios de la **Rúbrica de la Sumativa 2**:

1.  **Manipulación Dinámica del DOM Estricta:** Se eliminó por completo el uso de la propiedad insegura `innerHTML` para renderizar datos provenientes de arreglos o inputs de usuario. Toda la construcción de la interfaz gráfica se realiza mediante `document.createElement()` y asignación de `textContent` o constructores de elementos robustos, previniendo de forma efectiva vulnerabilidades **XSS** (Cross-Site Scripting).
2.  **Validaciones Avanzadas (RegEx):** El formulario de inserción de productos incluye validaciones mediante expresiones regulares estandarizadas. Garantiza que las imágenes ingresadas sean URLs válidas (HTTP/HTTPS) y que los valores comerciales (precios) sean exclusivamente numéricos y positivos antes de insertarse en el almacenamiento.
3.  **Persistencia de Datos Completa (CRUD):** El sistema maneja de forma eficiente el inventario a través de `localStorage`. Los datos están estructurados como Arreglos de Objetos JSON. Se implementó funcionalidad de Lectura (Catálogo), Creación (Formulario Estudio), Edición (con autocompletado en campos) y Eliminación controlada de elementos.
4.  **Integración Externa Dinámica:** Los enlaces a WhatsApp ("Consultar") se generan dinámicamente usando **Template Literals** (`${}`) extrayendo las propiedades de cada objeto del arreglo y codificando el mensaje estrictamente con `encodeURIComponent()` para asegurar que la URL no se rompa con caracteres especiales.
5.  **Diseño Responsivo e Interactivo:** Maquetación con **Tailwind CSS**, priorizando *Mobile-First*. Se aplican de manera abundante micro-interacciones, modales, animaciones CSS y estados flotantes para acercar el proyecto a un nivel de producción profesional.

---

## ✨ Características Principales

*   **Catálogo Dinámico:** Renderizado en tiempo real a partir del estado de la aplicación. *(El proyecto incluye 4 productos pre-cargados como datos de prueba para validar el correcto renderizado del DOM desde el primer inicio).*
*   **Gestor de Descuentos Automático:** El sistema calcula y muestra porcentajes de descuento de forma automática si un producto contiene un Precio Original y un Precio de Oferta.
*   **Integración Comercial (WhatsApp):** Enlaces directos para concretar ventas.
*   **Filtros Interactivos:** Botones que permiten filtrar el inventario instantáneamente por "Categoría" o "Colección".
*   **Panel de Administración ("Estudio"):**
    *   Simulación de control de acceso mediante validación de usuario/contraseña (Admin: `admin` / Pass: `123`).
    *   Sistemas de alta/modificación de productos.
    *   Avisos visuales amigables (Pop-Ups interactivos) para confirmar acciones y advertir sobre operaciones destructivas.
    *   Opción de **Reseteo a Valores de Fábrica:** Un botón de emergencia ("Eliminar Local Storage") que limpia la BD del cliente y restaura el catálogo por defecto.

---

## 🛠️ Tecnologías Utilizadas

*   **HTML5 Semántico:** Estructuración del contenido.
*   **Tailwind CSS (v3 vía CDN):** Estilizado rápido, diseño adaptativo y utilidades estéticas (*backdrop-blur*, gradientes, *transitions*).
*   **Vanilla JavaScript (ES6+):** Lógica de negocio, manipulación del DOM, eventos y persistencia de datos sin necesidad de *frameworks*.
*   **LocalStorage / SessionStorage:** Base de datos en el cliente para conservar sesión e inventario.

---

## 🚀 Cómo Ejecutar el Proyecto

1.  Descarga o clona este repositorio.
2.  No es necesario instalar dependencias de Node.js. Al utilizar Vanilla JS y CDN para Tailwind, el proyecto se ejecuta directamente en el navegador.
3.  Abre el archivo `index.html` en tu navegador web de preferencia (se recomienda Google Chrome, Microsoft Edge o Mozilla Firefox).
4.  *Para pruebas locales (opcional pero recomendado):* Utiliza extensiones como **Live Server** de VSCode para evitar bloqueos por políticas CORS en caso de integraciones futuras.

---
> *Creado con pasión por el código. - Duridev*
