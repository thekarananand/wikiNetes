FROM node:lts-slim

COPY . /opt/wikiNetes/frontend

WORKDIR /opt/wikiNetes/frontend

RUN npm install
RUN npm run build

CMD [ "npm", "run", "start" ]
