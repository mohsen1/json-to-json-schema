'use strict';

import {convert} from '../src/index.js';
import expect from './expect';

describe('primitives', ()=> {

  describe('undefined', ()=> {
    expect(undefined, {});
  });

  describe('string', ()=> {
    expect('', {type: 'string'});
    expect('a string', {type: 'string'});
  });

  describe('boolean', ()=> {
    expect(true, {type: 'boolean'});
  });

  describe('integer number', ()=> {
    expect(100, {type: 'integer'});
    expect(0, {type: 'integer'});
  });

  describe('float number', ()=> {
    expect(100.0001, {type: 'number'});
  });

  describe('infinity number', ()=> {
    expect(Infinity, {type: 'number'});
  });

  describe('empty array', ()=> {
    expect([], {type: 'array', items: {}});
  });

  describe('empty object', ()=> {
    expect({}, {type: 'object'});
  });

  describe('array of strings', ()=> {
    expect(['a', 'b', 'c'], {
      type: 'array',
      items: {
        type: 'string'
      }
    });
  });

  describe('array of integers', ()=> {
    expect([4, 3, 1], {
      type: 'array',
      items: {
        type: 'integer'
      }
    });
  });

  describe('array of strings and integers', ()=> {
    expect([1, 2, '3', '4'], {
      type: 'array',
      items: {
        oneOf: [
          {type: 'integer'},
          {type: 'string'}
        ]
      }
    });
  });

  describe('array of strings and integers and booleans', ()=> {
    expect([1, 2, '3', '4', true, false], {
      type: 'array',
      items: {
        oneOf: [
          {type: 'integer'},
          {type: 'string'},
          {type: 'boolean'}
        ]
      }
    });
  });

  describe('object of a simple primitive', ()=> {
    expect({a: 1}, {
      type: 'object',
      properties: {
        a: {type: 'integer'}
      }
    });
  });

  describe('object of multiple simple primitives', ()=> {
    expect({a: 1, b: ''}, {
      type: 'object',
      properties: {
        a: {type: 'integer'},
        b: {type: 'string'}
      }
    });
  });
});