import { ObjectId } from 'mongodb';
import { Seedling } from '../models/seedlingModels';
import { SeedPackage } from '../models/seedsModels';
import { 
  PlantFamily, 
  PlantInfo, 
  PlantInput,
  CreatePlantFromSeedlingPayload,
  LocationDetails,
  GardenFamily,
  PlantPayload,
  SUN_LIGHT,
} from '../models/plantModels';


export const DEFAULT_LOCATION: LocationDetails = {
  gardenID: new ObjectId,
  coordinates: [0, 0],
  polygon: [0, 0],
  locationDescription: '',
  length: 0,
  width: 0,
  area: 0,
};

export const PlantInfoBuilder = (input:any): PlantInfo => {
  let plantInfo: any = {};

  plantInfo.plantName = input?.plantName ||  input?.plantInfo?.plantName || 'unknown';
  plantInfo.gardenFamily = input?.gardenFamily || input?.plantInfo?.gardenFamily || GardenFamily.NO_LABEL;
  plantInfo.plantFamily = input?.plantFamily ||  input?.plantInfo?.plantFamily || PlantFamily.NONE;
  plantInfo.daysToGerminate = input?.daysToGerminate || input?.plantInfo?.daysToGerminate || 12;
  plantInfo.daysToMaturity = input?.daysToMaturity || input?.plantInfo?.daysToMaturity || 60;
  plantInfo.perennial = input?.perennial || input?.plantInfo?.perennial || false;
  plantInfo.sunlight = input?.SUN_LIGHT || input?.plantInfo?.sunlight || SUN_LIGHT.FULL_SUN;
  
  if (input?.spacing || input?.plantInfo?.spacing) {
    plantInfo.spacing = input.spacing || input.plantInfo?.spacing;
  };

  if (input?.plantingInstructions || input?.plantInfo?.plantingInstructions) {
    plantInfo.plantingInstructions = input.plantingInstructions || input?.plantInfo?.plantingInstructions;
  };

  if (input?.standardHeight || input?.plantInfo?.standardHeight) {
    plantInfo.standardHeight = input.standardHeight || input.plantInfo?.standardHeight;
  };

  if (input?.standardWidth || input?.plantInfo?.standardWidth) {
    plantInfo.standardWidth = input.standardWidth || input.plantInfo?.standardWidth;
  };

  if (input?.friendlyPlants || input?.plantInfo?.friendlyPlants) {
    plantInfo.friendlyPlants = input.friendlyPlants || input.plantInfo?.friendlyPlants || [];
  };

  if (input?.enemyPlants || input?.plantInfo?.enemyPlants) {
    plantInfo.enemyPlants = input.enemyPlants || input.plantInfo?.enemyPlants || [];
  };

  return plantInfo;
}

/*
  Builds a Plant for loading into DB with input values or defaults.
*/
export const PlantBuilder = (plantInput: PlantInput): PlantPayload => {
  let plant: any = {};
  let plantInfo: PlantInfo = {};
  
  // Plant
  plant.plantName = plantInput.plantName || plantInput?.plantInfo?.plantName || 'unknown';
  plant.isFromSeed = plantInput.isFromSeed || false;
  plant.isPlanted = plantInput.isPlanted || false;
  plant.dateGardenPlanted = plantInput.dateGardenPlanted || plant.isPlanted ? new Date() : '';
  plant.dateSeedStarted = plantInput.dateSeedStarted || '';
  plant.qty = plantInput.qty || 1;
  plant.isPlantCollection = plantInput.isPlantCollection || plant.qty > 1 ? true : false;
  plant.seedLife = plantInput.seedLife || {};
  plant.dateModified = new Date();

  if (plantInput?.location) {
    plant.location = plantInput.location
  };

  if (plantInput?.seedLife) {
    plant.seedLife = plantInput;
  };

  plant.plantInfo = PlantInfoBuilder(plantInput);
  return plant as PlantPayload;
}

export const PlantFromSeedlingBuilder = (seedling: Seedling, createPlantInput: PlantInput): CreatePlantFromSeedlingPayload => {
  let plant = PlantBuilder(createPlantInput);
  plant.seedLife = seedling;
  return plant;
};

export const PlantFromSeedBuilder = (seedPackage: SeedPackage, plantInput: PlantInput): PlantPayload => {
  let plant = PlantBuilder(plantInput);
  plant.isFromSeed = true;
  plant.seedLife.seedPackage = seedPackage;
  return plant;
};
