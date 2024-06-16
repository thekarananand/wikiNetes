FROM debian:latest

RUN apt update
RUN apt install npm -y

COPY . /opt/wikiNetes/frontend

WORKDIR /opt/wikiNetes/frontend

RUN npm install
RUN npm run build

CMD [ "npm", "run", "start" ]