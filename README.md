# Proyecto de noticias con React y NewsAPI
Este es un proyecto que utiliza las APIs de https://newsapi.org para mostrar noticias relacionadas con una palabra clave específica, así como los principales titulares por país y categoría. El proyecto está desarrollado en React y cuenta con componentes para mostrar el número total de artículos relacionados con la búsqueda y la cantidad de autores que se muestran de los artículos publicados. También hay un componente que muestra el autor, título, descripción e imagen de los artículos.

## Configuración
Para utilizar este proyecto, primero debe obtener una clave de API de https://newsapi.org. Una vez que tenga su clave de API, modifique el archivo de configuración para almacenar la clave de la API en el directorio del proyecto:

// src/request/request.js
const apiKey= 'ec5e517a67be47798aaa0966e7cfb48d';

## Uso
Para ejecutar este proyecto, debe tener instalado Node.js y npm. Luego, en la terminal, navegue hasta la raíz del proyecto y ejecute los siguientes comandos:

### npm install
### npm start
Esto instalará las dependencias necesarias y ejecutará el proyecto en un servidor local.

## Componentes
Este proyecto cuenta con los siguientes componentes:

### QuantityArticlesAndAuthors
Este componente muestra el número total de artículos relacionados con la búsqueda y la cantidad de autores que se muestran de los artículos publicados. Recibe dos propiedades: totalResults (el número total de resultados) y authors (una matriz con los nombres de los autores de los artículos).

### Articles
Este componente muestra el autor, título, descripción e imagen de un artículo. Recibe una propiedad article que debe ser un objeto con las siguientes propiedades: author, title, description y urlToImage.

### Seekers
Este componente de búsqueda que permite al usuario buscar artículos por palabra clave. Cuando se envía el formulario, el componente llama al método searchArticles del componente App para realizar la búsqueda. Además este compononepermite mostrar los principales titulares por país y/o categoría. Recibe dos propiedades: country (el país para el que se mostrarán los titulares) y category (la categoría para la que se mostrarán los titulares).

## Responsividad
Este proyecto es completamente responsive utilizando media query en las declaraciones css