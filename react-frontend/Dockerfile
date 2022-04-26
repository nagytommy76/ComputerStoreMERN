FROM node:16.14.2-alpine

RUN npm install -g typescript

WORKDIR /react-frontend

COPY package.json .
COPY tsconfig.json .

ENV CHOKIDAR_USEPOLLING=true
# RUN npm install --save --legacy-peer-deps
# RUN npm install --save --force
RUN npm install --force

COPY . .

EXPOSE 8080

CMD ["npm", "run", "start"]

# https://github.com/microsoft/WSL/issues/4739
# https://github.com/microsoft/WSL/issues/6255#issuecomment-730701001