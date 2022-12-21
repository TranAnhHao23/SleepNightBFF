FROM node:16

EXPOSE 3000

WORKDIR /app

RUN npm install pm2 -g

RUN npm i npm@latest -g

COPY package*.json ./

RUN npm install

COPY . .

CMD ["node", "dist/main"]
