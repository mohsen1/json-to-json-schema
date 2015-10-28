'use strict';

function convert (json, options = {}) {

  if (json === undefined) {
    return {};
  }

  // primitives
  if (typeof json === 'string') {

    // TODO: date format
    return {type: 'string'};
  }

  if (typeof json === 'boolean') {
    return {type: 'boolean'};
  }

  if (typeof json === 'number') {
    if (Number.isInteger(json)) {
      return {type: 'integer'};
    } else {
      return {type: 'number'};
    }
  }

  if (json === null) {
    return {type: 'null'};
  }

  if (Array.isArray(json)) {
    let schema = {type: 'array'};

    if (!json.length) {
      return schema;
    }

    // TODO: array items
  }

  let schema = {type: 'object'};

  if (!Object.keys(json).length) {
    return schema;
  }


}

export {convert};