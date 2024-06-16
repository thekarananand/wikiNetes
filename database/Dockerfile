FROM python:3.12-alpine

COPY . /opt/

WORKDIR /opt/

RUN pip install -r requirements.txt

CMD [ "python3", "setup-database.py" ]