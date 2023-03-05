import { ObjectId } from "mongodb"
import { StoreMerchant } from "./seedsModels"

export enum SoilActions { //match
  ADD_SOIL,
  COMPOST,
  COVER,
  COVER_CROP,
  FERTILIZE,
  TILL,
  MULCH,
}

export interface Fertilizer { //match
  id: ObjectId
  fertilizerName: string,
  type: string,
  producer: string,
  supplier: StoreMerchant,
  nitrogen_N: number,
  phosphorus_P: number,
  potassium_K: number,
  cost: number,
  amount: number,
}

export interface SoilComposition { //match
  K: string,
  N: string,
  P: string,
  organicMatter: string,
  note: string
}