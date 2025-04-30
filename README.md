# Vehicle Management API

To setup database follow documentation from https://github.com/burkeholland/prompt-crafting-github-copilot

## Overview
The Vehicle Management API is a RESTful service for managing vehicle data. It provides endpoints to create, read, update, and delete vehicle records. The API is built using Node.js, Express, TypeORM, and PostgreSQL.

## Features
- CRUD operations for vehicle data
- OpenAPI documentation with Swagger
- Centralized error handling
- Request logging with Morgan

## Prerequisites
- Node.js (v16 or later)
- PostgreSQL database

## Setup Instructions

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd prompt-crafting
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure the environment variables:
   Update the `.env` file with your database connection string and server port:
   ```properties
   PORT=3000
   DATABASE_URL=postgres://<username>:<password>@<host>/<database>
   ```

4. Run the application:
   ```bash
   npm run dev
   ```

5. Access the API documentation:
   Open your browser and navigate to `http://localhost:3000/api-docs` to view the Swagger UI.

## API Endpoints

### Vehicles
- **GET /api/vehicles**: Retrieve all vehicles
- **GET /api/vehicles/:vin**: Retrieve a vehicle by VIN
- **POST /api/vehicles**: Create a new vehicle
- **PUT /api/vehicles/:vin**: Update a vehicle by VIN
- **DELETE /api/vehicles/:vin**: Delete a vehicle by VIN

## Project Structure
```
src/
  app.ts               # Application entry point
  data-source.ts       # TypeORM data source configuration
  swagger.ts           # Swagger configuration
  controllers/         # API controllers
  models/              # Database models
  routes/              # API routes
  middlewares/         # Custom middleware
setup/
  createTable.sql      # SQL script to create the vehicles table
  ElectricVehicles.csv # Sample data
```

## License
This project is licensed under the MIT License.
