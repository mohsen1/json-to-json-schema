'use strict';

// Regex used here are all from 
// http://code.tutsplus.com/tutorials/8-regular-expressions-you-should-know--net-6149 
var regex = {
  email : /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/,
  url   : /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/,
  ip    : /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/ 
};

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _lodashIsequal = require('lodash.isequal');

var _lodashIsequal2 = _interopRequireDefault(_lodashIsequal);

/*
 * Converts a JSON object to a JSON Schema
 * @param {any} json
 * @param {object} options
 * @returns {object} a json schema
*/
function convert(json) {
  var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

  if (typeof json === 'function') {
    throw new TypeError('Can not convert a function');
  }

  if (json === undefined) {
    return {};
  }

  // check for a URL, before testing against the type "string",
  // because every URL is also a string 
  if(regex.url.test(json)){
    return { type: 'url'};
  }

  if(regex.email.test(json)){
    return { type: 'email'};
  }

  if(regex.ip.test(json)){
    return { type: 'ip'};
  }

  // primitives
  if (typeof json === 'string') {

    // TODO: date format
    return { type: 'string' };
  }

  if (typeof json === 'boolean') {
    return { type: 'boolean' };
  }

  if (typeof json === 'number') {
    if (Number.isInteger(json)) {
      return { type: 'integer' };
    } else {
      return { type: 'number' };
    }
  }

  if (json === null) {
    return { type: 'null' };
  }

  if (Array.isArray(json)) {
    var _ret = (function () {
      var schema = { type: 'array' };

      if (!json.length) {
        schema.items = {};
        return {
          v: schema
        };
      }

      var schemas = json.map(convert);

      // if all schemas are the same use that schema for items
      if (schemas.every(function (s) {
        return (0, _lodashIsequal2['default'])(s, schemas[0]);
      })) {
        schema.items = schemas[0];

        // if there are multiple schemas use oneOf
      } else {
          schema.items = { oneOf: unique(schemas) };
        }

      return {
        v: schema
      };
    })();

    if (typeof _ret === 'object') return _ret.v;
  }

  var schema = { type: 'object' };

  if (!Object.keys(json).length) {
    return schema;
  }

  schema.properties = Object.keys(json).reduce(function (properties, key) {
    properties[key] = convert(json[key]);
    return properties;
  }, {});

  return schema;
}

/*
 * Removes duplicates from array using isEqual comparator
 * @param {array}
 * @return {array}
*/
function unique() {
  var arr = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];

  return arr.reduce(function (result, item) {

    // result does not contain item
    if (!result.some(function (i) {
      return (0, _lodashIsequal2['default'])(i, item);
    })) {
      result.push(item);
    }
    return result;
  }, []);
}

exports.convert = convert;
