'use strict';

import {convert} from '../src/index.js';
import expect from './expect';

describe('primitives', ()=> {

  describe('string', ()=> {
    expect('a string', {type: 'string'});
  });

  describe('boolean', ()=> {
    expect(true, {type: 'boolean'});
  });

});