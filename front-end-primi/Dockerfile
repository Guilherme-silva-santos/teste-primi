# build stage
FROM node:20-alpine as build
WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json /app/package.json

RUN npm install --silent

COPY . /app
RUN npm run build

# final stage 
FROM nginx:1.23.3-alpine
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
CMD ["nginx", "-g", "daemon off;"]