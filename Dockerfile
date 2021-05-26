FROM node:latest as builder

WORKDIR /usr/src/app
COPY . .
RUN npm i
RUN npm run build

FROM nginx:alpine

COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=builder /usr/src/app/build /usr/share/nginx/html