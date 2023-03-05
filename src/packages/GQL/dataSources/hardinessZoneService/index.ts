import hardinessResolvers from './hardinessZoneResolver';
import { loadFilesSync } from '@graphql-tools/load-files';
import * as path from 'path';
import HardinessZoneService from './hardinessZoneService';
import { config } from './hardinessZoneConfig';
import { NextRequest } from 'next/server';

const typeDefs = loadFilesSync(path.join(__dirname, './schema/**/*.graphql'));

const dataSource: any = {
  typeDefs,
  resolvers: hardinessResolvers,
  namespace: 'ZONE',
  context: (req: NextRequest) => ({
    get getHardinessZone() {
      return new HardinessZoneService(req, config);
    },
  }),
};

export default dataSource;
