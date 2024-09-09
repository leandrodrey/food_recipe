# Ejercicio Recetario
"Food Recipes" es una aplicación web de recetas de comida. 

Este repositorio conforma el front-end de la aplicación, la cual consume una API RESTful de recetas de comida.

Backend: [https://github.com/leandrodrey/food_recipe_api](https://github.com/leandrodrey/food_recipe_api)

## Consigna
Puedes ver la consigna completa en el archivo EjercicioRecetario.pdf en este mismo repositorio.

## Funcionalidades
- Buscar recetas por nombre
- Buscar recetas por ingredientes
- Ver detalles de una receta
- Valorar una receta
- Ver listado de recetas mejor y peor valoradas

## Tecnologías utilizadas
- React
- Next.js
- Tailwind CSS
- Eslint
- react-tabs

## Instalación

### 1. Clonar el repositorio
```bash
git clone https://github.com/leandrodrey/food_recipe.git
```

### 2. Instalar las dependencias
En el directorio del proyecto, ejecutar
:
```bash
yarn install
```

### 3. Iniciar el servidor de desarrollo
En el directorio del proyecto, ejecutar
```bash
yarn dev
```

### 4. Abrir la aplicación
Abrir [http://localhost:3000](http://localhost:3000) en el navegador para ver la aplicación.

### 5. Iniciar el servidor de la API
Para que la aplicación funcione correctamente, es necesario iniciar el servidor de la API. Puedes encontrar las instrucciones en el repositorio del backend.

### 6. Configurar la URL de la API
Por defecto, la aplicación está configurada para consumir la API en `http://localhost:4000`.
Si la API se encuentra en otra URL, es necesario modificar  el archivo endpoints.jsx dentro de la carpeta config.
