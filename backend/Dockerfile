FROM python:3.10.0-slim-buster

ENV PYTHONDONTWRITEBYTECODE 1
#python prevents command line info from being bufered and its sent directly to the terminal
ENV PYTHONUNBUFFERED 1

RUN apt-get update \
    && apt-get install -y build-essential \
    && apt-get install -y gcc make libc-dev musl-dev libpcre3 libpcre3-dev g++ \
    && apt-get install -y libgeos-dev libgdal-dev \
    && apt-get install -y gettext \
    && apt-get -y --purge autoremove make libc-dev musl-dev g++ \
    && rm -rf /var/lib/apt/lists/* \
    && rm -rf ~/.cache/pip

# RUN && apt-get update \
#     && apt-get install -y build-essential \
#     && apt-get install -y libpq-dev \
#     && apt-get install -y gettext \
#     && apt-get -y install netcat gcc make postgresql \
#     && apt-get purge -y --auto-remove -o \
#     && rm -rf /var/lib/apt/lists/*

LABEL maintainer='Odhiambo'
LABEL github='https://github.com/odhiambokevin/portfolio'
LABEL description="Development image for Yaspi"
LABEL twitter="https://twitter.com/KevinAbrahams12"

RUN pip install pipenv

WORKDIR /Yaspibackend
#COPY Pipfile.lock Pipfile.lock 
COPY Pipfile Pipfile
RUN pipenv install --system --deploy

COPY . .

COPY ./entrypoint /entrypoint
#convert windows lne endings to unix line endings
RUN sed -i 's/\r$//g' /entrypoint

#make entrypoint executable
RUN chmod =x /entrypoint

#start shellscripts
COPY ./start /start
RUN sed -i 's/\r$//g' /start
RUN chmod =x /start

#set entrypoint
ENTRYPOINT [ "/entrypoint"]
