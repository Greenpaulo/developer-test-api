FROM node:15-alpine

WORKDIR /usr/src/app

ENV PORT 3000
ENV HOST 0.0.0.0

COPY package*.json ./

RUN npm install --only=production

COPY ./dist ./dist

CMD npm run start:prod