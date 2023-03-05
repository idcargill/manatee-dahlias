import { mongoConnectorConfig } from '../../utils/MongoDBConnector';
const DATABASE_NAME = process.env.MONGO_GARDEN_DB_NAME || 'garden';
const COLLECTION_NAMES = ['SEEDS', 'SEEDLINGS', 'PLANTS', 'GARDENS'];

const config: mongoConnectorConfig = {
  baseURL: process.env.MONGODB_BASE_URL,
  databaseName: DATABASE_NAME,
  timeout: 500,
  headers: {},
  collections: COLLECTION_NAMES,
};

export default config;
