import { ObjectId } from 'mongodb';
import { mockFertilizer, mockSoilComposition } from './mocks';

import { 
  PestReport, 
  HarvestReport, 
  GardenReport, 
  PlantReport, 
  ReportTypes
} from '../models/reportsModel';


export const mockPlantReport: PlantReport = {
  _id: new ObjectId('plantReportId'),
  date: new Date('2022-5-15'),
  airTemp: 78,
  soilTemp: 70,
  reportType: ReportTypes.plant,
  watered: true,
  wateredAmount: 500,
  fertilized: true,
  fertilizerType: mockFertilizer,
  treatment: "Pruned lower leaves",
  note: "Looks good"
};

export const mockPestReport: PestReport = {
  _id: new ObjectId('plantReportId'),
  date: new Date('2022-5-15'),
  airTemp: 78,
  soilTemp: 70,
  reportType: ReportTypes.pest,
  pests: ["slugs", "bigger slugs"],
  treatments: ["Slug and snail death"],
  note: "So gross"
};

export const mockGardenReport: GardenReport = {
  _id: new ObjectId('plantReportId'),
  date: new Date('2022-5-15'),
  airTemp: 78,
  soilTemp: 70,
  reportType: ReportTypes.garden,
  watered: true,
  wateredAmount: 100,
  fertilized: true,
  fertilizer: mockFertilizer,
  soilComposition: mockSoilComposition,
  note: 'Garden report'
};

export const mockHarvestReport: HarvestReport = {
  _id: new ObjectId('plantReportId'),
  date: new Date('2022-5-15'),
  airTemp: 78,
  soilTemp: 70,
  reportType: ReportTypes.harvest,
  individualAmount: 14,
  weight: 1.5,
  financialYield: 8.50,
  note: 'harvest'
};



