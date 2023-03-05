
import { SeedlingFromPackageBuilder } from '../Builders/seedlingBuilders';
import { CreatePlantInput } from '../models/plantModels';
import { mockSeedPackage } from './plantBuildersTest';

describe('Create Seedling from seed builder', () => {
  it('Is Defined', () => {
    expect(SeedlingFromPackageBuilder).toBeDefined();
  });

})