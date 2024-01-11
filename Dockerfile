FROM node:18-alpine
WORKDIR /
COPY . .
RUN npm install