import { mongoConnectorConfig } from '../../utils/MongoDBConnector';
const DATABASE_NAME = process.env.MONGO_GARDEN_DB_NAME || 'garden';
const COLLECTION_NAMES = ['SEEDS', 'SEEDLINGS', 'PLANTS', 'GARDENS'];

const config: mongoConnectorConfig = {
  baseUrl: process.env.MONGODB_BASE_URL || 'localhost:27017',
  databaseName: DATABASE_NAME,
  timeout: 500,
  headers: {},
  collections: COLLECTION_NAMES,
};

export default config;
