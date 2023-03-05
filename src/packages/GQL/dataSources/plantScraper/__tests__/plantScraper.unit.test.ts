import axios from 'axios';
import dotenv from 'dotenv';
import env from 'env-var';
dotenv.config();

import { 
  getPlantTableData, 
  fetchHTML, 
  getPlantPageUrl,
  getPlantByTextSearch,
  PlantInfoRaw,
  buildSearchUrl,
} from '../src';
import { mockPlantSearchPage } from '../src/__mocks__/mockPlantSearchPage';
import { mockPlantDataHtml } from '../src/__mocks__/mockPlantDataHtml'

jest.mock('axios');

const mockedAxios = axios as jest.Mocked<typeof axios>;

const PLANT_SEARCH_URL_BASE = env.get('PLANT_SEARCH_URL_BASE').asString()
const PLANT_DATA_URL:string = 'https://garden.org/plants/view/75202/Leeks-Allium-ampeloprasum';
const SEARCH_URL='https://garden.org/plants/search/text/?q=leeks';
const PLANT_HREF:string = '/plants/view/75202/Leeks-Allium-ampeloprasum/'


const GARDEN_DB_BASE_URL = 'https://garden.org/';
const GARDEN_DB_PLANT_VIEW_URL = 'http://garden.org/plants/view/';
const GARDEN_DB_SEARCH_URL = 'https://garden.org/plants/search/text/';

const mockAxiosPlantSearchPage = {
  data: mockPlantSearchPage,
}

const mockAxiosPlantDataPage = {
  data: mockPlantDataHtml,
}

describe('fetchHTML()', () => {
  it('should return cheerio api obj', async () => {
    const mockUrl = 'http://garden.org/plants/view/75202/Leeks-Allium-ampeloprasum';
    mockedAxios.get.mockResolvedValue(mockAxiosPlantSearchPage);

    const result = await fetchHTML(mockUrl);

    expect(result).toBeDefined();
    expect(result?.text).toBeDefined();
    expect(result?.html).toBeDefined();
  });

  it('Should return null for a bad url', async () => {
    mockedAxios.get.mockResolvedValue(undefined);
    const result = await fetchHTML('test');
    expect(result).toBeNull()
  });
});

describe('getPlantPageUrl()', () => {
  it('should return URL NOT FOUND', async () => {
    const noUrlHtml = `<!DOCTYPE html>
    <html>
      <body>
      <body>
    </html>
    `;

    mockedAxios.get.mockResolvedValue({data: noUrlHtml});
    const html = await fetchHTML('some url');
    if (html) {
      const result = await getPlantPageUrl(html);
      expect(result).toBeDefined();
      expect(result).toBe('URL NOT FOUND');
    }
  })

  it('should extract href from first table row', async () => {

    const htmlMock = `<!DOCKTYPE html>
    <html>
    <body>
      <table>
        <tr>
          <td>
            <a href=www.CORRECT.com>Plant<a/>
          </td>
          <td>
            <a href=WRONG<a/>
          </td>
        </tr>
      </table>
    </body>
    </html>
    `

    mockedAxios.get.mockResolvedValue({data: htmlMock});
    const html = await fetchHTML('plant search url');
    if (html) {
      const result = await getPlantPageUrl(html);
      expect(result).toBeDefined();
      expect(result).toBe('www.CORRECT.com');
    }
  });

  it('should extract the leeks url from searched html', async () => {
    mockedAxios.get.mockResolvedValue(mockAxiosPlantSearchPage);
    const html = await fetchHTML('some url');
    if (html) {
      const result = await getPlantPageUrl(html);
      expect(result).toBe('/plants/view/75202/Leeks-Allium-ampeloprasum/');
    }
  })

  it('should throw error if plant url is not found', async () => {
    mockedAxios.get.mockResolvedValue('kitten');
    const html = await fetchHTML('');
    if (html) {
      expect( () => getPlantPageUrl(html)).rejects.toThrow();
    }
  });
});

describe.only('getPlantTableData() from Cheerio obj', () => {
  it('should return an PossiblePlantData object', async () => {

    mockedAxios.get.mockResolvedValueOnce(mockAxiosPlantDataPage);
    const html = await fetchHTML('plant data page');
    if (html) {
      const result = await getPlantTableData(html);
      console.log(result);
      expect(result).toBeInstanceOf(Object);
      expect(result.skin_color).toBeDefined();
      expect(result.plant_height).toBeDefined()
    }
  });
})

describe('Build plant search URL', () => {
  it('should return a new url', () => {
    const search = 'Dancing wiTH smUrfs'
    const url = buildSearchUrl(search);
    if (url) {
      expect(url).toBe(`${PLANT_SEARCH_URL_BASE}?q=dancing+with+smurfs`)
    }
  });

  it('should return correct url', () => {
    const url = buildSearchUrl('KITTen');
    expect(url).toBe('https://garden.org/plants/search/text/?q=kitten');
  });
});



describe('getPlantByTextSearch()', () => {
  it('should return stuff', async () => {
    const search = 'leeks';
    mockedAxios.get.mockResolvedValueOnce(mockAxiosPlantSearchPage);
    mockedAxios.get.mockResolvedValueOnce(mockAxiosPlantDataPage);

    const result = await getPlantByTextSearch(search);

    expect(result).toBeDefined();
  });
});



