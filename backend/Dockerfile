FROM node:12

ENV PORT=3333
ENV DB_HOST=127.0.0.1
ENV DB_DATABASE=postgres
ENV DB_USERNAME=postgres
ENV DB_PASSWORD=postgres
ENV DB_PORT=5432
ENV NODE_ENV=production

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE $PORT

CMD [ "npm", "start" ]
