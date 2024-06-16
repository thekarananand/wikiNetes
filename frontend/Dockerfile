FROM debian:latest

RUN apt update
RUN apt install npm -y

COPY . /opt/wikiNetes/frontend

WORKDIR /opt/wikiNetes/frontend

RUN npm install
RUN chmod +x runScript.sh

CMD [ "./runScript.sh" ]