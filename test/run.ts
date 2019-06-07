import { Test, test } from 'beater';
import assert from 'power-assert';
import { run } from '../src';

const tests1: Test[] = [
  test('run()', () => {
    assert(typeof run === 'function');
  })
];

export { tests1 as tests };
