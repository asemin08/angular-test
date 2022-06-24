### STAGE 1: Build ###
FROM node:18-alpine3.15 AS build
WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build

### STAGE 2: Run ###
FROM nginx:1.23.0-alpine
COPY --from=build /usr/src/app/dist/first-projet-yt /usr/share/nginx/html
EXPOSE 80
