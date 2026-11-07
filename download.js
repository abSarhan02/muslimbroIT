const scrape = require('website-scraper');
const path = require('path');

scrape({
  urls: ['https://21b4e3f8.muslimbro.pages.dev'],
  directory: path.join(__dirname, 'muslimbro-site'),
  recursive: true,
  maxRecursiveDepth: 10,
  request: { headers: { 'User-Agent': 'Mozilla/5.0' } }
}).then(() => {
  console.log('Download completato!');
}).catch(err => {
  console.error('Errore:', err);
});
