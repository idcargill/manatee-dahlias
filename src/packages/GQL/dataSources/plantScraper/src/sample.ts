import {  buildSearchUrl, fetchHTML, getPlantPageUrl, getPlantTableData} from './index';
import * as fs from 'fs';
import Path from 'path';
import { data } from 'cheerio/lib/api/attributes';
import { Cheerio, CheerioAPI, load } from 'cheerio';
import { CheckPrimeOptions } from 'crypto';

// https://garden.org/plants/search/text/?q=seychelle

const loadHtml = async () => {
    const pageHtml = await fetchHTML('http://www.garden.org/plants/search/text/?q=seychelle');
    const filePath = Path.join(__dirname, '../__tests__/seychelle.html');
    const data = pageHtml?.html();
    if (data) {
        fs.writeFile(filePath, data, (err) => {
            if (err) {
                throw new Error('Write Problems');
            }
        });
    }
}
// loadHtml();

const readHtml = async () => {
    // const pageHtml = await fetch('../__tests__/seychelle.html');
    await fs.readFile(Path.join(__dirname, '../__tests__/seychelle.html'), (err, data) => {
        if (err) {
            console.log(err)
        }
        const $ = load(data);
        const parsed = $('li').each((i, el) => {
            console.log(el);
        });
        
        console.log(parsed);
    });
};

const main = async () => {
    // Cheerio api
    readHtml();
};

main();
