import { Request, Response } from 'express';
import { AppDataSource } from '../data-source';
import { Vehicle } from '../models/vehicle.model';

const vehicleRepository = AppDataSource.getRepository(Vehicle);

export const vehicleController = {
  /**
   * @swagger
   * /api/vehicles:
   *   get:
   *     summary: Get all vehicles
   *     responses:
   *       200:
   *         description: A list of vehicles
   *         content:
   *           application/json:
   *             schema:
   *               type: array
   *               items:
   *                 $ref: '#/components/schemas/Vehicle'
   */
  // Get all vehicles
  async getAll(req: Request, res: Response) {
    try {
      const vehicles = await vehicleRepository.find();
      return res.json(vehicles);
    } catch (error) {
      return res.status(500).json({ message: 'Error fetching vehicles', error });
    }
  },

  /**
   * @swagger
   * /api/vehicles/{vin}:
   *   get:
   *     summary: Get a vehicle by VIN
   *     parameters:
   *       - in: path
   *         name: vin
   *         required: true
   *         schema:
   *           type: string
   *         description: The VIN of the vehicle
   *     responses:
   *       200:
   *         description: Vehicle details
   *         content:
   *           application/json:
   *             schema:
   *               $ref: '#/components/schemas/Vehicle'
   *       404:
   *         description: Vehicle not found
   */
  // Get vehicle by VIN
  async getByVin(req: Request, res: Response) {
    try {
      const vehicle = await vehicleRepository.findOneBy({ vin: req.params.vin });
      if (!vehicle) {
        return res.status(404).json({ message: 'Vehicle not found' });
      }
      return res.json(vehicle);
    } catch (error) {
      return res.status(500).json({ message: 'Error fetching vehicle', error });
    }
  },

  // Create a new vehicle
  async create(req: Request, res: Response) {
    try {
      const { vin, ...vehicleData } = req.body;
      if (!vin) {
        return res.status(400).json({ message: 'VIN is required' });
      }

      const existingVehicle = await vehicleRepository.findOneBy({ vin });
      if (existingVehicle) {
        return res.status(409).json({ message: 'Vehicle with this VIN already exists' });
      }

      const vehicle = vehicleRepository.create({ vin, ...vehicleData });
      const result = await vehicleRepository.save(vehicle);
      return res.status(201).json(result);
    } catch (error) {
      return res.status(500).json({ message: 'Error creating vehicle', error });
    }
  },

  // Update vehicle by VIN
  async update(req: Request, res: Response) {
    try {
      const { vin } = req.params;
      const { vin: bodyVin, ...updateData } = req.body;

      if (bodyVin && bodyVin !== vin) {
        return res.status(400).json({ message: 'VIN in the body does not match VIN in the URL' });
      }

      const vehicle = await vehicleRepository.findOneBy({ vin });
      if (!vehicle) {
        return res.status(404).json({ message: 'Vehicle not found' });
      }

      vehicleRepository.merge(vehicle, updateData);
      const result = await vehicleRepository.save(vehicle);
      return res.json(result);
    } catch (error) {
      return res.status(500).json({ message: 'Error updating vehicle', error });
    }
  },

  // Delete vehicle by VIN
  async delete(req: Request, res: Response) {
    try {
      const { vin } = req.params;

      const vehicle = await vehicleRepository.findOneBy({ vin });
      if (!vehicle) {
        return res.status(404).json({ message: 'Vehicle not found' });
      }

      await vehicleRepository.remove(vehicle);
      return res.status(204).send();
    } catch (error) {
      return res.status(500).json({ message: 'Error deleting vehicle', error });
    }
  }
};
