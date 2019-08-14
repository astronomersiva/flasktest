require('dotenv').config();

const fs = require('fs-extra');
const path = require('path');
const md = require('./config/markdown');
const critical = require('./config/extract-critical');
const rss = require('./config/rss');

let cacheDir = '.lego';
if (process.env.NETLIFY_BUILD_BASE) {
  cacheDir = path.join(process.env.NETLIFY_BUILD_BASE, 'cache', 'lego');
  fs.mkdirpSync(cacheDir);
}

module.exports = {
  name: 'siva.dev',
  url: 'https://siva.dev/',
  author: 'Sivasubramanyam A',
  skipDirsInPostUrls: true,
  inlineSource: true,
  server: {
    port: 1194,
    host: '0.0.0.0'
  },
  postCSSPlugins: [
    'precss',
    'postcss-nested'
  ],
  htmlMinifier: {
    minifyJS: {
      output: { quote_style: 3 }
    }
  },
  md,
  critical,
  rss,
  cacheDir
}
