# Tienda Yapu - E-commerce en React JS

## Descripción

Tienda Yapu es una aplicación de e-commerce desarrollada con React JS y Firebase. Este proyecto fue diseñado como parte del curso de React JS y representa una plataforma completa para explorar productos, añadirlos al carrito, y realizar pedidos.

## Características

- **Navegación de Productos**: Navega a través de una variedad de productos y explora categorías específicas.
- **Detalles de Productos**: Visualiza detalles completos de los productos, incluyendo fotos, descripciones y precios.
- **Carrito de Compras**: Agrega productos al carrito y revisa tu selección antes de realizar la compra.
- **Checkout**: Completa tus datos para finalizar la compra y recibe un número de orden de tu pedido.
- **Integración con Firebase**: Los productos y las órdenes se gestionan a través de Firebase, asegurando una experiencia de usuario fluida y actualizada.

## Tecnologías Utilizadas

- **React JS**: Framework principal para la construcción de la interfaz de usuario.
- **Firebase**: Backend para manejar la base de datos de productos y órdenes.
- **React Router**: Para la navegación entre diferentes secciones de la aplicación.
- **Bootstrap y React Bootstrap**: Para el diseño responsive y estilos de la aplicación.

## Estructura del Proyecto

- `src/`: Directorio principal que contiene la lógica y los componentes de la interfaz de usuario.
  - `App.jsx`: Componente raíz que maneja la navegación y estructura general de la aplicación.
  - `main.jsx`: Punto de entrada de la aplicación React.
  - `components/`: Carpeta que contiene todos los componentes reutilizables.
    - `NavBar.jsx`: Barra de navegación con enlaces a diferentes secciones.
    - `CartWidget.jsx`: Widget para mostrar el estado actual del carrito.
    - `ItemListContainer.jsx`: Contenedor para listar los productos.
    - `ItemDetailContainer.jsx`: Contenedor para mostrar detalles de un producto específico.
    - `Cart.jsx`: Componente para la gestión y visualización del carrito de compras.
    - Otros componentes específicos para funcionalidades como visualización de productos, manejo de errores, etc.
  - `contexts/`: Contiene `CartContext.jsx` para manejar el estado global del carrito de compras.
  - `assets/`: Recursos estáticos como imágenes y otros archivos multimedia.
  - `styles/`: Archivos CSS para estilos personalizados.

- `package.json`: Define las dependencias y scripts del proyecto.

Esta estructura proporciona una organización clara y modular del código, facilitando su mantenimiento y expansión.