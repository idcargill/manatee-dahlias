import { ReportTypes } from './models/reportsModel';
import { Seedling } from './models/seedlingModels';
import { SeedPackage } from './models/seedsModels';

const getAllSeedPackages = (parent: any, args: any, context: any) => {
  const seedCollection = context.GARDEN.gardenService.getAllSeedPackages();
  return seedCollection;
};

const getSeedPackageById = (parent: any, args: any, context: any) => {
  const { id } = args;
  const seedPackage = context.GARDEN.gardenService.getSeedPackageById(id);
  return seedPackage;
};

const getAllSeedlings = (parent: any, args: any, context: any) => {
  const seedlingsList = context.GARDEN.gardenService.getAllSeedlings();
  return seedlingsList;
};

const getSeedlingByID = (
  parent: any,
  args: any,
  context: any
): Seedling | null => {
  const { seedlingID } = args;
  const seedling = context.GARDEN.gardenService.getSeedlingByID(seedlingID);
  return seedling;
};

const getPlantByID = (_: any, args: any, context: any) => {
  const { id } = args;
  const result = context.GARDEN.gardenService.getPlantByID(id);
  return result;
};

const getAllPlants = (_: any, args: any, context: any) => {
  const plants = context.GARDEN.gardenService.getAllPlants();
  return plants;
};

const addSeedPack = (parent: any, args: any, context: any): SeedPackage => {
  const { seedPackageInput } = args;
  const seedPackage: SeedPackage =
    context.GARDEN.gardenService.addSeedPack(seedPackageInput);
  return seedPackage;
};

const updateSeedPack = (parent: any, args: any, context: any): string => {
  const { id, seedPackageInput } = args;
  const response = context.GARDEN.gardenService.updateSeedPack(
    id,
    seedPackageInput
  );
  return response;
};

const deletePlant = (_: any, args: any, context: any) => {
  const { id } = args;
  const response = context.GARDEN.gardenService.deletePlant(id);
  return response.then((count: number) => {
    if (count === 1) {
      return 'Item Deleted';
    }
    return 'Nothing was deleted';
  });
};

const deleteSeedPack = (parent: any, args: any, context: any): string => {
  const { id } = args;
  const result = context.GARDEN.gardenService.deleteSeedPack(id);
  return result.then((data: any) => {
    if (data > 0) {
      return 'Item deleted';
    }
    return 'Item not found';
  });
};

const createSeedlingFromSeedID = (
  parent: any,
  args: any,
  context: any
): Seedling | null => {
  const { seedID, seedlingPayload } = args;
  const newSeedling = context.GARDEN.gardenService.createSeedlingFromSeed(
    seedID,
    seedlingPayload
  );
  if (newSeedling) {
    return newSeedling;
  }
  return null;
};

const updateSeedling = (parent: any, args: any, context: any): string => {
  const { seedlingID, seedlingPayload } = args;
  const response = context.GARDEN.gardenService.updateSeedling(
    seedlingID,
    seedlingPayload
  );
  return response;
};

const deleteSeedling = async (_: any, args: any, context: any) => {
  const { seedlingID } = args;
  const result = await context.GARDEN.gardenService.deleteSeedling(seedlingID);
  if (result.deletedCount > 0) {
    return 'deleted';
  }
  return 'Item not found';
};

const createPlantFromSeedling = (parent: any, args: any, context: any) => {
  const { seedlingID, createPlantInput } = args;
  const result = context.GARDEN.gardenService.createPlantFromSeedling(
    seedlingID,
    createPlantInput
  );
  return result;
};

const removePlantFromGarden = (_: any, args: any, context: any) => {
  const { plantID } = args;
  const result = context.GARDEN.gardenService.removePlantFromGarden(plantID);
  return result;
};

const updatePlant = (_: any, args: any, context: any) => {
  const { id, updatePlantPayload } = args;
  const result = context.GARDEN.gardenService.updatePlant(
    id,
    updatePlantPayload
  );
  return result;
};

const addReport = async (parent: any, args: any, context: any) => {
  const { id, collection, payload } = args;
  const result = await context.GARDEN.gardenService.addReport(
    id,
    collection,
    payload
  );
  return result;
};

const createPlant = (_: any, args: any, context: any) => {
  const { newPlantInput } = args;
  const result = context.GARDEN.gardenService.createPlant(newPlantInput);
  return result;
};

const gardenResolvers = {
  Query: {
    getAllSeedPackages,
    getAllSeedlings,
    getAllPlants,
    getSeedPackageById,
    getSeedlingByID,
    getPlantByID,
  },

  Mutation: {
    addReport,
    addSeedPack,
    createPlant,
    createSeedlingFromSeedID,
    createPlantFromSeedling,
    updateSeedPack,
    updateSeedling,
    updatePlant,
    removePlantFromGarden,
    deleteSeedPack,
    deleteSeedling,
    deletePlant,
  },

  Seedling: {
    reports(obj: Seedling, _: any, __: any) {
      if (obj?.reports?.length > 0) {
        return obj.reports;
      }
      return null;
    },
  },

  Observation: {
    __resolveType: (obj: any) => {
      if (obj.reportType === ReportTypes.pest) {
        return 'PestReport';
      }
      if (obj.reportType === ReportTypes.plant) {
        return 'PlantReport';
      }
      if (obj.reportType === ReportTypes.harvest) {
        return 'HarvestReport';
      }
      if (obj.reportType === ReportTypes.garden) {
        return 'GardenReport';
      }
      return null;
    },
  },
};

export default gardenResolvers;
