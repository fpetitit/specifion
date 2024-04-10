import * as cheerio from 'cheerio';
import fs from 'node:fs';

const add = (a, b) => a + b;

const html = fs.readFileSync('examples/demo2/test.html', 'utf8');
console.log(html);

const $ = cheerio.load(html);

const testCall = $('[data-specifionCall]').text();
console.log('function called : ', testCall);
const testArgs = $('[data-specifionSet]').text();
for(let i = 0; i < testArgs.length; i++){
  console.log(`parameter ${i} : `, testArgs[i]);
}

const textExpected = $('[data-textExpected]').text();
console.log('expected : ', textExpected);

const result = (new Function(['arg1'], testCall))(testArgs);
console.log('result : ', result);
