# Build Stage
FROM node:18-alpine AS build
WORKDIR /code
COPY package*.json ./
RUN npm install
COPY ./ /code/
RUN npm run build
 
# Production Stage
FROM nginx:stable-alpine AS production
COPY --from=build /code/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]