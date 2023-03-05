import { ObjectId } from "mongodb";
import { GardenFamily, PlantFamily, PlantInfo, PlantType } from "./plantModels";


export interface Address {
  street: string
  city: string
  state: string
}

export interface StoreMerchant {
  _id?: ObjectId
  name?: string
  address?: Address
  phoneNumber?: string
  email?: string
}

export type SeedPackageInput = {
  plantName: string;
  plantType: PlantType;
  gardenFamily?: GardenFamily;
  plantFamily?: PlantFamily;
  plantInfo: PlantInfo;
  qty?: number;
  coverage?: string;
  purchaseCost?: number;
  seedMerchant?: StoreMerchant;
  seedPurveyor?: string;
  datePurchased?: string;
  dateExpires?: Date;
  dateLastModified?: Date;
  note?: string;
}

export type SeedPackage  = {
  _id: ObjectId;
  plantName: string;
  plantType: PlantType;
  plantInfo: PlantInfo;
  qty: number;
  coverage: string;
  purchaseCost: number;
  seedMerchant: StoreMerchant;
  seedPurveyor: string;
  datePurchased: Date;
  dateExpires: Date;
  dateLastModified: Date;
  note: string;
}