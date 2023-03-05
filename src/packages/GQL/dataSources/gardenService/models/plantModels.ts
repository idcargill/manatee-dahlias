import { ObjectId } from 'mongodb';
import { Seedling } from './seedlingModels';
import { BaseReport } from './reportsModel'

export enum NoteType {
  PLANT = 'PLANT',
  SOIL = 'SOIL',
  PEST = 'PEST',
  SEED = 'SEED',
  HARVEST = 'HARVEST',
  GARDEN = 'GARDEN',
}

export interface LocationDetails {
  gardenID: ObjectId;
  coordinates: number[];
  polygon: number[];
  locationDescription: string;
  length: number;
  width: number;
  area: number;
}

export interface LocationInput { //match
  coordinates?: number[];
  polygon?: number[];
  length?: number;
  width?: number;
  area?: number;
  locationDescription?: string;
}

export interface PlantInput {
  plantName?: string;
  plantType?: PlantType;
  plantInfo?: PlantInfo;
  qty?: number;
  gardenFamily?: GardenFamily;
  plantFamily?: string;
  daysToGerminate?: number;
  daysToMaturity?: number;
  sunlight?: SUN_LIGHT;
  standardWidth?: number;
  standardHeight?: number;
  isPlantCollection?: boolean;
  perennial?: boolean;
  isPlanted?: Boolean;
  isFromSeed?: Boolean;
  dateSeedStarted?: Date;
  dateGardenPlanted?: Date;
  purchasedAsSeed?: Boolean;
  purchasePrice?: number;
  seedLife?:Seedling;
  spacing?:string;
  plantingInstructions?: string;
  location?: LocationInput;
  friendlyPlants?: string[];
  enemyPlants?: string[];
}

export interface PlantPayload {
  plantName: string;
  plantType: PlantType;
  plantInfo: PlantInfo;
  qty: number;
  isPlantCollection: boolean;
  location: LocationDetails;
  isPlanted: Boolean;
  isFromSeed: Boolean;
  dateGardenPlanted: Date;
  dateDirectSow: Date;
  dateRemovedFromGarden: Date;
  plantPurchasePrice: number;
  dateSeedStarted: Date;
  seedLife: Seedling;
  firstFruit: Date;
  lastFruit: Date;
  dateModified: string;
}

export interface UpdatePlantPayload { //match
  plantName?: string;
  plantType?: string;
  gardenFamily?: string;
  plantFamily?: string;
  daysToGerminate?: number;
  daysToMaturity?: number;
  sunlight?: SUN_LIGHT;
  standardWidth?: number;
  standardHeight?: number;
  perennial?: boolean;
  isPlanted?: Boolean;
  isFromSeed?: Boolean;
  dateSeedStart?: Date;
  dateGardenPlanted?: Date;
  purchasedAsSeed?: Boolean;
  purchasePrice?: number;
  plantingInstructions?: string;
  location: LocationInput;
}

export enum PlantType {
  DECORATIVE = 'DECORATIVE',
  VEGETABLE = 'VEGETABLE',
  FRUIT = 'FRUIT',
}

export type CreateSeedlingFromSeedPayload = {
  plantName?: string;
  isPlanted?: boolean;
  dateGardenPlanted?: Date;
  locationDetails?: LocationInput;
  dateLastModified?: Date;
  qty?: number;
}

export type CreatePlantFromSeedlingPayload = {
  plantName?: string;
  gardenFamily?: GardenFamily
  plantFamily?: PlantFamily
  plantInfo?: PlantInfo
  qty?: number;
  isPlantCollection?: boolean;
  plantType?: PlantType;
  location?: LocationDetails;
  isPlanted?: Boolean;
  isFromSeed?: Boolean;
  dateGardenPlanted?: Date;
  dateDirectSow?: Date;
  dateRemovedFromGarden?: Date;
  plantPurchasePrice?: number;
  seedLife?: Seedling;
  sunlight?: SUN_LIGHT;
  firstFruit?: Date;
  lastFruit?: Date;
  dateModified?: string;
  reports?: BaseReport[];
}

export type CreatePlantInput = {
  plantName?: string;
  isPlanted?: boolean;
  qty?: number;
  dateGardenPlanted?: Date;
  locationDetails?: LocationInput;
}

export type PlantInfo =  {
  plantName?: string;
  gardenFamily?: GardenFamily;
  plantFamily?: string;
  daysToGerminate?: number;
  daysToMaturity?: number;
  spacing?: string;
  sunlight?: SUN_LIGHT;
  standardWidth?: number;
  standardHeight?: number;
  perennial?: boolean;
  plantingInstructions?: string;
  friendlyPlants?: string[];
  enemyPlants?: string[];
}

// Individual Plant
export type Plant = {
  plantID: ObjectId;
  qty: number;
  isPlantCollection: boolean;
  plantName: string;
  plantType: PlantType;
  plantInfo: PlantInfo;
  location: LocationDetails;
  isPlanted: Boolean;
  isFromSeed: Boolean;
  dateGardenPlanted?: Date;
  dateDirectSow?: Date;
  dateRemovedFromGarden?: Date;
  plantPurchasePrice?: number;
  dateSeedStarted?: Date;
  seedLife?: Seedling;
  firstFruit?: Date;
  lastFruit?: Date;
  dateModified?: Date;
  reports?: BaseReport[];
}

export enum GardenFamily {
  BEANS = 'beans',
  BERRIES = 'berries',
  BROCCOLI = 'broccoli',
  CABBAGE = 'cabbage',
  CARROTS = 'carrots',
  CUCUMBERS = 'cucumbers',
  FLOWERS = 'flowers',
  GARLIC = 'garlic',
  HERBS = 'herbs',
  LETTUCE = 'lettuce',
  MELONS = 'melons',
  ONIONS = 'onions',
  PEAS = 'peas',
  POTATO = 'potato',
  PUMPKIN = 'pumpkin',
  RADISH = 'radish',
  SQUASH = 'squash',
  TOMATO = 'tomato',
  NO_LABEL = 'NO_LABEL',
}

export enum PlantFamily { 
  ALLIUMS = 'alliums',
  AMARANTHACEAE = 'amaranthaceae',
  ASTERS = 'asters',
  AURUMS = 'aurums',
  CRUCIFERS = 'crucifers',
  CURCURBITS = 'curcurbits',
  EUPHORBIAS = 'euphorbias',
  GRASSES = 'grasses',
  LEGUMES = 'legumes',
  MALLOWS = 'mallows',
  MORNING_GLORIES = 'morning glory',
  SOLANACEAE = 'solanaceae',
  UMBELLIFERS = 'umbellifers',
  ZINGIBERACEAE = 'zingiberaceae',
  OTHER = 'other',
  NONE = 'none',
}

export enum SUN_LIGHT {
  FULL_SHADE = 'FULL_SUN',
  PARTIAL_SHADE = 'PARTIAL_SHADE',
  PARTIAL_SUN = 'PARTIAL_SUN',
  FULL_SUN = 'FULL_SUN',
}

export enum HardinessZone {
  _1a,
  _1b,
  _2a,
  _2b,
  _3a,
  _3b,
  _4a,
  _4b,
  _5a,
  _5b,
  _6a,
  _6b,
  _7a,
  _7b,
  _8a,
  _8b,
  _9a,
  _9b,
  _10a,
  _10b,
  _11a,
  _11b,
  _12a,
  _12b,
  _13a,
  _13b,
}
