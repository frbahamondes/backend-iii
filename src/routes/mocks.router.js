// src/routes/mocks.router.js
import { Router } from 'express';
import { generateMockPets } from '../utils/index.js'; // ⚠️ Asegurate que esté bien este import

const router = Router();

router.get('/mockingpets', (req, res) => {
  console.log('✅ MOCKINGPETS ejecutado con Faker');

  try {
    const pets = [];

    for (let i = 0; i < 100; i++) {
      pets.push(generateMockPets());
    }

    res.status(200).json({
      status: 'success',
      total: pets.length,
      pets,
    });
  } catch (error) {
    console.error('❌ Error en mockingpets:', error.message);
    res.status(500).json({
      status: 'error',
      message: error.message,
    });
  }
});

export default router;