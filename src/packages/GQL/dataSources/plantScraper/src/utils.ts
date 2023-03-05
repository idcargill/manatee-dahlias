import axios from 'axios';
import { CheerioAPI } from "cheerio";
import { load } from 'cheerio';
import { PlantInfoRaw } from './models/PlantInfoRaw';
import { PossiblePlantData, PossiblePlantDataKeys, PossibleRawPlantData } from './models/PossibleScrapedPlantData';
import env from 'env-var';
import dotenv from 'dotenv';
dotenv.config();

const PLANT_SEARCH_URL_BASE = env.get('PLANT_SEARCH_URL_BASE').asString();
const PLANT_VIEW_URL = env.get('PLANT_VIEW_URL').asString();

// Returns CheerioAPI object with html data
export const fetchHTML = async (url: string): Promise<CheerioAPI| null> => {
  try {
    const pageData = await axios.get(url);
    return load(pageData.data);
  } catch(e) {
    console.log('Error getting page HTML');
    return null;
  }
};

// Returns the plant details page url
export const getPlantPageUrl = async ($: CheerioAPI): Promise<string | Error> => {
  let plantDataUrl: string | undefined;

  if ($ !== null && $('td > a')) {
    plantDataUrl = $('td > a').attr('href');
  }

  if (typeof plantDataUrl === 'string') {
    return plantDataUrl
  }
  return 'URL NOT FOUND';
}

// Strip plant data from HTML Table
// Returns json of plantInfo data
export const getPlantTableData = async ($: CheerioAPI): Promise<PossiblePlantData> => {


  let data = {} as PossibleRawPlantData;

  if ($) {
    $('tr').each((i, el) => {
      let row = $(el).text().split(':');
      const key = row[0]?.replace('\n', '').trim().replaceAll(' ', '_').toLowerCase();
      const value = row[1]?.replace('\n', '').trim().replace('\n', ',');

      if (Object.keys(data).includes(key)) {
        console.log(key);
        // data[key] = value;

      }
    });
  }
  return data as PossiblePlantData;
}

export const buildSearchUrl = (search:string): string | Error => { 
  if (!PLANT_SEARCH_URL_BASE) {
    throw new Error('PLANT_SEARCH_URL_BASE was not found')
  }
  
  const searchText = search.toLowerCase();
  const url = new URL(PLANT_SEARCH_URL_BASE);
 
  url.searchParams.set('q', searchText);
  return url.href;
}



export const getPlantByTextSearch = async (text: string) => {
  const searchUrl = buildSearchUrl(text);
  if (typeof searchUrl !== 'string') {
    return;
  }

  const plantSearchPage = await fetchHTML(searchUrl);
  if (plantSearchPage === null) {
    return;
  }
  const plantDataPath = await getPlantPageUrl(plantSearchPage);

  if (typeof plantDataPath !== 'string') {
    return;
  }

  const plantDataUrl = new URL(plantDataPath, PLANT_VIEW_URL)

  const plantDetailsHTML = await fetchHTML(plantDataUrl.href);

  if (plantDetailsHTML === null) {
    return;
  }

  const plantTableDetails = await getPlantTableData(plantDetailsHTML);
  return plantTableDetails;
};


export const PlantDataBuilder = () => {

}