import { Test, run } from 'beater';
import { tests as runTests } from './run';

const tests1: Test[] = ([] as Test[]).concat(runTests);

run(tests1).catch(() => process.exit(1));
