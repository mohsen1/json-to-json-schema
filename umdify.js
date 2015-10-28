'use strict';

const fs = require('fs');
const umdify = require('libumd');

const src = fs.readFileSync('./dist/index.js').toString();

fs.writeFileSync('./dist/browser.js', umdify(src, {globalAlias: 'JSONToJSONSchema'}));
