# MERN - Biblioteca de Libros y Autores

## Descripción del Proyecto

Este proyecto es una **API** para gestionar una **biblioteca de libros y autores**, creada como parte de un **bootcamp**. Utiliza la arquitectura **MERN** (MongoDB, Express, React, Node.js) para ofrecer una solución completa de backend y frontend, permitiendo almacenar, consultar, actualizar y eliminar información de libros y autores.

---

## Tecnologías Usadas

- **MongoDB**: Base de datos NoSQL para almacenar los datos de libros y autores.
- **Express**: Framework para crear la API y manejar las rutas.
- **Node.js**: Plataforma de servidor para ejecutar JavaScript en el backend.
- **Mongoose**: ODM para interactuar con MongoDB y modelar los datos.

---

## Requisitos

Para ejecutar el proyecto, necesitarás tener instalados los siguientes programas:

- **Node.js** (recomendado: última versión estable).
- **MongoDB** (local o una instancia en la nube como MongoDB Atlas).
- Un cliente para probar la API, como **Postman** o **Insomnia**.

---

## Instalación

1. Clona el repositorio a tu máquina local:

   ```bash
   git clone https://github.com/Ferrancgg/mern_6_back
   ```

2. Navega al directorio del proyecto:

   ```bash
   cd mern_6_back
   ```

3. Instala las dependencias del proyecto:

   ```bash
   npm install
   ```

4. Inicia el servidor:

   ```bash
   npm start
   ```

   El servidor se ejecutará en `http://localhost:4001` por defecto.

---

## Rutas de la API

### Rutas para Libros (Books)

Puedes realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) con los libros.

#### Crear un nuevo libro

- **POST**: `/api/v1/book`
- **Cuerpo de la solicitud (JSON)**:

  ```json
  {
    "title": "To Kill a Mockingbird",
    "publicationDate": "1960-07-11T00:00:00.000Z",
    "genre": "Drama",
    "author": "Harper Lee"
  }
  ```

#### Consultar todos los libros

- **GET**: `/api/v1/book`

#### Consultar un libro por su ID

- **GET**: `/api/v1/book/:id`

  **Ejemplo de petición**:

  ```http
  GET http://localhost:4001/api/v1/book/677a52da857d1c34b695dc88
  ```

#### Actualizar un libro por su ID

- **PUT**: `/api/v1/book/:id`
- **Cuerpo de la solicitud (JSON)**:

  ```json
  {
    "title": "New Book Title",
    "publicationDate": "2025-01-01T00:00:00.000Z",
    "genre": "Fiction",
    "author": "New Author"
  }
  ```

#### Eliminar un libro por su ID

- **DELETE**: `/api/v1/book/:id`

---

### Rutas para Autores (Authors)

Los autores están relacionados con los libros. Puedes realizar operaciones CRUD con ellos también.

#### Crear un nuevo autor

- **POST**: `/api/v1/author`
- **Cuerpo de la solicitud (JSON)**:

  ```json
  {
    "name": "Harper Lee",
    "nationality": "American",
    "books": ["To Kill a Mockingbird"]
  }
  ```

#### Consultar todos los autores

- **GET**: `/api/v1/author`

#### Consultar un autor por su ID

- **GET**: `/api/v1/author/:id`

  **Ejemplo de petición**:

  ```http
  GET http://localhost:4001/api/v1/author/60baf1a4e2b5b567f4f5b5a1
  ```

#### Actualizar un autor por su ID

- **PUT**: `/api/v1/author/:id`
- **Cuerpo de la solicitud (JSON)**:

  ```json
  {
    "name": "Harper Lee",
    "nationality": "American",
    "books": ["To Kill a Mockingbird", "Go Set a Watchman"]
  }
  ```

#### Eliminar un autor por su ID

- **DELETE**: `/api/v1/author/:id`

---

## Contacto

Si tienes preguntas o sugerencias, no dudes en contactarme:

- **Autor**: Ferra Gómez
- **GitHub**: [Ferrancgg](https://github.com/Ferrancgg)
- **Email**: [ferrancgg@gmail.com](mailto:ferrancgg@gmail.com)
