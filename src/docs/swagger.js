import swaggerJSDoc from 'swagger-jsdoc';

const swaggerOptions = {
  definition: {
    openapi: '3.0.1',
    info: {
      title: 'Adoption API',
      version: '1.0.0',
      description: 'Documentación de la API de mascotas y usuarios',
    },
  },
  apis: ['./src/routes/*.js'], // ✅ Aquí se escanean tus rutas
};

export const swaggerSpecs = swaggerJSDoc(swaggerOptions);