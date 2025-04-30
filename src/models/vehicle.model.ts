import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('vehicles')
export class Vehicle {
  @PrimaryColumn()
  vin: string; // Primary key and NOT NULL

  @Column()
  county: string;

  @Column()
  city: string;

  @Column()
  state: string;

  @Column()
  postal_code: string;

  @Column()
  model_year: number;

  @Column()
  make: string;

  @Column()
  model: string;

  @Column()
  electric_vehicle_type: string;

  @Column()
  clean_alternative_fuel_vehicle_eligibility: string;

  @Column()
  electric_range: number;

  @Column()
  base_msrp: number;

  @Column()
  legislative_district: number;

  @Column('bigint')
  dol_vehicle_id: string;

  @Column()
  vehicle_location: string;

  @Column()
  electric_utility: string;

  @Column()
  census_tract_2020: string;
}
