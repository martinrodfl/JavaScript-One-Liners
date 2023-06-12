FROM node:18

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

COPY . .

# Instalación de Browsersync globalmente
RUN npm install -g browser-sync

# Expone el puerto 3000 para acceder a la aplicación en el navegador
EXPOSE 3000

# Comando para iniciar Browsersync y la aplicación
CMD browser-sync start --server --files "index.html, css/*.css, js/*.js" --no-open --no-notify

#?--Create image
# docker build -t one-liners

#?--Run container
# docker run -p 3000:3000 -v $(pwd):/app one-liners