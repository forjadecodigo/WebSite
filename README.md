# Forja de Código Web

## Descripción
Forja de Código Web es una aplicación web desarrollada con React que proporciona una plataforma para la gestión y desarrollo de código, con un portafolio interactivo y sliders animados para mostrar proyectos.

## Requisitos Previos
- Node.js >= 18.x
- npm (incluido con Node.js)

## Instalación

1. Clona el repositorio:
```bash
git clone [URL_DEL_REPOSITORIO]
```

2. Navega al directorio del proyecto:
```bash
cd forjadecodigoweb-react
```

3. Instala las dependencias:
```bash
npm install
```

## Scripts Disponibles

En el directorio del proyecto, puedes ejecutar:

### `npm start`
Ejecuta la aplicación en modo desarrollo.\
Abre [http://localhost:3000](http://localhost:3000) para verla en el navegador.

### `npm run build`
Construye la aplicación para producción en la carpeta `build`.

### `npm test`
Ejecuta las pruebas en modo interactivo.

### `npm run eject`
Expulsa la configuración de Create React App.

## Gestión de Proyectos

Los proyectos se gestionan de manera centralizada en el archivo `src/data/proyectos.js`. Este archivo contiene toda la información de los proyectos que se muestran en el portafolio y los sliders.

### Estructura de un Proyecto
```javascript
proyecto1: {
  id: 1,
  titulo: "Título del Proyecto",
  descripcion: "Descripción detallada del proyecto...",
  tecnologias: ["Tecnología1", "Tecnología2"],
  imagen: "/ruta-a-la-imagen.jpg"
}
```

### Cómo Modificar Proyectos

1. **Modificar una imagen existente**:
   ```javascript
   // En src/data/proyectos.js
   proyecto1: {
     // ... otros datos ...
     imagen: "/nueva-imagen.jpg"  // Solo cambia esta línea
   }
   ```

2. **Agregar un nuevo proyecto**:
   ```javascript
   // En src/data/proyectos.js
   export const proyectos = {
     // ... proyectos existentes ...
     proyecto5: {
       id: 5,
       titulo: "Nuevo Proyecto",
       descripcion: "Descripción del nuevo proyecto",
       tecnologias: ["Tecnología1", "Tecnología2"],
       imagen: "/imagen-nueva.jpg"
     }
   };
   ```

3. **Modificar otros datos**:
   ```javascript
   // En src/data/proyectos.js
   proyecto1: {
     // ... otros datos ...
     titulo: "Nuevo Título",
     descripcion: "Nueva descripción",
     tecnologias: ["Nueva", "Tecnología"]
   }
   ```

### Notas Importantes
- Todas las imágenes deben estar en la carpeta `public/`
- Las rutas de las imágenes deben comenzar con `/`
- Los cambios en `proyectos.js` se reflejarán automáticamente en todas las secciones que muestran proyectos
- Mantén un formato consistente en las descripciones y tecnologías

## Funcionamiento de los Sliders y Portafolio

- El slider animado y el slider de proyectos permiten seleccionar un proyecto para verlo en detalle en la sección de portafolio.
- Al hacer clic en un proyecto, la página navega (o recarga si ya está en `/`) y muestra el contenedor del proyecto seleccionado, haciendo scroll automático a la sección `portafolioInicio`.
- Si recargas la página, el portafolio vuelve a su estado inicial y no muestra ningún proyecto seleccionado.
- El scroll al inicio de la página está forzado al montar la vista principal.

### Ajustes de velocidad y visual de los sliders
- Puedes ajustar la velocidad y el espacio entre slides en los archivos `src/components/slider-animado.js` y `src/components/slider-proyectos.js`.
- Los valores recomendados para un movimiento fluido están comentados en el código.
- Los botones de navegación permiten cambiar la dirección y velocidad del carrusel.

### Experiencia móvil
- El diseño es responsive y los sliders muestran 3 proyectos ajustados al ancho en móviles.
- El espacio entre slides en móvil es mínimo para aprovechar el ancho de pantalla.

### Loaders animados
- Los loaders de la sección "Nosotros" tienen animaciones CSS modernas y están corregidos para verse centrados y fluidos.
- Puedes personalizar colores, velocidad y tamaño en el archivo `src/views/inicio.css`.

## Tecnologías Principales
- React 17.0.2
- React Router DOM 5.2.0
- React Helmet 6.1.0
- EmailJS 4.4.1
- CRACO 7.1.0
- SwiperJS para sliders animados

## Estructura del Proyecto
```
forjadecodigoweb-react/
├── public/          # Archivos públicos
├── src/            # Código fuente
│   ├── data/       # Datos centralizados
│   ├── components/ # Componentes reutilizables
│   └── views/      # Vistas principales
├── locales/        # Archivos de internacionalización
├── node_modules/   # Dependencias
└── package.json    # Configuración del proyecto
```

## Soporte de Navegadores
La aplicación es compatible con:
- Chrome (última versión)
- Firefox (última versión)
- Safari (última versión)

## Licencia
Este proyecto es privado y su uso está restringido.

## Contacto
Para más información, por favor contacta al equipo de desarrollo. 