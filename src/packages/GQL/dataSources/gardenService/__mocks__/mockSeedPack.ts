import { ObjectId } from 'mongodb';

import { 
  GardenFamily, 
  PlantFamily, 
  PlantType,
  SUN_LIGHT, 
} from '../models/plantModels';

import {
  SeedPackage,
} from '../models/seedsModels';


export const mockSeedPack:SeedPackage = {
  _id: new ObjectId("seedPackId"),
  plantName: "Charlie the Plant", 
  plantType: PlantType.VEGETABLE,
  plantInfo: {
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
  },
  seedMerchant: {
    name: "Walts",
    phoneNumber: "123-456-7890",
    email: "Walts@plantThis.com",
    address: {
      street: "123 main st",
      city: "Seattle",
      state: "WA"
    },
  },
  seedPurveyor: "Territorial",
  qty: 25,
  coverage: "30 ft",
  purchaseCost: 2.95,
  datePurchased: new Date('2021-1-1'),
  dateExpires: new Date('2023-1-1'),
  dateLastModified: new Date('2021-1-1'),
  note: "note"
}
