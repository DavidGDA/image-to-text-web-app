FROM node:22-alpine AS builder

WORKDIR /app

COPY package.json /app/package.json
COPY package-lock.json /app/package-lock.json
RUN npm install

COPY . .
RUN npm run build

FROM nginx:1.26.3-alpine
COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
ENV PORT=80

CMD ["nginx", "-g", "daemon off;"]