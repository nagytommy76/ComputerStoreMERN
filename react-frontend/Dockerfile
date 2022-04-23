FROM node:16.14.2-alpine

RUN npm install -g typescript

WORKDIR /react-frontend

COPY package.json .

# RUN npm install --save --legacy-peer-deps
# RUN npm install --save --force
RUN npm install

COPY . .

EXPOSE 3001

CMD ["npm", "start"]