import { Router } from 'express';
import { vehicleController } from '../controllers/vehicle.controller';

const router = Router();

// Create a new vehicle
router.post('/', vehicleController.create);

// Get all vehicles
router.get('/', vehicleController.getAll);

// Get a single vehicle by VIN
router.get('/:vin', vehicleController.getByVin);

// Update a vehicle by VIN
router.put('/:vin', vehicleController.update);

// Delete a vehicle by VIN
router.delete('/:vin', vehicleController.delete);

export default router;
