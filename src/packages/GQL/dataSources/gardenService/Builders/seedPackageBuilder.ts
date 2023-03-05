import { SeedPackageInput } from "../models/seedsModels";
import { PlantType } from "../models/plantModels";
import { PlantInfoBuilder } from "./plantBuilder";
import { addYearsToExpirationDate } from "../../../utils/dateUtils";

export const SeedPackageBuilder = (seedPackageInput: SeedPackageInput): SeedPackageInput => {
  let seed:SeedPackageInput = {
    plantName: seedPackageInput?.plantName,
    plantType: PlantType.DECORATIVE,
    plantInfo: {}
  };
  seed.qty = seedPackageInput?.qty || 1;
  seed.plantInfo = PlantInfoBuilder(seedPackageInput);
  seed.dateLastModified = new Date();
  seed.dateExpires = seedPackageInput?.dateExpires ? seedPackageInput?.dateExpires : addYearsToExpirationDate(new Date(), 3);

  if (seedPackageInput?.seedMerchant) {
    seed.seedMerchant = {...seedPackageInput?.seedMerchant};
  };
  return seed;
}


export const SeedPackageUpdate = (seedInput: SeedPackageInput) : SeedPackageInput => {
  let seed:SeedPackageInput = {
    ... seedInput
  }; 
  seed.dateLastModified = new Date();
  return seed;
}