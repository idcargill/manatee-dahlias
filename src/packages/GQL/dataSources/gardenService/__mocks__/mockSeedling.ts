import { ObjectId } from "mongodb";
import { Seedling } from "../models/seedlingModels";
import { mockSeedPackage } from "../__tests__/plantBuildersTest";
import { mockPlantInfo } from "./mockPlants";
import { mockPlantReport } from "./reportMocks";



export const mockSeedling: Seedling = {
  seedlingID: new ObjectId('seedlingId'),
  seedPackage: mockSeedPackage,
  qtyStarted: 20,
  qtySprouted: 15,
  qtyTransplanted: 5,
  dateSeedlingStarted?: new Date('2022-5-15'),
  dateSprouted: new Date('2022-5-15'),
  startedIndoors: true,
  directSowDate?: null,
  transplantDate: new Date('2022-6-15'),
  totalDaysHardenedOff: 8,
  plantInfo: mockPlantInfo,
  reports: [mockPlantReport]
}