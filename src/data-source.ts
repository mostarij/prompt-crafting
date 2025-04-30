import { DataSource } from 'typeorm';
import { Vehicle } from './models/vehicle.model';
import dotenv from 'dotenv';

dotenv.config();

export const AppDataSource = new DataSource({
  type: 'postgres',
  url: process.env.DATABASE_URL,
  synchronize: false, // Disable schema synchronization
  logging: true,
  entities: [Vehicle],
  migrations: [],
  subscribers: [],
});
