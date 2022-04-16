FROM node:16.14.2-alpine

RUN npm install -g nodemon
RUN npm install -g typescript
RUN npm install -g ts-node

# Innentől a ROOT directory az app foldeben lesz
WORKDIR /api

# package-lock.json-t is másolja
COPY package*.json .
COPY tsconfig.json .

RUN npm install

# Ezért nem kell újra megadni a /app mappát, mert az /app/app lenne
COPY . .

EXPOSE 5050

CMD [ "npm", "run", "dev" ]