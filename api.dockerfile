FROM node:10

RUN npm install -g nodemon

ADD  package.json /tmp/package.json
ADD package-lock.json /tmp/package-lock.json
RUN cd /tmp && npm install
RUN mkdir -p /apps/api && cp -a /tmp/node_modules /apps/api/

WORKDIR /apps/api
COPY dist/apps/api /apps/api

EXPOSE 3333

CMD ["nodemon","main.js"]
