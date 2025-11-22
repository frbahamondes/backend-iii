// src/routes/mocks.router.js
import { Router } from 'express';
import { generateMockPets } from '../utils/index.js';
import { generateMockUsers } from '../utils/mockUsers.js'; // ✅ Importamos la nueva función
import { usersService, petsService } from '../services/index.js'; // ✅ Agregado para usar servicios
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

// 📥 POST /api/mocks/generateData
router.post('/generateData', async (req, res) => {
  try {
    const { users = 0, pets = 0 } = req.body;

    const usersCount = parseInt(users);
    const petsCount = parseInt(pets);

    if (isNaN(usersCount) || isNaN(petsCount)) {
      return res.status(400).json({
        status: 'error',
        message: 'Parámetros inválidos: users y pets deben ser números',
      });
    }

    // 👥 Generar usuarios
    const mockUsers = await generateMockUsers(usersCount);
    const insertedUsers = await Promise.all(
      mockUsers.map(user => usersService.create(user))
    );

    // 🐶 Generar mascotas
    const mockPets = [];
    for (let i = 0; i < petsCount; i++) {
      mockPets.push(generateMockPets());
    }

    const insertedPets = await Promise.all(
      mockPets.map(pet => petsService.create(pet))
    );

    res.status(201).json({
      status: 'success',
      message: 'Datos mock generados e insertados correctamente',
      usersInserted: insertedUsers.length,
      petsInserted: insertedPets.length,
    });
  } catch (error) {
    console.error('❌ Error en /generateData:', error.message);
    res.status(500).json({
      status: 'error',
      message: 'Error interno al generar datos mock',
    });
  }
});

export default router;