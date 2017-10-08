import { Test, run, test } from 'beater';
import * as assert from 'power-assert';
import { add } from '../src';

const tests1: Test[] = [
  test('add()', () => {
    assert(add(1, 2) === 3);
  })
];

run(tests1).catch(() => process.exit(1));
