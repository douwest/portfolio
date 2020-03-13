FROM node:alpine AS builder

WORKDIR /portfolio

COPY . .

RUN npm install && \
    npm run build --prod

FROM nginx:alpine

COPY --from=builder /portfolio/dist/* /usr/share/nginx/html/

