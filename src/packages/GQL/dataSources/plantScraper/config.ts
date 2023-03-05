import * as env from 'env-var';
import dotenv from 'dotenv';
dotenv.config();

import { mongoConnectorConfig } from '../../utils/MongoDBConnector';

const DATABASE_NAME = env.get('MONGO_GARDEN_DB_NAME').asString() || 'garden';
const COLLECTION_NAMES = env.get('MONGO_GARDEN_COLLECTIONS').asArray() || ['PLANT_INFO'];


const config: mongoConnectorConfig = {
  baseURL: env.get('MONGODB_BASE_URL').asUrlString(),
  databaseName: DATABASE_NAME,
  timeout: 500,
  headers: {},
  collections: COLLECTION_NAMES,
};

export default config;
