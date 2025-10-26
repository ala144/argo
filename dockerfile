FROM node:18 AS build
WORKDIR /app
COPY package*.json ./
RUN npm install -g npm@11.6.2
RUN npm install --legacy-peer-deps
COPY . .
RUN npm run build --prod

FROM nginx:alpine
COPY --from=build /app/dist/argon-dashboard-angular /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
