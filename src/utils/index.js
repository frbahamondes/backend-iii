import bcrypt from 'bcrypt';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { fakerES as faker } from '@faker-js/faker'; // 👈 Import de Faker debe estar arriba

// 🔐 Función para encriptar contraseña
export const createHash = async (password) => {
  const salts = await bcrypt.genSalt(10);
  return bcrypt.hash(password, salts);
};

// 🔍 Función para validar contraseña
export const passwordValidation = async (user, password) =>
  bcrypt.compare(password, user.password);

// 🧪 Función para generar mascotas mock
export const generateMockPets = () => {
  return {
    name: faker.animal.dog(), // o faker.animal.cat()
    specie: faker.animal.type(), // ✅ ahora genera "specie"
    birthDate: faker.date.past({ years: 10 }),
    adopted: false
  };
};

// 📂 Obtener __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default __dirname;
