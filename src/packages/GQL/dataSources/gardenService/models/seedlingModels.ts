import { ObjectId } from "mongodb";
import { PlantInfo } from "./plantModels";
import { Observation } from './reportsModel'
import { SeedPackage } from "./seedsModels";



export interface Seedling {
  seedlingID: ObjectId;
  seedPackage: SeedPackage;
  qtyStarted: number;
  qtySprouted: number;
  qtyTransplanted: number;
  dateSeedlingStarted?: Date;
  dateSprouted: Date;
  startedIndoors: boolean;
  directSowDate?: Date | null;
  transplantDate: Date;
  totalDaysHardenedOff: number;
  plantInfo: PlantInfo;
  reports: Observation[];
}

export interface SeedlingInput {
  seedPackage: SeedPackage;
  qtyStarted?: number;
  dateSeedlingStarted?: Date;
  startedIndoors?: boolean;
  directSowDate?: Date;
  plantInfo?: PlantInfo;
}

export interface SeedlingPayload {
  seedPackage?: SeedPackage;
  qtyStarted?: number;
  qtyTransplanted?: number;
  dateStarted?: Date;
  dateSprouted?: Date;
  startedIndoors?: boolean;
  directSowDate?: Date;
  transplantDate?: Date;
  totalDaysHardenedOff?: number;
  plantInfo?: PlantInfo;
  dateLastModified: Date;
  reports?: Observation[];
}
