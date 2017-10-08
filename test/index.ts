import { Test, run, test } from 'beater';
import * as assert from 'power-assert';
import { add } from '../src';
import { tests as runTests } from './run';

const tests1: Test[] = [
  test('add()', () => {
    assert(add(1, 2) === 3);
  })
].concat(runTests);

run(tests1).catch(() => process.exit(1));
