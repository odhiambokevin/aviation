FROM python:3.10.0-slim-buster

ENV APP_HOME=/app

RUN mkdir $APP_HOME
RUN mkdir $APP_HOME/static
WORKDIR $APP_HOME

# ABEL instruction is used to set metadata for image
LABEL maintainer='Odhiambo'
LABEL github='https://github.com/odhiambokevin/portfolio'
LABEL description="Development image for Yaspi"
LABEL twitter="https://twitter.com/KevinAbrahams12" 

#prevents python from writing .pyc files to disc
ENV PYTHONDONTWRITEBYTECODE 1
#python prevents command line info/output from being bufered and its sent directly to the terminal in real-time
ENV PYTHONUNBUFFERED 1

#-y ensures the build does not stop to ask for user prompts
RUN apt-get update \
    && apt-get install -y build-essential \
    && apt-get install -y libpq-dev \
    && apt-get install -y gcc make libc-dev musl-dev libpcre3 libpcre3-dev g++ \
    && apt-get install -y libgeos-dev libgdal-dev \
    && apt-get install -y gettext \
    && apt-get -y install netcat gcc postgresql \
    #&& apt-get -y --purge autoremove make libc-dev musl-dev g++ \
    && apt-get purge -y --auto-remove -o \
    # && rm -rf ~/.cache/pip
    APT::Autoremove::RecommendsImportant=false \
    && rm -rf /var/lib/apt/lists/ \
    && rm -rf ~/.cache/pip


RUN pip3 install --upgrade pip

COPY ./requirements.txt /app/requirements.txt

RUN pip3 install -r requirements.txt

COPY ./docker/local/django/entrypoint /entrypoint

#convert windows line endings of the shell scripts to unix line endings
RUN sed -i 's/\r$//g' /entrypoint

#make entrypoint shellscript executable
RUN chmod +x /entrypoint

#start shellscripts
COPY ./docker/local/django/start /start
RUN sed -i 's/\r$//g' /start
RUN chmod +x /start

#set entrypoint
ENTRYPOINT [ "/entrypoint"]
