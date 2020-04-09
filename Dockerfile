FROM node:10.9-alpine

EXPOSE 8000

RUN apk update && \
    rm -rf /var/cache/apk/*

RUN mkdir -p /kpmg/controllers
COPY ./dist/* /kpmg/
COPY ./dist/controllers/* /kpmg/controllers/
COPY yarn.lock /kpmg
COPY package.json /kpmg
WORKDIR /kpmg

RUN yarn --version
RUN yarn --prod --ignore-optional
