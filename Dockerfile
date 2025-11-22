# Imagen base
FROM node:20-alpine

# Crear directorio de trabajo
WORKDIR /app

# Copiar archivos de dependencias
COPY package*.json ./

# Instalar TODAS las dependencias (sin --production)
RUN npm install

# Copiar el resto del proyecto
COPY . .

# Exponer puerto (coincide con el que usa tu app)
EXPOSE 8080

# Comando para ejecutar la app
CMD ["node", "server.js"]