import { ObjectId } from 'mongodb';
import {
  GardenFamily,
  HardinessZone,
  PlantFamily,
} from './plantModels';
import { BaseReport } from './reportsModel';


export interface LocationDetails {  //match
  coordinates: number[],
  polygon: number[],
  area: number,
  width: number,
  length: number,
  height: number,
  locationDescription: string,
}

export enum GardenCollectionType { //match
  RAISED_BED,
  POTTED,
  GROUND
}

export interface GardenAreInputPayload { //match
  gardenName?: string
  type?: GardenCollectionType
  location?: LocationDetails
  firstSun?: string
  lastSun?: string
  zone?: HardinessZone
}

export interface GardenCollection { //match
  gardenID: ObjectId,
  gardenName: string,
  type: GardenCollectionType,
  location?: LocationDetails,
  firstSun?: string,
  lastSun?: string,
  zone: HardinessZone,
  reports: BaseReport[],
}


