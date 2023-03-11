/* eslint-disable */
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
  Time: any;
  URL: any;
};

/** Address, usually for seed/plant store merchant */
export type Address = {
  __typename?: 'Address';
  city?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  street?: Maybe<Scalars['String']>;
};

/** Basic address input */
export type AddressInput = {
  city?: InputMaybe<Scalars['String']>;
  state?: InputMaybe<Scalars['String']>;
  street?: InputMaybe<Scalars['String']>;
};

export type BaseReport = {
  _id?: Maybe<Scalars['ID']>;
  airTemp?: Maybe<Scalars['Float']>;
  date?: Maybe<Scalars['Date']>;
  note?: Maybe<Scalars['String']>;
  reportType?: Maybe<ReportType>;
  soilTemp?: Maybe<Scalars['Float']>;
};

export type CreatePlantInput = {
  dateGardenPlanted?: InputMaybe<Scalars['Date']>;
  isPlanted?: InputMaybe<Scalars['Boolean']>;
  locationDetails?: InputMaybe<LocationInput>;
  qty?: InputMaybe<Scalars['Int']>;
};

/** Fertilizer and treatments */
export type Fertilizer = {
  __typename?: 'Fertilizer';
  amount?: Maybe<Scalars['String']>;
  cost?: Maybe<Scalars['Float']>;
  dateLastModified?: Maybe<Scalars['Date']>;
  fertilizerName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  nitrogen_N?: Maybe<Scalars['Int']>;
  phosphorus_P?: Maybe<Scalars['Int']>;
  potassium_K?: Maybe<Scalars['Int']>;
  producer?: Maybe<Scalars['String']>;
  supplier?: Maybe<StoreMerchant>;
  type?: Maybe<Scalars['String']>;
};

export type FertilizerInput = {
  amount?: InputMaybe<Scalars['String']>;
  cost?: InputMaybe<Scalars['Float']>;
  fertilizerName?: InputMaybe<Scalars['String']>;
  nitrogen_N?: InputMaybe<Scalars['Int']>;
  phosphorus_P?: InputMaybe<Scalars['Int']>;
  potassium_K?: InputMaybe<Scalars['Int']>;
  producer?: InputMaybe<Scalars['String']>;
  supplier?: InputMaybe<StoreMerchantInput>;
  type: Scalars['String'];
};

export type Flower = {
  beardColor?: Maybe<Scalars['String']>;
  bloomColorClassification?: Maybe<Array<Maybe<Scalars['String']>>>;
  bloomColorDescription?: Maybe<Array<Maybe<Scalars['String']>>>;
  bloomSeason?: Maybe<Scalars['String']>;
  classification?: Maybe<Scalars['String']>;
  color?: Maybe<Scalars['String']>;
  flowerForm?: Maybe<Scalars['String']>;
  flowerPatterns?: Maybe<Array<Maybe<Scalars['String']>>>;
  flowers?: Maybe<Scalars['String']>;
  fragrance?: Maybe<Array<Maybe<Scalars['String']>>>;
  hybridizer?: Maybe<Scalars['String']>;
  parantage?: Maybe<Scalars['String']>;
  ploidy?: Maybe<Scalars['String']>;
  registeredHeight?: Maybe<Scalars['String']>;
  seedlingNumber?: Maybe<Scalars['String']>;
  styleArmColor?: Maybe<Scalars['String']>;
  undergroundStructures?: Maybe<Scalars['String']>;
  yearOfIntroduction?: Maybe<Scalars['String']>;
  yearOfRegistration?: Maybe<Scalars['String']>;
};

/** Garden upload input info */
export type GardenAreaInputPayload = {
  dateCreated?: InputMaybe<Scalars['Date']>;
  firstSun?: InputMaybe<Scalars['Time']>;
  gardenName: Scalars['String'];
  hardinessZone?: InputMaybe<HardinessZone>;
  lastSun?: InputMaybe<Scalars['Time']>;
  location?: InputMaybe<LocationInput>;
  type?: InputMaybe<GardenType>;
};

/** Collection of Plants in a shared location (pot, raised bed...) */
export type GardenCollection = {
  __typename?: 'GardenCollection';
  _id: Scalars['ID'];
  dateCreated?: Maybe<Scalars['Date']>;
  dateLastModified?: Maybe<Scalars['Date']>;
  firstSun?: Maybe<Scalars['Time']>;
  gardenName?: Maybe<Scalars['String']>;
  hardinessZone?: Maybe<HardinessZone>;
  lastSun?: Maybe<Scalars['Time']>;
  location?: Maybe<LocationDetails>;
  plants?: Maybe<Array<Maybe<Plant>>>;
  reports?: Maybe<Array<Maybe<Observation>>>;
  type?: Maybe<GardenType>;
};

/** Common Garden Family Name */
export enum GardenFamily {
  Beans = 'BEANS',
  Berries = 'BERRIES',
  Broccoli = 'BROCCOLI',
  Cabbage = 'CABBAGE',
  Carrots = 'CARROTS',
  Cucumbers = 'CUCUMBERS',
  Flowers = 'FLOWERS',
  Garlic = 'GARLIC',
  Greens = 'GREENS',
  Herbs = 'HERBS',
  Lettuce = 'LETTUCE',
  Melons = 'MELONS',
  NoLabel = 'NO_LABEL',
  Onions = 'ONIONS',
  Peas = 'PEAS',
  Potato = 'POTATO',
  Pumpkin = 'PUMPKIN',
  Radish = 'RADISH',
  Squash = 'SQUASH',
  Tomato = 'TOMATO'
}

export type GardenReport = BaseReport & {
  __typename?: 'GardenReport';
  _id?: Maybe<Scalars['ID']>;
  airTemp?: Maybe<Scalars['Float']>;
  date?: Maybe<Scalars['Date']>;
  fertilized?: Maybe<Scalars['Boolean']>;
  fertilizerType?: Maybe<Fertilizer>;
  note?: Maybe<Scalars['String']>;
  reportType?: Maybe<ReportType>;
  soilTemp?: Maybe<Scalars['Float']>;
  treatment?: Maybe<Scalars['String']>;
  watered?: Maybe<Scalars['Boolean']>;
  wateredAmount?: Maybe<Scalars['Int']>;
};

/** Garden Types */
export enum GardenType {
  Ground = 'GROUND',
  Potted = 'POTTED',
  RaisedBed = 'RAISED_BED'
}

/** Calculated from zip code */
export enum HardinessZone {
  '1a' = '_1a',
  '1b' = '_1b',
  '2a' = '_2a',
  '2b' = '_2b',
  '3a' = '_3a',
  '3b' = '_3b',
  '4a' = '_4a',
  '4b' = '_4b',
  '5a' = '_5a',
  '5b' = '_5b',
  '6a' = '_6a',
  '6b' = '_6b',
  '7a' = '_7a',
  '7b' = '_7b',
  '8a' = '_8a',
  '8b' = '_8b',
  '9a' = '_9a',
  '9b' = '_9b',
  '10a' = '_10a',
  '10b' = '_10b',
  '11a' = '_11a',
  '11b' = '_11b',
  '12a' = '_12a',
  '12b' = '_12b',
  '13a' = '_13a',
  '13b' = '_13b'
}

/** Harvest information related to a single plant */
export type HarvestReport = BaseReport & {
  __typename?: 'HarvestReport';
  _id?: Maybe<Scalars['ID']>;
  airTemp?: Maybe<Scalars['Float']>;
  date?: Maybe<Scalars['Date']>;
  financialYield?: Maybe<Scalars['Float']>;
  individualAmount?: Maybe<Scalars['Int']>;
  note?: Maybe<Scalars['String']>;
  reportType?: Maybe<ReportType>;
  soilTemp?: Maybe<Scalars['Float']>;
  weight?: Maybe<Scalars['Float']>;
};

/** Plant or Plant Row location specifics */
export type LocationDetails = {
  __typename?: 'LocationDetails';
  area?: Maybe<Scalars['Float']>;
  coordinates?: Maybe<Array<Maybe<Scalars['Float']>>>;
  height?: Maybe<Scalars['Float']>;
  length?: Maybe<Scalars['Float']>;
  locationDescription?: Maybe<Scalars['String']>;
  polygon?: Maybe<Array<Maybe<Scalars['Float']>>>;
  width?: Maybe<Scalars['Float']>;
};

/** Update location details */
export type LocationInput = {
  area?: InputMaybe<Scalars['Float']>;
  coordinates?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  height?: InputMaybe<Scalars['Float']>;
  length?: InputMaybe<Scalars['Float']>;
  locationDescription?: InputMaybe<Scalars['String']>;
  polygon?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  width?: InputMaybe<Scalars['Float']>;
};

/** Database collection names */
export enum MongoCollections {
  Gardens = 'gardens',
  Plants = 'plants',
  Seedlings = 'seedlings',
  Seeds = 'seeds'
}

export type Mutation = {
  __typename?: 'Mutation';
  addGardenArea?: Maybe<GardenCollection>;
  addReport?: Maybe<Seedling>;
  /** Add a packet of seeds to the seeds collection */
  addSeedPack?: Maybe<SeedPackage>;
  /** Create a new Plant without seeds */
  createPlant?: Maybe<Plant>;
  /** Create a plant from a seedling */
  createPlantFromSeedling?: Maybe<Plant>;
  /** Create a seedling from a seed package */
  createSeedlingFromSeedID?: Maybe<Seedling>;
  /** Delete Plant */
  deletePlant?: Maybe<Scalars['String']>;
  /** Remove Seed Package forever */
  deleteSeedPack?: Maybe<Scalars['String']>;
  /** REMOVE a seedling */
  deleteSeedling?: Maybe<Scalars['String']>;
  getReportById?: Maybe<Observation>;
  /** Remove plant from the garden */
  removePlantFromGarden?: Maybe<Scalars['String']>;
  /** Update plant information */
  updatePlant?: Maybe<Plant>;
  updateReport?: Maybe<Observation>;
  /** Update Seed Package information */
  updateSeedPack?: Maybe<SeedPackage>;
  /** Update seedling information */
  updateSeedling?: Maybe<Seedling>;
};


export type MutationAddGardenAreaArgs = {
  GardenAreaInput: GardenAreaInputPayload;
};


export type MutationAddReportArgs = {
  collection?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  payload?: InputMaybe<ReportInput>;
};


export type MutationAddSeedPackArgs = {
  seedPackageInput?: InputMaybe<SeedPackageInput>;
};


export type MutationCreatePlantArgs = {
  newPlantInput: NewPlantInput;
};


export type MutationCreatePlantFromSeedlingArgs = {
  createPlantInput?: InputMaybe<CreatePlantInput>;
  seedlingID?: InputMaybe<Scalars['ID']>;
};


export type MutationCreateSeedlingFromSeedIdArgs = {
  seedID?: InputMaybe<Scalars['ID']>;
  seedlingPayload?: InputMaybe<SeedlingPayload>;
};


export type MutationDeletePlantArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteSeedPackArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type MutationDeleteSeedlingArgs = {
  seedlingID?: InputMaybe<Scalars['ID']>;
};


export type MutationGetReportByIdArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type MutationRemovePlantFromGardenArgs = {
  plantID?: InputMaybe<Scalars['ID']>;
};


export type MutationUpdatePlantArgs = {
  id: Scalars['ID'];
  updatePlantPayload?: InputMaybe<UpdatePlantPayload>;
};


export type MutationUpdateReportArgs = {
  id?: InputMaybe<Scalars['ID']>;
  payload?: InputMaybe<ReportInput>;
};


export type MutationUpdateSeedPackArgs = {
  id?: InputMaybe<Scalars['ID']>;
  seedPackageInput?: InputMaybe<SeedPackageInput>;
};


export type MutationUpdateSeedlingArgs = {
  seedlingID?: InputMaybe<Scalars['ID']>;
  seedlingPayload?: InputMaybe<SeedlingPayload>;
};

export type NewPlantInput = {
  coverage?: InputMaybe<Scalars['String']>;
  dateDirectSow?: InputMaybe<Scalars['Date']>;
  datePurchased?: InputMaybe<Scalars['Date']>;
  daysToGerminate?: InputMaybe<Scalars['Int']>;
  daysToMaturity?: InputMaybe<Scalars['Int']>;
  determinate?: InputMaybe<Scalars['Boolean']>;
  enemyPlants?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  friendlyPlants?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  gardenFamily?: InputMaybe<GardenFamily>;
  isPlantCollection?: InputMaybe<Scalars['Boolean']>;
  location?: InputMaybe<LocationInput>;
  perennial?: InputMaybe<Scalars['Boolean']>;
  plantFamily?: InputMaybe<PlantFamily>;
  plantName: Scalars['String'];
  plantType: PlantType;
  plantingInstructions?: InputMaybe<Scalars['String']>;
  purchaseCost?: InputMaybe<Scalars['Float']>;
  qty?: InputMaybe<Scalars['Int']>;
  seedMerchant?: InputMaybe<StoreMerchantInput>;
  seedPurveyor?: InputMaybe<Scalars['String']>;
  spacing?: InputMaybe<Scalars['String']>;
  standardHeight?: InputMaybe<Scalars['Int']>;
  standardWidth?: InputMaybe<Scalars['Int']>;
  sunlight?: InputMaybe<SunLight>;
};

export type Observation = GardenReport | HarvestReport | PestReport | PlantReport;

export type PestReport = BaseReport & {
  __typename?: 'PestReport';
  _id?: Maybe<Scalars['ID']>;
  airTemp?: Maybe<Scalars['Float']>;
  date?: Maybe<Scalars['Date']>;
  note?: Maybe<Scalars['String']>;
  pests?: Maybe<Array<Maybe<Scalars['String']>>>;
  reportType?: Maybe<ReportType>;
  soilTemp?: Maybe<Scalars['Float']>;
  treatments?: Maybe<Array<Maybe<Scalars['String']>>>;
};

/** Individual Plant instance or collection/row */
export type Plant = {
  __typename?: 'Plant';
  /** Single plant identifier */
  _id?: Maybe<Scalars['ID']>;
  /** direct seed start date */
  dateDirectSow?: Maybe<Scalars['Date']>;
  /** date put in the ground as seed or transplant */
  dateGardenPlanted?: Maybe<Scalars['Date']>;
  /** last modified */
  dateModified?: Maybe<Scalars['Date']>;
  dateRemovedFromGarden?: Maybe<Scalars['Date']>;
  /** first harvest/flower */
  firstFruit?: Maybe<Scalars['Date']>;
  /** was stared from seed */
  isFromSeed?: Maybe<Scalars['Boolean']>;
  isPlantCollection?: Maybe<Scalars['Boolean']>;
  /** currently growing in your garden */
  isPlanted?: Maybe<Scalars['Boolean']>;
  /** last harvest or cutting */
  lastFruit?: Maybe<Scalars['Date']>;
  location?: Maybe<LocationDetails>;
  plantInfo?: Maybe<PlantInfo>;
  /** Common simple name: "Dancing with Smurfs */
  plantName: Scalars['String'];
  plantPurchasePrice?: Maybe<Scalars['Float']>;
  /** Decorative or vegetable */
  plantType?: Maybe<PlantType>;
  qty?: Maybe<Scalars['Int']>;
  /** Notes will be collected in a log with all reports */
  reports?: Maybe<Array<Maybe<Observation>>>;
  /** Just a little guy's seed life! */
  seedLife?: Maybe<Seedling>;
};

/** ufSeeds */
export type PlantCareInstructions = {
  __typename?: 'PlantCareInstructions';
  beforePlanting?: Maybe<Scalars['String']>;
  daysToMaturity?: Maybe<Scalars['String']>;
  fertilizer?: Maybe<Scalars['String']>;
  harvesting?: Maybe<Scalars['String']>;
  pestsDisease?: Maybe<Scalars['String']>;
  planting?: Maybe<Scalars['String']>;
  storing?: Maybe<Scalars['String']>;
  tips?: Maybe<Scalars['String']>;
  watering?: Maybe<Scalars['String']>;
};

export type PlantDbFlower_Dahlias = {
  ADSCode?: Maybe<Scalars['String']>;
  color?: Maybe<Scalars['String']>;
  countryOfOrigin?: Maybe<Scalars['String']>;
  form?: Maybe<Scalars['String']>;
  hybridizer?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['String']>;
  yearIntroduced?: Maybe<Scalars['String']>;
};

export type PlantDbFlower_Iris = {
  beardColor?: Maybe<Scalars['String']>;
  bloomColorClassification?: Maybe<Array<Maybe<Scalars['String']>>>;
  bloomColorDescription?: Maybe<Array<Maybe<Scalars['String']>>>;
  bloomSeason?: Maybe<Scalars['String']>;
  classification?: Maybe<Scalars['String']>;
  flowerForm?: Maybe<Scalars['String']>;
  flowerPatterns?: Maybe<Array<Maybe<Scalars['String']>>>;
  fragrance?: Maybe<Array<Maybe<Scalars['String']>>>;
  hybridizer?: Maybe<Scalars['String']>;
  registeredHeight?: Maybe<Scalars['String']>;
  seedlingNumber?: Maybe<Scalars['String']>;
  styleArmColor?: Maybe<Scalars['String']>;
  yearOfIntroduction?: Maybe<Scalars['String']>;
  yearOfRegistration?: Maybe<Scalars['String']>;
};

export type PlantDbInfoRaw = {
  __typename?: 'PlantDbInfoRaw';
  bestUses?: Maybe<Scalars['String']>;
  bloomSize?: Maybe<Scalars['String']>;
  containers?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  dynamicAccumulator?: Maybe<Array<Maybe<Scalars['String']>>>;
  earliness?: Maybe<Scalars['String']>;
  eatingMethods?: Maybe<Array<Maybe<Scalars['String']>>>;
  edibleParts?: Maybe<Scalars['String']>;
  flowerColor?: Maybe<Scalars['String']>;
  flowerTime?: Maybe<Scalars['String']>;
  flowers?: Maybe<Scalars['String']>;
  fruit?: Maybe<Scalars['String']>;
  fruitShape?: Maybe<Scalars['String']>;
  fruitSize?: Maybe<Scalars['String']>;
  fruitingTime?: Maybe<Scalars['String']>;
  growthMode?: Maybe<Scalars['String']>;
  leafType?: Maybe<Scalars['String']>;
  leaves?: Maybe<Scalars['String']>;
  lifeCycle?: Maybe<Scalars['String']>;
  minimumColdHardiness?: Maybe<Scalars['String']>;
  plantHabit?: Maybe<Scalars['String']>;
  plantHeight?: Maybe<Scalars['String']>;
  plantSpread?: Maybe<Scalars['String']>;
  pollinators?: Maybe<Array<Maybe<Scalars['String']>>>;
  propagationOtherMethods?: Maybe<Scalars['String']>;
  propagationSeeds?: Maybe<Scalars['String']>;
  resistance?: Maybe<Scalars['String']>;
  skinColor?: Maybe<Scalars['String']>;
  sunRequirements?: Maybe<Scalars['String']>;
  toxicity?: Maybe<Array<Maybe<Scalars['String']>>>;
  undergroundStructures?: Maybe<Scalars['String']>;
  uses?: Maybe<Array<Maybe<Scalars['String']>>>;
  waterPreferences?: Maybe<Scalars['String']>;
};

/** Nerdy Plant Families */
export enum PlantFamily {
  /** Onion Family */
  Alliums = 'ALLIUMS',
  /** Beetroot Family (chard and spinach) */
  Amaranthaceae = 'AMARANTHACEAE',
  /** Sunflower Family */
  Asters = 'ASTERS',
  /** Ornamental flowering plants */
  Aurums = 'AURUMS',
  /** Cabbage Family */
  Crucifers = 'CRUCIFERS',
  /** Gourd family */
  Curcurbits = 'CURCURBITS',
  /** Spurge family */
  Euphorbias = 'EUPHORBIAS',
  /** Maize */
  Grasses = 'GRASSES',
  /** Bean Family */
  Legumes = 'LEGUMES',
  /** Okra is the only edible member of this family */
  Mallows = 'MALLOWS',
  /** Ornamental flowers and sweet potato */
  MorningGlories = 'MORNING_GLORIES',
  /** Nightshade family */
  Solanaceae = 'SOLANACEAE',
  /** Carrot family */
  Umbellifers = 'UMBELLIFERS',
  /** Ginger Family */
  Zingiberaceae = 'ZINGIBERACEAE',
  None = 'none'
}

export type PlantInfo = {
  __typename?: 'PlantInfo';
  _id?: Maybe<Scalars['ID']>;
  daysToGerminate?: Maybe<Scalars['Int']>;
  daysToMaturity?: Maybe<Scalars['Int']>;
  determinate?: Maybe<Scalars['Boolean']>;
  enemyPlants?: Maybe<Array<Maybe<Scalars['String']>>>;
  friendlyPlants?: Maybe<Array<Maybe<Scalars['String']>>>;
  gardenFamily?: Maybe<GardenFamily>;
  perennial?: Maybe<Scalars['Boolean']>;
  plantFamily?: Maybe<PlantFamily>;
  plantName?: Maybe<Scalars['String']>;
  plantingInstructions?: Maybe<Scalars['String']>;
  spacing?: Maybe<Scalars['String']>;
  standardHeight?: Maybe<Scalars['Int']>;
  standardWidth?: Maybe<Scalars['Int']>;
  sunlight?: Maybe<SunLight>;
};

export type PlantInfoInput = {
  daysToGerminate?: InputMaybe<Scalars['Int']>;
  daysToMaturity?: InputMaybe<Scalars['Int']>;
  determinate?: InputMaybe<Scalars['Boolean']>;
  enemyPlants?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  friendlyPlants?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  gardenFamily?: InputMaybe<GardenFamily>;
  perennial?: InputMaybe<Scalars['Boolean']>;
  plantFamily?: InputMaybe<PlantFamily>;
  plantName?: InputMaybe<Scalars['String']>;
  plantingInstructions?: InputMaybe<Scalars['String']>;
  spacing?: InputMaybe<Scalars['String']>;
  standardHeight?: InputMaybe<Scalars['Int']>;
  standardWidth?: InputMaybe<Scalars['Int']>;
  sunlight?: InputMaybe<SunLight>;
};

export type PlantReport = BaseReport & {
  __typename?: 'PlantReport';
  _id?: Maybe<Scalars['ID']>;
  airTemp?: Maybe<Scalars['Float']>;
  date?: Maybe<Scalars['Date']>;
  fertilized?: Maybe<Scalars['Boolean']>;
  fertilizerType?: Maybe<Fertilizer>;
  note?: Maybe<Scalars['String']>;
  reportType?: Maybe<ReportType>;
  soilTemp?: Maybe<Scalars['Float']>;
  treatment?: Maybe<Scalars['String']>;
  watered?: Maybe<Scalars['Boolean']>;
  wateredAmount?: Maybe<Scalars['Int']>;
};

/** Categories of plants */
export enum PlantType {
  Flower = 'FLOWER',
  FruitTree = 'FRUIT_TREE',
  Shrub = 'SHRUB',
  Tree = 'TREE',
  Vegetable = 'VEGETABLE'
}

export type Query = {
  __typename?: 'Query';
  /** Get all plant records */
  getAllPlants?: Maybe<Array<Maybe<Plant>>>;
  /** Get all seed packages */
  getAllSeedPackages?: Maybe<Array<Maybe<SeedPackage>>>;
  /** Get All Seedlings */
  getAllSeedlings?: Maybe<Array<Maybe<Seedling>>>;
  /** Get Plant by ID */
  getPlantByID?: Maybe<Plant>;
  /** Get one seed pack */
  getSeedPackageById?: Maybe<SeedPackage>;
  /** Get one seedling group by ID */
  getSeedlingByID?: Maybe<Seedling>;
  getZoneByZipcode?: Maybe<ZoneResponse>;
  plantTextSearch?: Maybe<Scalars['String']>;
};


export type QueryGetPlantByIdArgs = {
  id: Scalars['ID'];
};


export type QueryGetSeedPackageByIdArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryGetSeedlingByIdArgs = {
  seedlingID?: InputMaybe<Scalars['ID']>;
};


export type QueryGetZoneByZipcodeArgs = {
  zipcode?: InputMaybe<Scalars['String']>;
};


export type QueryPlantTextSearchArgs = {
  text?: InputMaybe<Scalars['String']>;
};

export type ReportInput = {
  airTemp?: InputMaybe<Scalars['Float']>;
  fertilized?: InputMaybe<Scalars['Boolean']>;
  fertilizerType?: InputMaybe<FertilizerInput>;
  financialYield?: InputMaybe<Scalars['Float']>;
  individualAmount?: InputMaybe<Scalars['Int']>;
  note?: InputMaybe<Scalars['String']>;
  pests?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  reportType: ReportType;
  soilTemp?: InputMaybe<Scalars['Float']>;
  treatment?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  watered?: InputMaybe<Scalars['Boolean']>;
  wateredAmount?: InputMaybe<Scalars['Int']>;
  weight?: InputMaybe<Scalars['Float']>;
};

export enum ReportType {
  Garden = 'GARDEN',
  Harvest = 'HARVEST',
  Pest = 'PEST',
  Plant = 'PLANT'
}

/** A package of seeds. Expiration date defaults to 3 years from first entered date */
export type SeedPackage = {
  __typename?: 'SeedPackage';
  _id: Scalars['ID'];
  /** Coverage of entire seed package */
  coverage?: Maybe<Scalars['String']>;
  /** Defaults to 3 years after purchase */
  dateExpires?: Maybe<Scalars['Date']>;
  dateLastModified?: Maybe<Scalars['Date']>;
  datePurchased?: Maybe<Scalars['Date']>;
  note?: Maybe<Scalars['String']>;
  plantInfo?: Maybe<PlantInfo>;
  /** Common plant name */
  plantName?: Maybe<Scalars['String']>;
  plantType?: Maybe<PlantType>;
  purchaseCost?: Maybe<Scalars['Float']>;
  /** Seed quantity upon time of purchase */
  qty?: Maybe<Scalars['Int']>;
  /** Store where seed was purchased */
  seedMerchant?: Maybe<StoreMerchant>;
  /** Seed producer */
  seedPurveyor?: Maybe<Scalars['String']>;
};

/** Update seed pack information */
export type SeedPackageInput = {
  coverage?: InputMaybe<Scalars['String']>;
  dateExpires?: InputMaybe<Scalars['Date']>;
  datePurchased?: InputMaybe<Scalars['Date']>;
  daysToGerminate?: InputMaybe<Scalars['Int']>;
  determinate: Scalars['Boolean'];
  enemyPlants?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  friendlyPlants?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  gardenFamily: GardenFamily;
  note?: InputMaybe<Scalars['String']>;
  perennial: Scalars['Boolean'];
  plantFamily?: InputMaybe<PlantFamily>;
  plantName: Scalars['String'];
  plantType: PlantType;
  purchaseCost?: InputMaybe<Scalars['Float']>;
  qty?: InputMaybe<Scalars['Int']>;
  seedMerchant?: InputMaybe<StoreMerchantInput>;
  seedPurveyor?: InputMaybe<Scalars['String']>;
  spacing?: InputMaybe<Scalars['String']>;
  standardHeight?: InputMaybe<Scalars['Int']>;
  standardWidth?: InputMaybe<Scalars['Int']>;
  sunlight?: InputMaybe<SunLight>;
};

/** Seedling collection, started from seed */
export type Seedling = {
  __typename?: 'Seedling';
  _id: Scalars['ID'];
  dateEntered?: Maybe<Scalars['Date']>;
  dateLastModified?: Maybe<Scalars['Date']>;
  dateSprouted?: Maybe<Scalars['Date']>;
  dateStarted?: Maybe<Scalars['Date']>;
  dateTransplanted?: Maybe<Scalars['Date']>;
  plantInfo?: Maybe<PlantInfo>;
  qtySprouted?: Maybe<Scalars['Int']>;
  qtyStarted?: Maybe<Scalars['Int']>;
  qtyTransplanted?: Maybe<Scalars['Int']>;
  reports?: Maybe<Array<Maybe<Observation>>>;
  seedPackage?: Maybe<SeedPackage>;
  totalDaysHardenedOff?: Maybe<Scalars['Int']>;
};

export type SeedlingPayload = {
  dateSprouted?: InputMaybe<Scalars['Date']>;
  dateStarted?: InputMaybe<Scalars['Date']>;
  dateTransplanted?: InputMaybe<Scalars['Date']>;
  directSowDate?: InputMaybe<Scalars['Date']>;
  qtySprouted?: InputMaybe<Scalars['Int']>;
  qtyStarted?: InputMaybe<Scalars['Int']>;
  qtyTransplanted?: InputMaybe<Scalars['Int']>;
  totalDaysHardenedOff?: InputMaybe<Scalars['Int']>;
};

export enum SoilActions {
  AddSoil = 'ADD_SOIL',
  Compost = 'COMPOST',
  Cover = 'COVER',
  CoverCrop = 'COVER_CROP',
  Fertilize = 'FERTILIZE',
  Mulch = 'MULCH',
  Till = 'TILL'
}

/** Placeholder for soil report data */
export type SoilComposition = {
  __typename?: 'SoilComposition';
  K?: Maybe<Scalars['String']>;
  N?: Maybe<Scalars['String']>;
  P?: Maybe<Scalars['String']>;
  note?: Maybe<Scalars['String']>;
  organicMatter?: Maybe<Scalars['String']>;
};

/** Garden store or supplier */
export type StoreMerchant = {
  __typename?: 'StoreMerchant';
  address?: Maybe<Address>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['URL']>;
};

/** Garden store or supplier */
export type StoreMerchantInput = {
  address?: InputMaybe<AddressInput>;
  email?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  phoneNumber?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['URL']>;
};

/** Sun requirements, defaults to full sun */
export enum SunLight {
  FullShade = 'FULL_SHADE',
  FullSun = 'FULL_SUN',
  PartialShade = 'PARTIAL_SHADE',
  PartialSun = 'PARTIAL_SUN'
}

/** Update Plant info */
export type UpdatePlantPayload = {
  coverage?: InputMaybe<Scalars['String']>;
  dateDirectSow?: InputMaybe<Scalars['Date']>;
  dateGardenPlanted?: InputMaybe<Scalars['Date']>;
  datePurchased?: InputMaybe<Scalars['Date']>;
  daysToGerminate?: InputMaybe<Scalars['Int']>;
  daysToMaturity?: InputMaybe<Scalars['Int']>;
  determinate?: InputMaybe<Scalars['Boolean']>;
  enemyPlants?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  friendlyPlants?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  gardenFamily?: InputMaybe<GardenFamily>;
  isPlantCollection?: InputMaybe<Scalars['Boolean']>;
  location?: InputMaybe<LocationInput>;
  perennial?: InputMaybe<Scalars['Boolean']>;
  plantFamily?: InputMaybe<PlantFamily>;
  plantName?: InputMaybe<Scalars['String']>;
  plantType?: InputMaybe<PlantType>;
  plantingInstructions?: InputMaybe<Scalars['String']>;
  purchaseCost?: InputMaybe<Scalars['Float']>;
  qty?: InputMaybe<Scalars['Int']>;
  seedMerchant?: InputMaybe<StoreMerchantInput>;
  seedPurveyor?: InputMaybe<Scalars['String']>;
  spacing?: InputMaybe<Scalars['String']>;
  standardHeight?: InputMaybe<Scalars['Int']>;
  standardWidth?: InputMaybe<Scalars['Int']>;
  sunlight?: InputMaybe<SunLight>;
};

export type Vegetable = {
  _id?: Maybe<Scalars['ID']>;
  bestUses?: Maybe<Array<Maybe<Scalars['String']>>>;
  daysToGerminate?: Maybe<Scalars['Int']>;
  daysToMaturity?: Maybe<Scalars['Int']>;
  determinate?: Maybe<Scalars['Boolean']>;
  enemyPlants?: Maybe<Array<Maybe<Scalars['String']>>>;
  friendlyPlants?: Maybe<Array<Maybe<Scalars['String']>>>;
  fruitSkinColor?: Maybe<Scalars['String']>;
  fruitingTime?: Maybe<Scalars['String']>;
  gardenFamily?: Maybe<GardenFamily>;
  perennial?: Maybe<Scalars['Boolean']>;
  plantFamily?: Maybe<PlantFamily>;
  plantName?: Maybe<Scalars['String']>;
  plantingInstructions?: Maybe<Scalars['String']>;
  spacing?: Maybe<Scalars['String']>;
  standardHeight?: Maybe<Scalars['Int']>;
  standardWidth?: Maybe<Scalars['Int']>;
  sunlight?: Maybe<SunLight>;
};

export type ZoneResponse = {
  __typename?: 'ZoneResponse';
  hardiness_zone?: Maybe<Scalars['String']>;
  zipcode?: Maybe<Scalars['String']>;
};

/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
  Time: any;
  URL: any;
};

/** Address, usually for seed/plant store merchant */
export type Address = {
  __typename?: 'Address';
  city?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  street?: Maybe<Scalars['String']>;
};

/** Basic address input */
export type AddressInput = {
  city?: InputMaybe<Scalars['String']>;
  state?: InputMaybe<Scalars['String']>;
  street?: InputMaybe<Scalars['String']>;
};

export type BaseReport = {
  _id?: Maybe<Scalars['ID']>;
  airTemp?: Maybe<Scalars['Float']>;
  date?: Maybe<Scalars['Date']>;
  note?: Maybe<Scalars['String']>;
  reportType?: Maybe<ReportType>;
  soilTemp?: Maybe<Scalars['Float']>;
};

export type CreatePlantInput = {
  dateGardenPlanted?: InputMaybe<Scalars['Date']>;
  isPlanted?: InputMaybe<Scalars['Boolean']>;
  locationDetails?: InputMaybe<LocationInput>;
  qty?: InputMaybe<Scalars['Int']>;
};

/** Fertilizer and treatments */
export type Fertilizer = {
  __typename?: 'Fertilizer';
  amount?: Maybe<Scalars['String']>;
  cost?: Maybe<Scalars['Float']>;
  dateLastModified?: Maybe<Scalars['Date']>;
  fertilizerName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  nitrogen_N?: Maybe<Scalars['Int']>;
  phosphorus_P?: Maybe<Scalars['Int']>;
  potassium_K?: Maybe<Scalars['Int']>;
  producer?: Maybe<Scalars['String']>;
  supplier?: Maybe<StoreMerchant>;
  type?: Maybe<Scalars['String']>;
};

export type FertilizerInput = {
  amount?: InputMaybe<Scalars['String']>;
  cost?: InputMaybe<Scalars['Float']>;
  fertilizerName?: InputMaybe<Scalars['String']>;
  nitrogen_N?: InputMaybe<Scalars['Int']>;
  phosphorus_P?: InputMaybe<Scalars['Int']>;
  potassium_K?: InputMaybe<Scalars['Int']>;
  producer?: InputMaybe<Scalars['String']>;
  supplier?: InputMaybe<StoreMerchantInput>;
  type: Scalars['String'];
};

export type Flower = {
  beardColor?: Maybe<Scalars['String']>;
  bloomColorClassification?: Maybe<Array<Maybe<Scalars['String']>>>;
  bloomColorDescription?: Maybe<Array<Maybe<Scalars['String']>>>;
  bloomSeason?: Maybe<Scalars['String']>;
  classification?: Maybe<Scalars['String']>;
  color?: Maybe<Scalars['String']>;
  flowerForm?: Maybe<Scalars['String']>;
  flowerPatterns?: Maybe<Array<Maybe<Scalars['String']>>>;
  flowers?: Maybe<Scalars['String']>;
  fragrance?: Maybe<Array<Maybe<Scalars['String']>>>;
  hybridizer?: Maybe<Scalars['String']>;
  parantage?: Maybe<Scalars['String']>;
  ploidy?: Maybe<Scalars['String']>;
  registeredHeight?: Maybe<Scalars['String']>;
  seedlingNumber?: Maybe<Scalars['String']>;
  styleArmColor?: Maybe<Scalars['String']>;
  undergroundStructures?: Maybe<Scalars['String']>;
  yearOfIntroduction?: Maybe<Scalars['String']>;
  yearOfRegistration?: Maybe<Scalars['String']>;
};

/** Garden upload input info */
export type GardenAreaInputPayload = {
  dateCreated?: InputMaybe<Scalars['Date']>;
  firstSun?: InputMaybe<Scalars['Time']>;
  gardenName: Scalars['String'];
  hardinessZone?: InputMaybe<HardinessZone>;
  lastSun?: InputMaybe<Scalars['Time']>;
  location?: InputMaybe<LocationInput>;
  type?: InputMaybe<GardenType>;
};

/** Collection of Plants in a shared location (pot, raised bed...) */
export type GardenCollection = {
  __typename?: 'GardenCollection';
  _id: Scalars['ID'];
  dateCreated?: Maybe<Scalars['Date']>;
  dateLastModified?: Maybe<Scalars['Date']>;
  firstSun?: Maybe<Scalars['Time']>;
  gardenName?: Maybe<Scalars['String']>;
  hardinessZone?: Maybe<HardinessZone>;
  lastSun?: Maybe<Scalars['Time']>;
  location?: Maybe<LocationDetails>;
  plants?: Maybe<Array<Maybe<Plant>>>;
  reports?: Maybe<Array<Maybe<Observation>>>;
  type?: Maybe<GardenType>;
};

/** Common Garden Family Name */
export enum GardenFamily {
  Beans = 'BEANS',
  Berries = 'BERRIES',
  Broccoli = 'BROCCOLI',
  Cabbage = 'CABBAGE',
  Carrots = 'CARROTS',
  Cucumbers = 'CUCUMBERS',
  Flowers = 'FLOWERS',
  Garlic = 'GARLIC',
  Greens = 'GREENS',
  Herbs = 'HERBS',
  Lettuce = 'LETTUCE',
  Melons = 'MELONS',
  NoLabel = 'NO_LABEL',
  Onions = 'ONIONS',
  Peas = 'PEAS',
  Potato = 'POTATO',
  Pumpkin = 'PUMPKIN',
  Radish = 'RADISH',
  Squash = 'SQUASH',
  Tomato = 'TOMATO'
}

export type GardenReport = BaseReport & {
  __typename?: 'GardenReport';
  _id?: Maybe<Scalars['ID']>;
  airTemp?: Maybe<Scalars['Float']>;
  date?: Maybe<Scalars['Date']>;
  fertilized?: Maybe<Scalars['Boolean']>;
  fertilizerType?: Maybe<Fertilizer>;
  note?: Maybe<Scalars['String']>;
  reportType?: Maybe<ReportType>;
  soilTemp?: Maybe<Scalars['Float']>;
  treatment?: Maybe<Scalars['String']>;
  watered?: Maybe<Scalars['Boolean']>;
  wateredAmount?: Maybe<Scalars['Int']>;
};

/** Garden Types */
export enum GardenType {
  Ground = 'GROUND',
  Potted = 'POTTED',
  RaisedBed = 'RAISED_BED'
}

/** Calculated from zip code */
export enum HardinessZone {
  '1a' = '_1a',
  '1b' = '_1b',
  '2a' = '_2a',
  '2b' = '_2b',
  '3a' = '_3a',
  '3b' = '_3b',
  '4a' = '_4a',
  '4b' = '_4b',
  '5a' = '_5a',
  '5b' = '_5b',
  '6a' = '_6a',
  '6b' = '_6b',
  '7a' = '_7a',
  '7b' = '_7b',
  '8a' = '_8a',
  '8b' = '_8b',
  '9a' = '_9a',
  '9b' = '_9b',
  '10a' = '_10a',
  '10b' = '_10b',
  '11a' = '_11a',
  '11b' = '_11b',
  '12a' = '_12a',
  '12b' = '_12b',
  '13a' = '_13a',
  '13b' = '_13b'
}

/** Harvest information related to a single plant */
export type HarvestReport = BaseReport & {
  __typename?: 'HarvestReport';
  _id?: Maybe<Scalars['ID']>;
  airTemp?: Maybe<Scalars['Float']>;
  date?: Maybe<Scalars['Date']>;
  financialYield?: Maybe<Scalars['Float']>;
  individualAmount?: Maybe<Scalars['Int']>;
  note?: Maybe<Scalars['String']>;
  reportType?: Maybe<ReportType>;
  soilTemp?: Maybe<Scalars['Float']>;
  weight?: Maybe<Scalars['Float']>;
};

/** Plant or Plant Row location specifics */
export type LocationDetails = {
  __typename?: 'LocationDetails';
  area?: Maybe<Scalars['Float']>;
  coordinates?: Maybe<Array<Maybe<Scalars['Float']>>>;
  height?: Maybe<Scalars['Float']>;
  length?: Maybe<Scalars['Float']>;
  locationDescription?: Maybe<Scalars['String']>;
  polygon?: Maybe<Array<Maybe<Scalars['Float']>>>;
  width?: Maybe<Scalars['Float']>;
};

/** Update location details */
export type LocationInput = {
  area?: InputMaybe<Scalars['Float']>;
  coordinates?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  height?: InputMaybe<Scalars['Float']>;
  length?: InputMaybe<Scalars['Float']>;
  locationDescription?: InputMaybe<Scalars['String']>;
  polygon?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  width?: InputMaybe<Scalars['Float']>;
};

/** Database collection names */
export enum MongoCollections {
  Gardens = 'gardens',
  Plants = 'plants',
  Seedlings = 'seedlings',
  Seeds = 'seeds'
}

export type Mutation = {
  __typename?: 'Mutation';
  addGardenArea?: Maybe<GardenCollection>;
  addReport?: Maybe<Seedling>;
  /** Add a packet of seeds to the seeds collection */
  addSeedPack?: Maybe<SeedPackage>;
  /** Create a new Plant without seeds */
  createPlant?: Maybe<Plant>;
  /** Create a plant from a seedling */
  createPlantFromSeedling?: Maybe<Plant>;
  /** Create a seedling from a seed package */
  createSeedlingFromSeedID?: Maybe<Seedling>;
  /** Delete Plant */
  deletePlant?: Maybe<Scalars['String']>;
  /** Remove Seed Package forever */
  deleteSeedPack?: Maybe<Scalars['String']>;
  /** REMOVE a seedling */
  deleteSeedling?: Maybe<Scalars['String']>;
  getReportById?: Maybe<Observation>;
  /** Remove plant from the garden */
  removePlantFromGarden?: Maybe<Scalars['String']>;
  /** Update plant information */
  updatePlant?: Maybe<Plant>;
  updateReport?: Maybe<Observation>;
  /** Update Seed Package information */
  updateSeedPack?: Maybe<SeedPackage>;
  /** Update seedling information */
  updateSeedling?: Maybe<Seedling>;
};


export type MutationAddGardenAreaArgs = {
  GardenAreaInput: GardenAreaInputPayload;
};


export type MutationAddReportArgs = {
  collection?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  payload?: InputMaybe<ReportInput>;
};


export type MutationAddSeedPackArgs = {
  seedPackageInput?: InputMaybe<SeedPackageInput>;
};


export type MutationCreatePlantArgs = {
  newPlantInput: NewPlantInput;
};


export type MutationCreatePlantFromSeedlingArgs = {
  createPlantInput?: InputMaybe<CreatePlantInput>;
  seedlingID?: InputMaybe<Scalars['ID']>;
};


export type MutationCreateSeedlingFromSeedIdArgs = {
  seedID?: InputMaybe<Scalars['ID']>;
  seedlingPayload?: InputMaybe<SeedlingPayload>;
};


export type MutationDeletePlantArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteSeedPackArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type MutationDeleteSeedlingArgs = {
  seedlingID?: InputMaybe<Scalars['ID']>;
};


export type MutationGetReportByIdArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type MutationRemovePlantFromGardenArgs = {
  plantID?: InputMaybe<Scalars['ID']>;
};


export type MutationUpdatePlantArgs = {
  id: Scalars['ID'];
  updatePlantPayload?: InputMaybe<UpdatePlantPayload>;
};


export type MutationUpdateReportArgs = {
  id?: InputMaybe<Scalars['ID']>;
  payload?: InputMaybe<ReportInput>;
};


export type MutationUpdateSeedPackArgs = {
  id?: InputMaybe<Scalars['ID']>;
  seedPackageInput?: InputMaybe<SeedPackageInput>;
};


export type MutationUpdateSeedlingArgs = {
  seedlingID?: InputMaybe<Scalars['ID']>;
  seedlingPayload?: InputMaybe<SeedlingPayload>;
};

export type NewPlantInput = {
  coverage?: InputMaybe<Scalars['String']>;
  dateDirectSow?: InputMaybe<Scalars['Date']>;
  datePurchased?: InputMaybe<Scalars['Date']>;
  daysToGerminate?: InputMaybe<Scalars['Int']>;
  daysToMaturity?: InputMaybe<Scalars['Int']>;
  determinate?: InputMaybe<Scalars['Boolean']>;
  enemyPlants?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  friendlyPlants?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  gardenFamily?: InputMaybe<GardenFamily>;
  isPlantCollection?: InputMaybe<Scalars['Boolean']>;
  location?: InputMaybe<LocationInput>;
  perennial?: InputMaybe<Scalars['Boolean']>;
  plantFamily?: InputMaybe<PlantFamily>;
  plantName: Scalars['String'];
  plantType: PlantType;
  plantingInstructions?: InputMaybe<Scalars['String']>;
  purchaseCost?: InputMaybe<Scalars['Float']>;
  qty?: InputMaybe<Scalars['Int']>;
  seedMerchant?: InputMaybe<StoreMerchantInput>;
  seedPurveyor?: InputMaybe<Scalars['String']>;
  spacing?: InputMaybe<Scalars['String']>;
  standardHeight?: InputMaybe<Scalars['Int']>;
  standardWidth?: InputMaybe<Scalars['Int']>;
  sunlight?: InputMaybe<SunLight>;
};

export type Observation = GardenReport | HarvestReport | PestReport | PlantReport;

export type PestReport = BaseReport & {
  __typename?: 'PestReport';
  _id?: Maybe<Scalars['ID']>;
  airTemp?: Maybe<Scalars['Float']>;
  date?: Maybe<Scalars['Date']>;
  note?: Maybe<Scalars['String']>;
  pests?: Maybe<Array<Maybe<Scalars['String']>>>;
  reportType?: Maybe<ReportType>;
  soilTemp?: Maybe<Scalars['Float']>;
  treatments?: Maybe<Array<Maybe<Scalars['String']>>>;
};

/** Individual Plant instance or collection/row */
export type Plant = {
  __typename?: 'Plant';
  /** Single plant identifier */
  _id?: Maybe<Scalars['ID']>;
  /** direct seed start date */
  dateDirectSow?: Maybe<Scalars['Date']>;
  /** date put in the ground as seed or transplant */
  dateGardenPlanted?: Maybe<Scalars['Date']>;
  /** last modified */
  dateModified?: Maybe<Scalars['Date']>;
  dateRemovedFromGarden?: Maybe<Scalars['Date']>;
  /** first harvest/flower */
  firstFruit?: Maybe<Scalars['Date']>;
  /** was stared from seed */
  isFromSeed?: Maybe<Scalars['Boolean']>;
  isPlantCollection?: Maybe<Scalars['Boolean']>;
  /** currently growing in your garden */
  isPlanted?: Maybe<Scalars['Boolean']>;
  /** last harvest or cutting */
  lastFruit?: Maybe<Scalars['Date']>;
  location?: Maybe<LocationDetails>;
  plantInfo?: Maybe<PlantInfo>;
  /** Common simple name: "Dancing with Smurfs */
  plantName: Scalars['String'];
  plantPurchasePrice?: Maybe<Scalars['Float']>;
  /** Decorative or vegetable */
  plantType?: Maybe<PlantType>;
  qty?: Maybe<Scalars['Int']>;
  /** Notes will be collected in a log with all reports */
  reports?: Maybe<Array<Maybe<Observation>>>;
  /** Just a little guy's seed life! */
  seedLife?: Maybe<Seedling>;
};

/** ufSeeds */
export type PlantCareInstructions = {
  __typename?: 'PlantCareInstructions';
  beforePlanting?: Maybe<Scalars['String']>;
  daysToMaturity?: Maybe<Scalars['String']>;
  fertilizer?: Maybe<Scalars['String']>;
  harvesting?: Maybe<Scalars['String']>;
  pestsDisease?: Maybe<Scalars['String']>;
  planting?: Maybe<Scalars['String']>;
  storing?: Maybe<Scalars['String']>;
  tips?: Maybe<Scalars['String']>;
  watering?: Maybe<Scalars['String']>;
};

export type PlantDbFlower_Dahlias = {
  ADSCode?: Maybe<Scalars['String']>;
  color?: Maybe<Scalars['String']>;
  countryOfOrigin?: Maybe<Scalars['String']>;
  form?: Maybe<Scalars['String']>;
  hybridizer?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['String']>;
  yearIntroduced?: Maybe<Scalars['String']>;
};

export type PlantDbFlower_Iris = {
  beardColor?: Maybe<Scalars['String']>;
  bloomColorClassification?: Maybe<Array<Maybe<Scalars['String']>>>;
  bloomColorDescription?: Maybe<Array<Maybe<Scalars['String']>>>;
  bloomSeason?: Maybe<Scalars['String']>;
  classification?: Maybe<Scalars['String']>;
  flowerForm?: Maybe<Scalars['String']>;
  flowerPatterns?: Maybe<Array<Maybe<Scalars['String']>>>;
  fragrance?: Maybe<Array<Maybe<Scalars['String']>>>;
  hybridizer?: Maybe<Scalars['String']>;
  registeredHeight?: Maybe<Scalars['String']>;
  seedlingNumber?: Maybe<Scalars['String']>;
  styleArmColor?: Maybe<Scalars['String']>;
  yearOfIntroduction?: Maybe<Scalars['String']>;
  yearOfRegistration?: Maybe<Scalars['String']>;
};

export type PlantDbInfoRaw = {
  __typename?: 'PlantDbInfoRaw';
  bestUses?: Maybe<Scalars['String']>;
  bloomSize?: Maybe<Scalars['String']>;
  containers?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  dynamicAccumulator?: Maybe<Array<Maybe<Scalars['String']>>>;
  earliness?: Maybe<Scalars['String']>;
  eatingMethods?: Maybe<Array<Maybe<Scalars['String']>>>;
  edibleParts?: Maybe<Scalars['String']>;
  flowerColor?: Maybe<Scalars['String']>;
  flowerTime?: Maybe<Scalars['String']>;
  flowers?: Maybe<Scalars['String']>;
  fruit?: Maybe<Scalars['String']>;
  fruitShape?: Maybe<Scalars['String']>;
  fruitSize?: Maybe<Scalars['String']>;
  fruitingTime?: Maybe<Scalars['String']>;
  growthMode?: Maybe<Scalars['String']>;
  leafType?: Maybe<Scalars['String']>;
  leaves?: Maybe<Scalars['String']>;
  lifeCycle?: Maybe<Scalars['String']>;
  minimumColdHardiness?: Maybe<Scalars['String']>;
  plantHabit?: Maybe<Scalars['String']>;
  plantHeight?: Maybe<Scalars['String']>;
  plantSpread?: Maybe<Scalars['String']>;
  pollinators?: Maybe<Array<Maybe<Scalars['String']>>>;
  propagationOtherMethods?: Maybe<Scalars['String']>;
  propagationSeeds?: Maybe<Scalars['String']>;
  resistance?: Maybe<Scalars['String']>;
  skinColor?: Maybe<Scalars['String']>;
  sunRequirements?: Maybe<Scalars['String']>;
  toxicity?: Maybe<Array<Maybe<Scalars['String']>>>;
  undergroundStructures?: Maybe<Scalars['String']>;
  uses?: Maybe<Array<Maybe<Scalars['String']>>>;
  waterPreferences?: Maybe<Scalars['String']>;
};

/** Nerdy Plant Families */
export enum PlantFamily {
  /** Onion Family */
  Alliums = 'ALLIUMS',
  /** Beetroot Family (chard and spinach) */
  Amaranthaceae = 'AMARANTHACEAE',
  /** Sunflower Family */
  Asters = 'ASTERS',
  /** Ornamental flowering plants */
  Aurums = 'AURUMS',
  /** Cabbage Family */
  Crucifers = 'CRUCIFERS',
  /** Gourd family */
  Curcurbits = 'CURCURBITS',
  /** Spurge family */
  Euphorbias = 'EUPHORBIAS',
  /** Maize */
  Grasses = 'GRASSES',
  /** Bean Family */
  Legumes = 'LEGUMES',
  /** Okra is the only edible member of this family */
  Mallows = 'MALLOWS',
  /** Ornamental flowers and sweet potato */
  MorningGlories = 'MORNING_GLORIES',
  /** Nightshade family */
  Solanaceae = 'SOLANACEAE',
  /** Carrot family */
  Umbellifers = 'UMBELLIFERS',
  /** Ginger Family */
  Zingiberaceae = 'ZINGIBERACEAE',
  None = 'none'
}

export type PlantInfo = {
  __typename?: 'PlantInfo';
  _id?: Maybe<Scalars['ID']>;
  daysToGerminate?: Maybe<Scalars['Int']>;
  daysToMaturity?: Maybe<Scalars['Int']>;
  determinate?: Maybe<Scalars['Boolean']>;
  enemyPlants?: Maybe<Array<Maybe<Scalars['String']>>>;
  friendlyPlants?: Maybe<Array<Maybe<Scalars['String']>>>;
  gardenFamily?: Maybe<GardenFamily>;
  perennial?: Maybe<Scalars['Boolean']>;
  plantFamily?: Maybe<PlantFamily>;
  plantName?: Maybe<Scalars['String']>;
  plantingInstructions?: Maybe<Scalars['String']>;
  spacing?: Maybe<Scalars['String']>;
  standardHeight?: Maybe<Scalars['Int']>;
  standardWidth?: Maybe<Scalars['Int']>;
  sunlight?: Maybe<SunLight>;
};

export type PlantInfoInput = {
  daysToGerminate?: InputMaybe<Scalars['Int']>;
  daysToMaturity?: InputMaybe<Scalars['Int']>;
  determinate?: InputMaybe<Scalars['Boolean']>;
  enemyPlants?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  friendlyPlants?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  gardenFamily?: InputMaybe<GardenFamily>;
  perennial?: InputMaybe<Scalars['Boolean']>;
  plantFamily?: InputMaybe<PlantFamily>;
  plantName?: InputMaybe<Scalars['String']>;
  plantingInstructions?: InputMaybe<Scalars['String']>;
  spacing?: InputMaybe<Scalars['String']>;
  standardHeight?: InputMaybe<Scalars['Int']>;
  standardWidth?: InputMaybe<Scalars['Int']>;
  sunlight?: InputMaybe<SunLight>;
};

export type PlantReport = BaseReport & {
  __typename?: 'PlantReport';
  _id?: Maybe<Scalars['ID']>;
  airTemp?: Maybe<Scalars['Float']>;
  date?: Maybe<Scalars['Date']>;
  fertilized?: Maybe<Scalars['Boolean']>;
  fertilizerType?: Maybe<Fertilizer>;
  note?: Maybe<Scalars['String']>;
  reportType?: Maybe<ReportType>;
  soilTemp?: Maybe<Scalars['Float']>;
  treatment?: Maybe<Scalars['String']>;
  watered?: Maybe<Scalars['Boolean']>;
  wateredAmount?: Maybe<Scalars['Int']>;
};

/** Categories of plants */
export enum PlantType {
  Flower = 'FLOWER',
  FruitTree = 'FRUIT_TREE',
  Shrub = 'SHRUB',
  Tree = 'TREE',
  Vegetable = 'VEGETABLE'
}

export type Query = {
  __typename?: 'Query';
  /** Get all plant records */
  getAllPlants?: Maybe<Array<Maybe<Plant>>>;
  /** Get all seed packages */
  getAllSeedPackages?: Maybe<Array<Maybe<SeedPackage>>>;
  /** Get All Seedlings */
  getAllSeedlings?: Maybe<Array<Maybe<Seedling>>>;
  /** Get Plant by ID */
  getPlantByID?: Maybe<Plant>;
  /** Get one seed pack */
  getSeedPackageById?: Maybe<SeedPackage>;
  /** Get one seedling group by ID */
  getSeedlingByID?: Maybe<Seedling>;
  getZoneByZipcode?: Maybe<ZoneResponse>;
  plantTextSearch?: Maybe<Scalars['String']>;
};


export type QueryGetPlantByIdArgs = {
  id: Scalars['ID'];
};


export type QueryGetSeedPackageByIdArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryGetSeedlingByIdArgs = {
  seedlingID?: InputMaybe<Scalars['ID']>;
};


export type QueryGetZoneByZipcodeArgs = {
  zipcode?: InputMaybe<Scalars['String']>;
};


export type QueryPlantTextSearchArgs = {
  text?: InputMaybe<Scalars['String']>;
};

export type ReportInput = {
  airTemp?: InputMaybe<Scalars['Float']>;
  fertilized?: InputMaybe<Scalars['Boolean']>;
  fertilizerType?: InputMaybe<FertilizerInput>;
  financialYield?: InputMaybe<Scalars['Float']>;
  individualAmount?: InputMaybe<Scalars['Int']>;
  note?: InputMaybe<Scalars['String']>;
  pests?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  reportType: ReportType;
  soilTemp?: InputMaybe<Scalars['Float']>;
  treatment?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  watered?: InputMaybe<Scalars['Boolean']>;
  wateredAmount?: InputMaybe<Scalars['Int']>;
  weight?: InputMaybe<Scalars['Float']>;
};

export enum ReportType {
  Garden = 'GARDEN',
  Harvest = 'HARVEST',
  Pest = 'PEST',
  Plant = 'PLANT'
}

/** A package of seeds. Expiration date defaults to 3 years from first entered date */
export type SeedPackage = {
  __typename?: 'SeedPackage';
  _id: Scalars['ID'];
  /** Coverage of entire seed package */
  coverage?: Maybe<Scalars['String']>;
  /** Defaults to 3 years after purchase */
  dateExpires?: Maybe<Scalars['Date']>;
  dateLastModified?: Maybe<Scalars['Date']>;
  datePurchased?: Maybe<Scalars['Date']>;
  note?: Maybe<Scalars['String']>;
  plantInfo?: Maybe<PlantInfo>;
  /** Common plant name */
  plantName?: Maybe<Scalars['String']>;
  plantType?: Maybe<PlantType>;
  purchaseCost?: Maybe<Scalars['Float']>;
  /** Seed quantity upon time of purchase */
  qty?: Maybe<Scalars['Int']>;
  /** Store where seed was purchased */
  seedMerchant?: Maybe<StoreMerchant>;
  /** Seed producer */
  seedPurveyor?: Maybe<Scalars['String']>;
};

/** Update seed pack information */
export type SeedPackageInput = {
  coverage?: InputMaybe<Scalars['String']>;
  dateExpires?: InputMaybe<Scalars['Date']>;
  datePurchased?: InputMaybe<Scalars['Date']>;
  daysToGerminate?: InputMaybe<Scalars['Int']>;
  determinate: Scalars['Boolean'];
  enemyPlants?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  friendlyPlants?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  gardenFamily: GardenFamily;
  note?: InputMaybe<Scalars['String']>;
  perennial: Scalars['Boolean'];
  plantFamily?: InputMaybe<PlantFamily>;
  plantName: Scalars['String'];
  plantType: PlantType;
  purchaseCost?: InputMaybe<Scalars['Float']>;
  qty?: InputMaybe<Scalars['Int']>;
  seedMerchant?: InputMaybe<StoreMerchantInput>;
  seedPurveyor?: InputMaybe<Scalars['String']>;
  spacing?: InputMaybe<Scalars['String']>;
  standardHeight?: InputMaybe<Scalars['Int']>;
  standardWidth?: InputMaybe<Scalars['Int']>;
  sunlight?: InputMaybe<SunLight>;
};

/** Seedling collection, started from seed */
export type Seedling = {
  __typename?: 'Seedling';
  _id: Scalars['ID'];
  dateEntered?: Maybe<Scalars['Date']>;
  dateLastModified?: Maybe<Scalars['Date']>;
  dateSprouted?: Maybe<Scalars['Date']>;
  dateStarted?: Maybe<Scalars['Date']>;
  dateTransplanted?: Maybe<Scalars['Date']>;
  plantInfo?: Maybe<PlantInfo>;
  qtySprouted?: Maybe<Scalars['Int']>;
  qtyStarted?: Maybe<Scalars['Int']>;
  qtyTransplanted?: Maybe<Scalars['Int']>;
  reports?: Maybe<Array<Maybe<Observation>>>;
  seedPackage?: Maybe<SeedPackage>;
  totalDaysHardenedOff?: Maybe<Scalars['Int']>;
};

export type SeedlingPayload = {
  dateSprouted?: InputMaybe<Scalars['Date']>;
  dateStarted?: InputMaybe<Scalars['Date']>;
  dateTransplanted?: InputMaybe<Scalars['Date']>;
  directSowDate?: InputMaybe<Scalars['Date']>;
  qtySprouted?: InputMaybe<Scalars['Int']>;
  qtyStarted?: InputMaybe<Scalars['Int']>;
  qtyTransplanted?: InputMaybe<Scalars['Int']>;
  totalDaysHardenedOff?: InputMaybe<Scalars['Int']>;
};

export enum SoilActions {
  AddSoil = 'ADD_SOIL',
  Compost = 'COMPOST',
  Cover = 'COVER',
  CoverCrop = 'COVER_CROP',
  Fertilize = 'FERTILIZE',
  Mulch = 'MULCH',
  Till = 'TILL'
}

/** Placeholder for soil report data */
export type SoilComposition = {
  __typename?: 'SoilComposition';
  K?: Maybe<Scalars['String']>;
  N?: Maybe<Scalars['String']>;
  P?: Maybe<Scalars['String']>;
  note?: Maybe<Scalars['String']>;
  organicMatter?: Maybe<Scalars['String']>;
};

/** Garden store or supplier */
export type StoreMerchant = {
  __typename?: 'StoreMerchant';
  address?: Maybe<Address>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['URL']>;
};

/** Garden store or supplier */
export type StoreMerchantInput = {
  address?: InputMaybe<AddressInput>;
  email?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  phoneNumber?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['URL']>;
};

/** Sun requirements, defaults to full sun */
export enum SunLight {
  FullShade = 'FULL_SHADE',
  FullSun = 'FULL_SUN',
  PartialShade = 'PARTIAL_SHADE',
  PartialSun = 'PARTIAL_SUN'
}

/** Update Plant info */
export type UpdatePlantPayload = {
  coverage?: InputMaybe<Scalars['String']>;
  dateDirectSow?: InputMaybe<Scalars['Date']>;
  dateGardenPlanted?: InputMaybe<Scalars['Date']>;
  datePurchased?: InputMaybe<Scalars['Date']>;
  daysToGerminate?: InputMaybe<Scalars['Int']>;
  daysToMaturity?: InputMaybe<Scalars['Int']>;
  determinate?: InputMaybe<Scalars['Boolean']>;
  enemyPlants?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  friendlyPlants?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  gardenFamily?: InputMaybe<GardenFamily>;
  isPlantCollection?: InputMaybe<Scalars['Boolean']>;
  location?: InputMaybe<LocationInput>;
  perennial?: InputMaybe<Scalars['Boolean']>;
  plantFamily?: InputMaybe<PlantFamily>;
  plantName?: InputMaybe<Scalars['String']>;
  plantType?: InputMaybe<PlantType>;
  plantingInstructions?: InputMaybe<Scalars['String']>;
  purchaseCost?: InputMaybe<Scalars['Float']>;
  qty?: InputMaybe<Scalars['Int']>;
  seedMerchant?: InputMaybe<StoreMerchantInput>;
  seedPurveyor?: InputMaybe<Scalars['String']>;
  spacing?: InputMaybe<Scalars['String']>;
  standardHeight?: InputMaybe<Scalars['Int']>;
  standardWidth?: InputMaybe<Scalars['Int']>;
  sunlight?: InputMaybe<SunLight>;
};

export type Vegetable = {
  _id?: Maybe<Scalars['ID']>;
  bestUses?: Maybe<Array<Maybe<Scalars['String']>>>;
  daysToGerminate?: Maybe<Scalars['Int']>;
  daysToMaturity?: Maybe<Scalars['Int']>;
  determinate?: Maybe<Scalars['Boolean']>;
  enemyPlants?: Maybe<Array<Maybe<Scalars['String']>>>;
  friendlyPlants?: Maybe<Array<Maybe<Scalars['String']>>>;
  fruitSkinColor?: Maybe<Scalars['String']>;
  fruitingTime?: Maybe<Scalars['String']>;
  gardenFamily?: Maybe<GardenFamily>;
  perennial?: Maybe<Scalars['Boolean']>;
  plantFamily?: Maybe<PlantFamily>;
  plantName?: Maybe<Scalars['String']>;
  plantingInstructions?: Maybe<Scalars['String']>;
  spacing?: Maybe<Scalars['String']>;
  standardHeight?: Maybe<Scalars['Int']>;
  standardWidth?: Maybe<Scalars['Int']>;
  sunlight?: Maybe<SunLight>;
};

export type ZoneResponse = {
  __typename?: 'ZoneResponse';
  hardiness_zone?: Maybe<Scalars['String']>;
  zipcode?: Maybe<Scalars['String']>;
};
