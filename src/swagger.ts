import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import { Express } from 'express';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Vehicle Management API',
      version: '1.0.0',
      description: 'API documentation for managing vehicles',
    },
    servers: [
      {
        url: 'http://localhost:3000',
        description: 'Local server',
      },
    ],
    components: {
      schemas: {
        Vehicle: {
          type: 'object',
          properties: {
            vin: {
              type: 'string',
              description: 'Vehicle Identification Number',
            },
            county: {
              type: 'string',
            },
            city: {
              type: 'string',
            },
            state: {
              type: 'string',
            },
            postal_code: {
              type: 'string',
            },
            model_year: {
              type: 'integer',
            },
            make: {
              type: 'string',
            },
            model: {
              type: 'string',
            },
            electric_vehicle_type: {
              type: 'string',
            },
            clean_alternative_fuel_vehicle_eligibility: {
              type: 'string',
            },
            electric_range: {
              type: 'integer',
            },
            base_msrp: {
              type: 'number',
            },
            legislative_district: {
              type: 'integer',
            },
            dol_vehicle_id: {
              type: 'string',
            },
            vehicle_location: {
              type: 'string',
            },
            electric_utility: {
              type: 'string',
            },
            census_tract_2020: {
              type: 'string',
            },
          },
        },
      },
    },
  },
  apis: ['./src/controllers/*.ts'], // Path to the API docs
};

const swaggerSpec = swaggerJsdoc(options);

export const setupSwagger = (app: Express) => {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  console.log('Swagger docs available at http://localhost:3000/api-docs');
};
