import { ObjectId } from "mongodb";
import { SeedPackage, SeedPackageInput } from "../models/seedsModels"
import { GardenFamily, PlantFamily, PlantInfo, PlantType } from "../models/plantModels";


import { mockPlantInfo, mockSeedPackage } from "./plantBuildersTest";
import { SeedPackageBuilder, SeedPackageUpdate } from '../Builders/seedPackageBuilder';

describe('SeedPackageBuilder', () => {
  it('Should be defined', () => {
    expect(SeedPackageBuilder).toBeDefined();
  })

  test('should return default values', () => {
    const input: SeedPackageInput = {
      plantName: 'Smurfs',
      plantType: PlantType.VEGETABLE,
      plantInfo: mockPlantInfo,
    };

    const result = SeedPackageBuilder(input);
    expect(result.qty).toBe(1);
    expect(result.dateLastModified).toBeDefined();
  }) 
  
  it('Should return passed through seed info', () => {
    const input: SeedPackageInput = {
      plantName :'Joe Seed',
      plantType: PlantType.VEGETABLE,
      gardenFamily: GardenFamily.BEANS,
      plantInfo: {
        plantFamily: PlantFamily.ALLIUMS
      },
      seedMerchant: {
        address: {
          street: '123 main st',
          city: 'seattle',
          state: 'wa',
        }
      }
    };

    const result = SeedPackageBuilder(input);
    expect(result.plantType).toBeDefined();
    expect(result.seedMerchant?.address).toBeDefined();
    expect(result.plantInfo).toBeDefined();
    expect(result.plantInfo.perennial).toBeDefined();
    expect(result.plantInfo.sunlight).toBeDefined();
    expect(result.seedMerchant?.address?.state).toBe('wa');
    expect(result.plantInfo.daysToGerminate).toBe(12);
    expect(result.plantInfo.daysToMaturity).toBe(60);
  })

  it('Should update date when modify seed package', () => {
    const input = {
      plantName: 'Joe Seed',
      plantType: PlantType.VEGETABLE,
      gardenFamily: GardenFamily.BEANS,
      plantInfo: {
        plantName: 'frank'
      }
    }
    const result = SeedPackageUpdate(input);
    expect(result).toBeDefined();
    expect(result.dateLastModified).toBeInstanceOf(Date);
  })
});
