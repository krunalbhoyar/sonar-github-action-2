#stage 1
FROM node:10.16.1-alpine as builder
WORKDIR /app
COPY . . copy all to to the container
RUN npm install
RUN npm run build --prod

#stage 2
FROM nginx:alpine
COPY --from=builder /app/dist/angular-app /usr/share/nginx/html
