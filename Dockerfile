FROM node:24-alpine

WORKDIR /opt/app

COPY package.json .
COPY package-lock.json .

RUN npm install
COPY . .

CMD ["npm", "run", "dev"]