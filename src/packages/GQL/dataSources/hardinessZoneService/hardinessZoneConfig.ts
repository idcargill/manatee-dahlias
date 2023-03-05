import { RestConnectorConfig } from '../../utils/RestConnector';

export const config: RestConnectorConfig = {
  baseUrl: process.env.HARDINESS_ZONE_BASE_URL || '',
  timeout: 500,
  headers: {
    'X-RapidAPI-Host': 'plant-hardiness-zone.p.rapidapi.com',
    'X-RapidAPI-Key': process.env.HARDINESS_ZONE_API_KEY || '',
  },
};
