import * as path from 'path';
import { loadFilesSync } from "@graphql-tools/load-files";
import PlantScraperService from './plantScraperService';
import config from './config';
import { Request } from 'express';

const typeDefs = loadFilesSync(path.join(__dirname, './schema/**/*.graphql'));

const resolvers = {
  Query: {
    plantTextSearch(_:any, args: any, context: any) {
      const { text } = args;
      const service = context.PLANT_SCRAPER.plantScraperService(text);
      console.log(service);
    }
  }
}

const dataSource: any = {
  typeDefs,
  resolvers,
  namespace: 'PLANT_SCRAPER',
  context: (req: Request) => ({
    get plantScraperService() {
      return new PlantScraperService(req, config);
    }
  })
}

export default dataSource;
