import { NextRequest } from 'next/server';
import RestConnector, { RestConnectorConfig } from '../../utils/RestConnector';

class HardinessZoneService extends RestConnector {
  constructor(req: NextRequest, config: RestConnectorConfig) {
    super(config);
  }

  public getZoneByZipcode(zip: string) {
    return this.get(`zipcodes/${zip}`);
  }
}

export default HardinessZoneService;
