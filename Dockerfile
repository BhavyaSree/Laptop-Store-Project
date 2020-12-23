FROM node:14-alpine

ENV NODE_ENV=development

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY /src ./src
COPY /data ./data
COPY /templates ./templates

EXPOSE 1337
# CMD [ "node", "src/index.js" ]

ENTRYPOINT [ "node", "src/index.js" ]