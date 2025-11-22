// src/routes/mocks.router.js
import { Router } from 'express';
import { generateMockPets } from '../utils/index.js';
import { generateMockUsers } from '../utils/mockUsers.js'; // ✅ Importamos la nueva función
import petModel from '../dao/models/Pet.js';

const router = Router();


// 🐶 GET /api/mocks/mockingpets
router.get('/mockingpets', async (req, res) => {
  console.log('✅ MOCKINGPETS ejecutado con Faker');

  try {
    const pets = [];

    for (let i = 0; i < 100; i++) {
      pets.push(generateMockPets());
    }

    // Limpiar la colección antes de insertar (solo para pruebas)
    await petModel.deleteMany({});

    // Insertar los mock pets
    await petModel.insertMany(pets);

    res.status(201).json({
      status: 'success',
      message: 'Mockingpets guardados en la base de datos',
      total: pets.length,
    });
  } catch (error) {
    console.error('❌ Error en mockingpets:', error.message);
    res.status(500).json({
      status: 'error',
      message: error.message,
    });
  }
});


// 👥 GET /api/mocks/mockingusers
router.get('/mockingusers', async (req, res) => {
  console.log('✅ MOCKINGUSERS ejecutado con Faker');

  try {
    const users = await generateMockUsers(50); // genera 50 usuarios por defecto

    res.status(200).json({
      status: 'success',
      message: 'Usuarios mock generados correctamente',
      total: users.length,
      users,
    });
  } catch (error) {
    console.error('❌ Error en mockingusers:', error.message);
    res.status(500).json({
      status: 'error',
      message: error.message,
    });
  }
});

export default router;