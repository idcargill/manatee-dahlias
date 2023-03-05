import GardenService from './gardenService';
import gardenResolvers from './gardenResolvers';
import { Request } from 'express';
import { loadFilesSync } from '@graphql-tools/load-files';
import * as path from 'path';
import config from './gardenConfig';

const typeDefs = loadFilesSync(path.join(__dirname, './schema/**/*.graphql'));

const dataSource: any = {
  typeDefs,
  resolvers: gardenResolvers,
  namespace: 'GARDEN',
  context: (req: Request) => ({
    get gardenService() {
      return new GardenService(req, config);
    },
  }),
};

export default dataSource;
