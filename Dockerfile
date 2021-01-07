# Stage 1
FROM node:10-alpine as build-step
RUN mkdir -p /app
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
RUN npm run build --prod
FROM build-step as build2
RUN npm run build produto
FROM build2 as build3
RUN npm run build perfil

# Stage 2
FROM nginx:1.17.1-alpine
COPY --from=build3 /app/dist/apps/poc /usr/share/nginx/html

# docker build -t microfront/poc_2 .
# docker run -d -it -p 80:80/tcp --name angular-app microfront/poc_2:0.1
