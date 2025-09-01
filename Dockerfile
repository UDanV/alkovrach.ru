# 1️⃣ Фронтенд сборка
FROM node:20 AS frontend-build
WORKDIR /app/frontend

COPY frontend/package*.json ./
RUN npm install --legacy-peer-deps

COPY frontend/ ./
RUN npm run build

# 2️⃣ PHP + Apache
FROM php:8.2-apache
WORKDIR /var/www/html

RUN docker-php-ext-install mysqli pdo pdo_mysql

COPY backend/ ./
COPY --from=frontend-build /app/frontend/dist/ ./frontend

# Включаем mod_rewrite для SPA
RUN a2enmod rewrite
COPY apache/000-default.conf /etc/apache2/sites-available/000-default.conf

EXPOSE 80
