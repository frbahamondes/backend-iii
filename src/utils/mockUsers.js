// src/utils/mockUsers.js
import { fakerES as faker } from '@faker-js/faker';
import bcrypt from 'bcrypt';

// 🔐 Función auxiliar para encriptar contraseñas
const createHash = async (password) => {
  const salts = await bcrypt.genSalt(10);
  return bcrypt.hash(password, salts);
};

// 👤 Función principal para generar usuarios
export const generateMockUsers = async (cantidad = 50) => {
  const users = [];

  for (let i = 0; i < cantidad; i++) {
    const hashedPassword = await createHash("coder123");

    users.push({
      first_name: faker.person.firstName(),
      last_name: faker.person.lastName(),
      email: faker.internet.email(),
      password: hashedPassword,
      role: faker.helpers.arrayElement(['user', 'admin']),
      pets: [],
    });
  }

  return users;
};
