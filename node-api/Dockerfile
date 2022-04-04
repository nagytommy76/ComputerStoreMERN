FROM node:16.14.2:alpine
# Innentől a ROOT directory az app foldeben lesz
WORKDIR /app
# Ezért nem kell újra megadni a /app mappát, mert az /app/app lenne
COPY . .

RUN npm install

EXPOSE 5050

CMD [ "executable" ]