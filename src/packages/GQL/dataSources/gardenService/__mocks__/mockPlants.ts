import { ObjectId } from 'mongodb';
import { mockPlantReport } from './reportMocks';
import { mockLocationDetails } from './mockLocation';

import { 
  GardenFamily, 
  PlantFamily, 
  PlantType,
  PlantInfo,
  SUN_LIGHT, 
  Plant,
} from '../models/plantModels';


export const mockPlantInfo: PlantInfo = {
  plantName: "Smurf",
  plantFamily: PlantFamily.SOLANACEAE,
  gardenFamily: GardenFamily.TOMATO,
  sunlight: SUN_LIGHT.FULL_SUN,
  daysToGerminate: 14,
  daysToMaturity: 65,
  perennial: false,
  spacing: "6 inches",
  standardHeight: 4,
  standardWidth: 6,
  plantingInstructions: "Don't mess up",
  friendlyPlants: ["Beans"],
  enemyPlants: ["Tom's Garden"]
}

export const mockPlant: Plant = {
  plantID: new ObjectId("plantID"),
  qty: 4,
  isPlantCollection: false,
  plantName: "Frank",
  plantType: PlantType.VEGETABLE,
  plantInfo: mockPlantInfo,
  location: mockLocationDetails,
  isPlanted: true,
  isFromSeed: false,
  dateGardenPlanted: new Date('2022-5-15'),
  dateDirectSow: new Date('2022-5-15'),
  dateRemovedFromGarden: undefined,
  plantPurchasePrice: 4.50,
  dateSeedStarted: undefined,
  seedLife: undefined,
  firstFruit: new Date('2022-8-15'),
  lastFruit: new Date('2022-9-28'),
  dateModified: new Date('2022-9-30'),
  reports: [mockPlantReport],
}