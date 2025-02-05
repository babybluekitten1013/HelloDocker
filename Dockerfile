# Dockerfiles contain instructions for building a docker image

FROM node:23-alpine

WORKDIR /app
VOLUME /app/data

COPY package*.json ./

RUN npm install

COPY . .

ENV PORT=5000

EXPOSE 5000

CMD ["npm", "start"]

