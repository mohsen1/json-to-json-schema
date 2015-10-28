'use strict';

import {expect} from 'chai';
import {convert} from '../src/index.js';

export default function expecter(json, jsonSchema) {
  it('produces correct JSON Schema', ()=> {
    expect(convert(json)).to.deep.equal(jsonSchema);
  });
};
