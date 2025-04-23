Programación Web Avanzada 2025
Trabajo Practico N°1 

integrantes: -Nicolas Antinao FAI - 4353
             -Alfredo Payllalef Fai 3694

Objetivo: desarrollar un gestor de series y peliculas que contenga los detalles 
mensionados en las consignas

Detalles de los archivos:
 -index.js: 
            es el punto principal del la aplicacion React. Sirve para montar el componente
            raiz (app) en el Dom del navegador para luego ser mostrado en la pagina web.
 -App.jsx: 
            es el contenedor del componente raiz de la aplicacion. Es donde se define la
            la logica principal y la estructura de react
 -index.css:
            es el que contiene los estilos globales de la aplicacion.
 -Packaje.json:
            es el archivo que contiene toda la informacion del proyecto y gestiona las 
            dependecias del mismo

Guia de instalacion:
 para clonar el repositorio sigue estos pasos:
    **Clonar el repositorio**
   ```bash
   git clone https://github.com/Nico13A/gestor-peliculas-react
   cd gestor-peliculas-react
   instalar la dependencia de vite
   correr npm run dev
Guia de uso
El sismtema va a mostrar por pantalla un formulario en el que se podra: 
    1) Agregar una pelicula 
    2) editar una pelicula
    3) Filtrar de acuerdo a los parametros que se encuentran en el fomulario.

el sistema desplegara dos listas donde se muestran del lado derecho las vistas y del lado izquierdo las no vistas. En cada una de las listas se vera los titulos de las peliculas almacenadas y apareceran dos botones donde se permitira editar los datos de la pelicula y eliminar las peliculas. 
