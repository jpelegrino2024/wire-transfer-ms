FROM node:20

WORKDIR /app

COPY . .

RUN npm install

ENV PORT 80

EXPOSE 80


CMD [ "npm", "run","start:prod" ]