import * as cheerio from 'cheerio';
import fs from 'node:fs';

const html = fs.readFileSync('examples/demo2/test.html', 'utf8');
console.log(html);
