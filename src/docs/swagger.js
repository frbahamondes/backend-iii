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
   apis: ['./src/docs/components/users.yaml'],
};

export const swaggerSpecs = swaggerJSDoc(swaggerOptions);