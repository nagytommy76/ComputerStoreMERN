FROM node:16.14.2-alpine

RUN npm install -g typescript

# Innentől a ROOT directory az app foldeben lesz
WORKDIR /node-api

# package-lock.json-t is másolja
COPY package*.json ./
COPY tsconfig.json ./

RUN npm install

# Ezért nem kell újra megadni a /app mappát, mert az /app/app lenne
COPY . .

EXPOSE 5050

CMD [ "npm", "run", "dev" ]