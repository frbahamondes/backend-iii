import express from 'express';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv'; // 👉 1. Importar dotenv

import swaggerUi from 'swagger-ui-express'; // 👉 Swagger UI
import { swaggerSpecs } from './docs/swagger.js'; // 👉 Swagger config

dotenv.config(); // 👉 2. Cargar las variables del archivo .env

import usersRouter from './routes/users.router.js';
import petsRouter from './routes/pets.router.js';
import adoptionsRouter from './routes/adoption.router.js';
import sessionsRouter from './routes/sessions.router.js';
import mocksRouter from './routes/mocks.router.js';

const app = express();
const PORT = process.env.PORT || 8080;

// 👉 3. Conexión a MongoDB con mensajes de prueba
mongoose.connect(process.env.MONGO_URL)
  .then(() => {
    console.log('✅ Conectado a MongoDB Atlas'); // Éxito
  })
  .catch((err) => {
    console.error('❌ Error al conectar con MongoDB:', err); // Error
  });

app.use(express.json());
app.use(cookieParser());

// 👉 Swagger Docs
app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpecs));

app.use('/api/users', usersRouter);
app.use('/api/pets', petsRouter);
app.use('/api/adoptions', adoptionsRouter);
app.use('/api/sessions', sessionsRouter);
app.use('/api/mocks', mocksRouter);

app.get('/ping', (req, res) => {
  res.send('pong');
});

app.listen(PORT, () => console.log(`Listening on ${PORT}`));
