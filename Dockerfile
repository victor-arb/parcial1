# Imagen base
FROM node:14

# Crear el directorio de la aplicación
WORKDIR /usr/src/app

# Instalar dependencias
COPY package.json package-lock.json ./
RUN npm install

# Copiar el código de la aplicación
COPY . .

# Exponer el puerto de la API
EXPOSE 3000

# Comando para iniciar el servidor
CMD ["npm", "start"]
