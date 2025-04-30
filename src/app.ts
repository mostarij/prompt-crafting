import 'reflect-metadata';
import express, { Express } from 'express';
import dotenv from 'dotenv';
import vehicleRoutes from './routes/vehicle.routes';
import { AppDataSource } from './data-source';
import { setupSwagger } from './swagger';

dotenv.config();

const app: Express = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Initialize TypeORM
AppDataSource.initialize()
  .then(() => {
    console.log('Data Source has been initialized!');
    
    // Routes
    app.use('/api/vehicles', vehicleRoutes);

    // Setup Swagger documentation
    setupSwagger(app);

    // Start the server
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('Error during Data Source initialization:', err);
  });
