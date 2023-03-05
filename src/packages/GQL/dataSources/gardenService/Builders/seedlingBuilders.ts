import { SeedPackage } from "../models/seedsModels";
import { SeedlingPayload, Seedling, SeedlingInput } from "../models/seedlingModels";


export const SeedlingFromPackageBuilder = (seedPackage: SeedPackage, seedlingPayload: SeedlingPayload): SeedlingPayload => {
  let seedling: SeedlingPayload = {
    ...seedlingPayload,
    dateLastModified: new Date(),
  };

  const hasStartDate = seedlingPayload?.dateStarted;

  seedling.seedPackage = seedPackage;
  seedling.qtyStarted = seedlingPayload?.qtyStarted || 1;
  seedling.startedIndoors = seedlingPayload?.startedIndoors || true;
  seedling.dateStarted = hasStartDate ? seedlingPayload.dateStarted : new Date();
  seedling.directSowDate = seedlingPayload?.directSowDate || new Date();

  return seedling;
}



export const SeedlingBuilder = (seedlingPayload: SeedlingPayload): SeedlingPayload => {
  let seeling: SeedlingPayload = {
    ...seedlingPayload,
    dateLastModified: new Date(),
    i
  }


}
