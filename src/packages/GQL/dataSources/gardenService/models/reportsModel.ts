import { ObjectId, } from "mongodb";
import { Fertilizer, SoilComposition } from "./soilModels";


export enum ReportTypes {
  "garden" = 'GARDEN',
  'harvest' = 'HARVEST',
  'plant' = 'PLANT',
  'pest' = 'PEST',
}


export interface BaseReport { //match
  _id?: ObjectId,
  date?: Date,
  airTemp?: number,
  soilTemp?: number,
  reportType?: ReportTypes,
}

export type Observation = HarvestReport | PestReport | GardenReport | PlantReport

export interface HarvestReport extends BaseReport { //match
  individualAmount?: number,
  weight?: number,
  financialYield?: number,
  note?: string
}

export interface PestReport extends BaseReport { //match
  pests?: string[],
  treatments?: string[],
  note?: string

}

export interface PlantReport extends BaseReport { //
  watered?: boolean
  wateredAmount?: number,
  fertilized?: boolean,
  fertilizerType?: Fertilizer,
  treatment?: string,
  note?: string

}

export interface GardenReport extends BaseReport {
  watered?: boolean,
  wateredAmount?: number,
  fertilized?: boolean,
  fertilizer?: Fertilizer,
  soilComposition?: SoilComposition,
  note?: string
}
