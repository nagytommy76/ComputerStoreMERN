FROM node:16.14.2-alpine

RUN npm install -g typescript

WORKDIR /app

COPY package.json .

RUN npm install --save --legacy-peer-deps

COPY . .

EXPOSE 3001

CMD ["npm", "start"]