🐶 AdoptMe - Backend API
========================

Bienvenido a **AdoptMe**, una API RESTful desarrollada con Node.js, Express, MongoDB y Docker para gestionar usuarios, mascotas y procesos de adopción.

✨ Características Principales
-----------------------------

*   🔐 **Autenticación JWT** - Sistema seguro de autenticación
    
*   🐕 **Gestión de Mascotas** - CRUD completo para mascotas
    
*   👥 **Gestión de Usuarios** - Administración de usuarios y roles
    
*   🤝 **Procesos de Adopción** - Flujo completo de adopciones
    
*   📁 **Subida de Archivos** - Manejo de imágenes con Multer
    
*   🧪 **Suite de Tests** - Tests funcionales con Supertest
    
*   📚 **Documentación API** - Documentación interactiva con Swagger
    
*   🐳 **Dockerizado** - Contenedores para fácil despliegue
    

🚀 Instalación y Ejecución
--------------------------

### Prerrequisitos

*   Node.js (v14 o superior)
    
*   MongoDB
    
*   Docker (opcional)
    

### Instalación Local

bash

`   # Clonar el repositorio  git clone   # Instalar dependencias  npm install  # Configurar variables de entorno  cp .env.example .env  # Ejecutar en desarrollo  npm run dev  # Ejecutar en producción  npm start   `

### Ejecución con Docker

#### Build manual

bash

`   docker build -t frbahamondes/adoptme-backend .   `

#### Ejecutar contenedor

bash

`   docker run -p 8080:8080 frbahamondes/adoptme-backend   `

#### Docker Compose (Recomendado)

bash

`   docker-compose up   `

Este comando construye la aplicación e inicia MongoDB, exponiendo la app en http://localhost:8080

🧪 Testing
----------

Para ejecutar los tests funcionales:

bash
`   npm test   `

### Cobertura de Tests

*   ✅ GET todas las adopciones
    
*   ✅ POST crear adopción
    
*   ✅ GET obtener una adopción
    
*   ✅ DELETE eliminar adopción
    

Los IDs de prueba están predefinidos en supertest.test.js

📚 Documentación API
--------------------

La API está documentada con Swagger. Accede a la documentación interactiva en:

🔗 [**http://localhost:8080/api/docs**](http://localhost:8080/api/docs)

🔧 Configuración
----------------

### Variables de Entorno (.env)

env

`   MONGO_URL=mongodb+srv://frbahamondes:backendiii@cluster0.xklou.mongodb.net/test?retryWrites=true&w=majority   `

⚠️ **Nota**: Esta URL apunta a MongoDB Atlas. Modifica el valor si usas tu propio cluster.

📁 Estructura del Proyecto
--------------------------

text

 src/

├── controllers/        # Controladores por recurso

├── dao/               # Acceso a datos y modelos de Mongoose

├── dto/               # Data Transfer Objects

├── docs/              # Swagger YAML + configuración

├── public/            # Imágenes subidas

├── repository/        # Lógica de acceso a DAO

├── routes/            # Routers de Express

├── services/          # Inicialización de servicios

├── utils/             # Helpers, Faker, Multer

├── app.js             # Configuración de la app

└── server.js          # Entry point del servidor

🔗 Endpoints Principales
------------------------

| Método | Endpoint | Descripción |
|--------|----------|-------------|
| GET | `/api/users` | Gestión de usuarios |
| GET | `/api/pets` | Gestión de mascotas |
| POST | `/api/adoptions` | Procesos de adopción |
| POST | `/api/sessions` | Autenticación JWT |
| GET | `/api/mocks` | Generación de datos mock |

🐳 Docker Hub
-------------

La imagen está disponible públicamente en Docker Hub:

👉 [**https://hub.docker.com/r/frbahamondes/adoptme-backend**](https://hub.docker.com/r/frbahamondes/adoptme-backend)

👨‍💻 Autor
-----------

**Francisco Bahamondes**_Curso: Backend - Coderhouse_\*Entrega: N°2 - Dockerización del Proyecto\*

📝 Notas para el Revisor
------------------------

*   ✅ Swagger documenta el módulo Users
    
*   ✅ Tests funcionales cubren adoption.router.js
    
*   ✅ Imagen de Docker subida y funcional
    
*   ✅ README.md incluye pasos detallados
    
*   ✅ Se puede ejecutar con Docker o Docker Compose
    

¡Gracias por revisar! 😄