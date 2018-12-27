FROM node:8.12.0-slim
RUN apt-get update \    && apt-get install -y nginx
WORKDIR /app
COPY . /app/
EXPOSE 80
RUN  npm install 
RUN npm run build
RUN cp -r dist/* /var/www/html
RUN rm -rf /app
CMD ["nginx","-g","daemon off;"]