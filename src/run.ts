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

const p = (s: string): void => void process.stdout.write(s);

const run = (): void => {
  const parser = new (Parser as typeof Writable)();
  parser.on('complete', (results: Results) => {
    if (results.count > 0) p('\n');
    if (results.fail > 0) {
      p('\n');
      results.failures.forEach((result) => {
        const { diag, id, name } = result;
        p('  not ok ' + id + ' - ' + name + '\n');
        if (typeof diag === 'undefined' || diag === null) return;
        p('    ---\n');
        p('    ' + safeDump(diag).split('\n').join('\n    ') + '\n');
        p('    ...\n');
      });
      p('\n');
    }
    p(results.count + ' tests\n');
    p(results.pass + ' passed\n');
    if (!results.ok) {
      p(results.fail + ' failed\n');
      process.exit(1);
    }
  });
  parser.on('assert', (result: Result) => {
    p(result.ok ? '.' : '!');
  });
  process.stdin.pipe(parser);
};

export { run };
