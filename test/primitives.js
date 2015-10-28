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
    expect([], {type: 'array'});
  });

  describe('empty object', ()=> {
    expect({}, {type: 'object'});
  });
});