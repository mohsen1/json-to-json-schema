# JSON to JSON Schema


[![Build Status](https://travis-ci.org/mohsen1/json-to-json-schema.svg?branch=master)](https://travis-ci.org/mohsen1/json-to-json-schema)

> JSON to JSON Schema convert a JSON to a JSON Schema describing that JSON

## Usage

```js
import {convert} from 'json-schmea-from-json';

const myJson = {name: 'string'};

const mySchema = convert(myJson);

console.log(mySchema); // => {type: 'object', properties: {name: {type: 'string'}}}
```

## Installation
Use npm or Bower to install this package

```
npm install --save json-to-json-schema
```
```
bower install --save json-to-json-schema
```
The browser module supports all UMD module systems. It exposes `JSONToJSONSchema` global object when there is no module system available.

## Development
To install dependencies

```
npm install
```

To run tests

```
npm test
```

To run tests continuously and watch for changes install [mocha](https://mochajs.org/) and run:

```
mocha --compilers js:babel/register -w
```

To make a new browser build run

```
npm run browserify
```

## License
[MIT](./LICENSE)