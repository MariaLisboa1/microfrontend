# Stage 1
FROM node:10-alpine as build-step
RUN mkdir -p /app
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
RUN npm run build --prod
RUN npm run build produto
RUN npm run build perfil

# Stage 2
FROM nginx:1.17.1-alpine
COPY --from=build-step /app/dist/apps/poc /usr/share/nginx/html

# docker build -t microfront/poc .
# docker run -d -it -p 80:80/tcp --name angular microfront/poc:latest
