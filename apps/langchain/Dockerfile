FROM python:3.11-slim

RUN apt-get -y update && apt-get -y install curl
WORKDIR /code 

COPY ./requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt

COPY ./src ./src

EXPOSE 8000
EXPOSE 5000

CMD ["uvicorn", "src.main:app", "--host", "0.0.0.0", "--port", "8000", "--reload", "&&", "/usr/local/bin/python",  "/code/src/tutorial/combined-basics.py" ]