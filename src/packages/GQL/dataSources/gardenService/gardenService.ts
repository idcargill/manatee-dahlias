import { Request } from 'express';
import MongoDBConnector, {
  mongoConnectorConfig,
} from '../../utils/MongoDBConnector';
import { Plant, UpdatePlantPayload } from './models/plantModels';
import { Collection, ObjectId, InsertOneResult, UpdateResult } from 'mongodb';
import { SeedPackage, SeedPackageInput } from './models/seedsModels';
import {
  PlantBuilder,
  PlantFromSeedlingBuilder,
} from './Builders/plantBuilder';

import {
  SeedPackageBuilder,
  SeedPackageUpdate,
} from './Builders/seedPackageBuilder';
import { SeedlingFromPackageBuilder } from './Builders/seedlingBuilders';
import { Seedling } from './models/seedlingModels';

export const DEFAULT_LOCATION = {
  coordinates: [],
  polygon: [],
  area: [],
  width: 0,
  height: 0,
  locationDescription: 'Unknown',
};

export type CollectionType = {
  PLANT_COLLECTION: string;
  SEEDLING_COLLECTION: string;
  GARDEN_COLLECTION: string;
  SEED_COLLECTION: string;
};

export const COLLECTIONS: CollectionType = {
  PLANT_COLLECTION: 'plants',
  SEEDLING_COLLECTION: 'seedlings',
  GARDEN_COLLECTION: 'gardens',
  SEED_COLLECTION: 'seeds',
};

export enum CollectionNames {
  plants = 'plants',
  seedlings = 'seedlings',
  gardens = 'gardens',
  seeds = 'seeds',
}

class GardenService extends MongoDBConnector {
  private plantCollection: Collection;
  private seedCollection: Collection;
  private seedlingCollection: Collection;
  private gardenCollection: Collection;
  public collectionList: any;

  constructor(req: Request, config: mongoConnectorConfig) {
    super(req, config);
    this.plantCollection = this.client
      .db(this.dbName)
      .collection(COLLECTIONS.PLANT_COLLECTION);
    this.seedCollection = this.client
      .db(this.dbName)
      .collection(COLLECTIONS.SEED_COLLECTION);
    this.seedlingCollection = this.client
      .db(this.dbName)
      .collection(COLLECTIONS.SEEDLING_COLLECTION);
    this.gardenCollection = this.client
      .db(this.dbName)
      .collection(COLLECTIONS.GARDEN_COLLECTION);
  }

  public async addReport(id: ObjectId, collection: string, payload: any) {
    try {
      await this.connect();
      const updateReport = {
        $push: { reports: { _id: new ObjectId(), ...payload } },
      };
      const result = await this.client
        .db(this.dbName)
        .collection(collection)
        .findOneAndUpdate({ _id: new ObjectId(id) }, updateReport, {
          returnDocument: 'after',
        });
      if (result.ok === 1) {
        return result;
      }
    } catch (e) {
      console.log(e);
      throw new Error('Problems adding a report');
    } finally {
      await this.client.close();
    }
  }

  /* SEED COLLECTION */
  public async getAllSeedPackages(): Promise<SeedPackage[] | null> {
    console.log(this.getCollectionsMap());
    const results: any = await this.getEntireCollection(CollectionNames.seeds);
    return results;
  }

  public async addSeedPack(
    seedPackageInput: SeedPackageInput
  ): Promise<SeedPackage | null> {
    const seedPayload = SeedPackageBuilder(seedPackageInput);
    const result: SeedPackage = await this.insertOneItem(
      CollectionNames.seeds,
      seedPayload
    );
    if (result) {
      return result;
    }
    return null;
  }

  public async getSeedPackageById(id: ObjectId): Promise<SeedPackage> {
    const result: any = await this.getById(id, CollectionNames.seeds);
    return result;
  }

  public async updateSeedPack(
    id: ObjectId,
    updateInfo: SeedPackageInput
  ): Promise<SeedPackage | null> {
    const seedPack = SeedPackageUpdate(updateInfo);
    const result: any = await this.updateOneItem(
      id,
      CollectionNames.seeds,
      seedPack
    );
    return result;
  }

  public async deleteSeedPack(id: ObjectId): Promise<number | null> {
    const result: any = await this.deleteOneItem(id, CollectionNames.seeds);
    return result.deletedCount;
  }

  // SEEDLINGS
  public async getSeedlingByID(seedlingID: ObjectId): Promise<Seedling | null> {
    const result: any = await this.getById(
      seedlingID,
      CollectionNames.seedlings
    );
    return result;
  }

  public async getAllSeedlings() {
    const result = await this.getEntireCollection(CollectionNames.seedlings);
    return result;
  }
  public async updateSeedling(
    seedlingID: ObjectId,
    seedlingPayload: any
  ): Promise<Seedling | null> {
    const response: Seedling = await this.updateOneItem(
      seedlingID,
      CollectionNames.seedlings,
      seedlingPayload
    );
    return response;
  }

  public async deleteSeedling(seedlingID: ObjectId) {
    const result = await this.deleteOneItem(
      seedlingID,
      CollectionNames.seedlings
    );
    return result;
  }

  public async createSeedlingWithoutSeedInfo(
    createSeedlingInput: any
  ): Promise<Seedling | null> {
    // Build Seedling (purchased/no seed info)
    const newSeedling = {
      dateStarted: new Date(),
      dateLastModified: new Date(),
      startedFromSeed: false,
      ...createSeedlingInput,
    };
    const result: Seedling = await this.insertOneItem(
      CollectionNames.seedlings,
      newSeedling
    );
    return result;
  }

  public async createSeedlingFromSeed(
    seedID: ObjectId,
    seedlingPayload: any
  ): Promise<CreateSeedlingFromSeedPayload | null> {
    try {
      await this.connect();
      const seedResponse = await this.seedCollection
        .find({ _id: new ObjectId(seedID) })
        .toArray();
      const seedPackage = seedResponse[0] as SeedPackage;
      const newSeedling: CreateSeedlingFromSeedPayload =
        SeedlingFromPackageBuilder(seedPackage, seedlingPayload);
      const response: InsertOneResult = await this.seedlingCollection.insertOne(
        newSeedling
      );
      if (response.insertedId) {
        return newSeedling;
      }
    } catch (e) {
      console.log(e);
    }
    await this.close();
    return null;
  }

  // PLANTS
  public async getPlantByID(id: ObjectId): Promise<Plant | null> {
    const result: any = await this.getById(id, CollectionNames.plants);
    return result;
  }

  public async getAllPlants(): Promise<Plant[] | null> {
    const result: any = await this.getEntireCollection(CollectionNames.plants);
    return result;
  }

  public async updatePlant(
    plantID: ObjectId,
    updatePlantPayload: UpdatePlantPayload
  ) {
    const updatedPlant: any = await this.updateOneItem(
      plantID,
      CollectionNames.plants,
      updatePlantPayload
    );
    return updatedPlant;
  }

  async deletePlant(id: ObjectId): Promise<number> {
    const result: any = await this.deleteOneItem(id, CollectionNames.plants);
    return result.deletedCount;
  }

  public async removePlantFromGarden(plantID: ObjectId): Promise<string> {
    await this.connect();
    const result: UpdateResult = await this.plantCollection.updateOne(
      { _id: new ObjectId(plantID) },
      { $set: { isPlanted: false } }
    );
    await this.close();
    if (result.matchedCount === 1 && result.modifiedCount === 1) {
      return 'Plant removed from garden';
    }
    return 'No records matched';
  }

  public async createPlant(newPlantInput: any) {
    const plant = PlantBuilder(newPlantInput);
    const newPlant = await this.insertOneItem(CollectionNames.plants, plant);
    return newPlant;
  }

  public async createPlantFromSeedling(
    seedlingID: ObjectId,
    createPlantInput: any
  ): Promise<Plant | null> {
    try {
      await this.connect();
      const seedling: any = await this.seedlingCollection.findOne({
        _id: new ObjectId(seedlingID),
      });
      const plantPayload = PlantFromSeedlingBuilder(
        seedling as Seedling,
        createPlantInput
      );
      const response = await this.plantCollection.insertOne(plantPayload);

      if (response.acknowledged && !!response.insertedId) {
        const newPlantData: any = await this.plantCollection.findOne({
          _id: new ObjectId(response.insertedId),
        });
        const newPlant: Plant = newPlantData as Plant;
        return newPlant;
      }
    } catch (e) {
      console.log(e);
    } finally {
      await this.close();
    }
    return null;
  }
}

export default GardenService;
