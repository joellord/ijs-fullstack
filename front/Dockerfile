FROM node:14 AS builder
WORKDIR /app
COPY . .
RUN npm run build

FROM nginx:1.17
WORKDIR /usr/share/nginx/html
COPY --from=builder /app/dist .
