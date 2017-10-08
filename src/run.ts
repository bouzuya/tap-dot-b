import { safeDump } from 'js-yaml';
import { Writable } from 'stream';
import * as Parser from 'tap-parser';

// tap-parser Result
interface Result {
  ok: boolean;
  id: number;
  name: string;
  diag?: any;
  todo?: boolean;
  skip?: boolean;
}

// tap-parser FinalPlan
interface Plan {
  start: number;
  end: number;
  skipAll: boolean;
  skipReason: string;
  comment: string;
}

// tap-parser FinalResults
interface Results {
  ok: boolean;
  count: number;
  pass: number;
  fail: number;
  bailout: boolean;
  todo: number;
  skip: number;
  plan: Plan;
  failures: Result[];
}

const run = (options?: { out?: NodeJS.WritableStream; }): void => {
  // setup helpers
  const out =
    typeof options === 'undefined' || typeof options.out === 'undefined'
      ? process.stdout
      : options.out;
  const p =
    (s: string): void => void out.write(s);
  const pln =
    (s?: string): void => p((typeof s === 'undefined' ? '' : s) + '\n');

  // setup parser
  const parser = new (Parser as typeof Writable)();
  parser.on('complete', (results: Results): void => {
    if (results.count > 0) pln();
    if (results.fail > 0) {
      pln();
      results.failures.forEach((result) => {
        const { diag, id, name } = result;
        pln('  not ok ' + id + ' - ' + name);
        if (typeof diag === 'undefined' || diag === null) return;
        pln('    ---');
        pln('    ' + safeDump(diag).split('\n').join('\n    '));
        pln('    ...');
      });
      pln();
    }
    pln(results.count + ' tests');
    pln(results.pass + ' passed');
    if (!results.ok) {
      pln(results.fail + ' failed');
      process.exit(1);
    }
  });
  parser.on('assert', (result: Result): void => p(result.ok ? '.' : '!'));

  // pipe to parser
  process.stdin.pipe(parser);
};

export { run };
