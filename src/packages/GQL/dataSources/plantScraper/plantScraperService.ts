import MongoDBConnector, { mongoConnectorConfig } from "../../utils/MongoDBConnector";
import { Request } from "express";
import { getPlantByTextSearch } from "./src";


class PlantScraperService extends MongoDBConnector {
  constructor(req: Request, config: mongoConnectorConfig) {
    super(req, config);
  }


  // TEST RUN 
  public plantInfoTextSearch = async (text:string) => {
    const result = await getPlantByTextSearch(text);
    console.log(result);
  }

}

export default PlantScraperService;
