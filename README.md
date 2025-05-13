Correcciones:
- Codigo bien estilado, de gran calidad, muy profesional.
- Buen uso de local storage.
- Buen uso de useState y useEffect.
- Buen componente modal.

Observaciones:
- Borren imagenes por default que se generan cuando crean el proyecto.
- Borren codigo comentado antes de entregar.

Nota: 10.


# 🎬 Programación Web Avanzada 2025  
## Trabajo Práctico N.º 1

---

## 👥 Integrantes

- **Nicolás Antinao** – FAI-4353  
- **Alfredo Payllalef** – FAI-3694

---

## 🎯 Objetivo

Desarrollar un **gestor de series y películas** que contenga los detalles mencionados en las consignas del trabajo práctico.

---

## 📁 Detalles de los Archivos

- **`main.jsx`**  
  Es el punto principal de la aplicación React. Se encarga de montar el componente raíz (`App`) en el DOM del navegador para luego ser mostrado en la página web.

- **`App.jsx`**  
  Es el contenedor del componente raíz de la aplicación. Define la lógica principal y la estructura general de React.

- **`index.css`**  
  Contiene los estilos globales de la aplicación.

- **`package.json`**  
  Archivo que contiene la información del proyecto y gestiona las dependencias del mismo.

---

## ⚙️ Guía de Instalación

Para clonar y ejecutar el proyecto localmente:

1. Clonar el repositorio:
    ```bash
    git clone https://github.com/Nico13A/gestor-peliculas-react
    cd gestor-peliculas-react
    ```

2. Instalar las dependencias:
    ```bash
    npm install
    ```

3. Correr el servidor de desarrollo con Vite:
    ```bash
    npm run dev
    ```

---

## 🧾 Guía de Uso

El sistema mostrará por pantalla un formulario en el que se podrá:  
1. Agregar una película  
2. Editar una película  
3. Filtrar de acuerdo a los parámetros que se encuentran en el formulario

El sistema desplegará **dos listas**:

- **Del lado derecho**: películas *no vistas*  
- **Del lado izquierdo**: películas *vistas*

En cada lista se mostrarán los títulos de las películas almacenadas y aparecerán dos botones para cada una de ellas, que permitirán:

- **Editar**: Modificar los datos de la película  
- **Eliminar**: Borrar la película del sistema

---

> 🧠 Proyecto realizado como parte del curso **Programación Web Avanzada 2025**