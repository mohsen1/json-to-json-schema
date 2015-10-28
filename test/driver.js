'use strict';

import {readFileSync, readdirSync} from 'fs';
import {join} from 'path';
import expect from './expect.js';

describe('end to end', ()=> {

  readdirSync(join(__dirname, 'input-output')).forEach(testCase=> {

    it(`preserves comments and styling for test case ${testCase}`, ()=> {

      const path = join(__dirname, 'input-output', testCase);
      const input = readFileSync(join(path, 'input.json')).toString();
      const output = readFileSync(join(path, 'output.json')).toString();

      expect(input, output);
    });
  });
});

