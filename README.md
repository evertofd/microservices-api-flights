# ✈️ Flights Microservices API

## Descripción 📋

Sistema distribuido de gestión de vuelos basado en microservicios. Esta aplicación permite administrar usuarios, pasajeros y vuelos de forma desacoplada, usando RabbitMQ como sistema de mensajería y MongoDB como base de datos.

Cada servicio está contenido en su propio módulo, permitiendo escalar y mantener los componentes de forma independiente.

## Arquitectura ⚙️

Este monorepo contiene los siguientes microservicios:

- `api-gateway`: Entrada principal de la aplicación. Expone las rutas HTTP, redirige solicitudes a los microservicios y muestra Swagger.
- `microservice-flights`: Encargado de la gestión de vuelos.
- `microservice-passenger`: Encargado de la gestión de pasajeros.
- `microservices-users`: Encargado de la gestión de usuarios.
- `rabbitmq`: Sistema de mensajería para comunicación entre servicios.
- `mongodb`: Base de datos para almacenar la información compartida por todos los microservicios.

## Pre-requisitos 📦

Asegúrate de tener instalado:

- [Docker & Docker Compose](https://www.docker.com/)
- Opcional: [Node.js](https://nodejs.org/) versión 18.20.3 para desarrollo local
- Opcional: [NestJS CLI](https://docs.nestjs.com/cli/overview) para debugging individual

## Variables de Entorno 🛡️

En la raíz del proyecto, crea un archivo `.env` con el siguiente contenido:

```env
# MongoDB
URI_MONGODB=mongodb://mongodb:27017/superFlights

# JWT
JWT_SECRET=supersecretkey
EXPIRES_IN=3600s

# API Gateway
APP_URL=http://localhost:3001
PORT=3000

# RabbitMQ
RABBITMQ_URI=amqp://rmq:5672
Iniciar Proyecto 🚀
Opción 1: Usando Docker Compose (Recomendado)
En la raíz del proyecto, ejecuta:
```
## Iniciar Proyecto 🚀
## Opción 1: Usando Docker Compose (Recomendado)
En la raíz del proyecto, ejecuta el siguiente comando para levantar todos los servicios:

docker compose up --build
Esto levantará:

API Gateway

Microservicios: vuelos, usuarios y pasajeros

MongoDB

RabbitMQ

## Opción 2: Desarrollo local (por microservicio)
Para ejecutar un servicio de forma local:

cd nombre-del-microservicio
npm install
npm run start:dev
Repite para cada servicio. Asegúrate de que MongoDB y RabbitMQ estén corriendo (puedes usar Docker para eso).

## Tecnologías Utilizadas 🧰
Node.js
NestJS
TypeScript
MongoDB
RabbitMQ

## Autor ✒️
Everto Farías ❤️
