import { MongoClient, ObjectId } from 'mongodb';
import { NextApiRequest } from 'next';

/*
A MongoDB connector for javascript and GQL
Config provides: 
  baseUrl
  databaseName: name of the database that houses collections
  timeout:
  headers: {}
  collections: an array of strings for collection names

  Base methods typically take a mongoID and Collection name
*/
export interface mongoConnectorConfig {
  baseUrl: string;
  databaseName: string;
  timeout: number;
  headers: {};
  collections: string[];
}

class MongoDBConnector {
  public client: MongoClient;
  public dbName: string;
  private baseURL: string;
  private collections: string[];
  private collectionsMap: string[];

  constructor(req: NextApiRequest, config: mongoConnectorConfig) {
    this.baseURL = config.baseUrl;
    this.dbName = config.databaseName;
    this.client = new MongoClient(this.baseURL);
    this.collections = config.collections;
    this.collectionsMap = this.getCollectionNameMap(config.collections);
  }

  public async getById(id: ObjectId, collection: string) {
    try {
      await this.connect();
      const collectionName = this.collectionsMap[collection];
      if (collectionName) {
        const col = collectionName.toLowerCase() as string;
        const response = await this.client
          .db(this.dbName)
          .collection(col)
          .findOne({ _id: new ObjectId(id) });
        if (response) {
          return response;
        }
      }
      return null;
    } catch (e) {
      console.log(e);
    } finally {
      await this.close();
    }
    return null;
  }

  public async getEntireCollection(collection: string) {
    console.log('getting everyone');
    console.log(this.baseURL, this.client);
    try {
      await this.connect();
      const collectionName = this.getCollectionName(collection);
      console.log(collectionName);
      if (collectionName) {
        const col = collectionName.toLowerCase();
        const response = await this.client
          .db(this.dbName)
          .collection(col)
          .find()
          .toArray();
        console.log(col, response);
        if (response) {
          return response;
        }
        return null;
      }
    } catch (e) {
      console.log(e);
    } finally {
      await this.close();
    }
  }

  public async deleteOneItem(id: ObjectId, collection: string) {
    try {
      await this.connect();
      const collectionName = this.getCollectionName(collection) as string;
      if (collectionName) {
        const col = collectionName.toLowerCase() as string;
        const response = await this.client
          .db(this.dbName)
          .collection(col)
          .deleteOne({ _id: new ObjectId(id) });
        if (response) {
          return response;
        }
      }
      return null;
    } catch (e) {
      console.log(e);
    } finally {
      await this.close();
    }
    return null;
  }

  public async updateOneItem(
    id: ObjectId,
    collection: string,
    payload: any
  ): Promise<any | null> {
    try {
      await this.connect();
      const col = this.getCollectionName(collection) as string;
      const response = await this.client
        .db(this.dbName)
        .collection(col)
        .findOneAndUpdate(
          { _id: new ObjectId(id) },
          { $set: payload },
          { returnDocument: 'after' }
        );
      if (response.ok === 1) {
        return response.value;
      }
    } catch (e) {
      console.log(e);
      return null;
    } finally {
      await this.close();
    }
    return null;
  }

  /*
  @param collection name: string
  @param payload: object to be inserted
  @return Newly inserted item or null
*/
  public async insertOneItem(
    collection: string,
    payload: any
  ): Promise<any | null> {
    try {
      await this.connect();
      const col = this.getCollectionName(collection) as string;
      const result = await this.client
        .db(this.dbName)
        .collection(col)
        .insertOne(payload);
      if (result?.acknowledged && result?.insertedId) {
        const insertedItem = await this.client
          .db(this.dbName)
          .collection(col)
          .findOne({ _id: new ObjectId(result.insertedId) });
        return insertedItem;
      }
    } catch (e) {
      console.log(e);
      return null;
    } finally {
      await this.close();
    }
  }

  public connect = async () => {
    await this.client.connect();
  };

  public close = async () => {
    await this.client.close();
  };

  public getCollectionsMap = () => this.collectionsMap;

  private getCollectionName(collectionName: string): string {
    return this.collectionsMap[collectionName.toLowerCase()];
  }

  private getCollectionNameMap(collections: any): any {
    const collectionNameMap = collections.reduce(
      (accu: any, value: string, idx: number) => {
        const key = value.toLowerCase();
        accu[key] = value.toLowerCase();
        return accu;
      },
      {}
    );
    return collectionNameMap;
  }
}

export default MongoDBConnector;
