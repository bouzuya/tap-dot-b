# tap-dot-b

A TAP reporter that formats with dots.

- `.` : Pass
- `!` : Fail

If you don't use YAML, you can use [scottcorgan/tap-dot][] (in v1.0.5) .

[scottcorgan/tap-dot]: https://github.com/scottcorgan/tap-dot

## Installation

```
$ npm install tap-dot-b
```

## Examples

```
$ node .tmp/es5/test/index.js | $(npm bin)/tap-dot-b
...!.

  not ok 1 - run()
    ---
    name: AssertionError
    message: |2
        # .tmp/es2015/test/run.js:8

        assert(typeof src_1.run !== 'function')
               |      |     |   |
               |      |     |   false
               |      |     #function#
               |      Object{run:#function#}
               "function"

    stack: |
      AssertionError:   # .tmp/es2015/test/run.js:8

        assert(typeof src_1.run !== 'function')
               |      |     |   |
               |      |     |   false
               |      |     #function#
               |      Object{run:#function#}
               "function"

          at Decorator._callFunc (/Users/bouzuya/.ghq/github.com/bouzuya/tap-dot-b/node_modules/empower-core/lib/decorator.js:110:20)
          at Decorator.concreteAssert (/Users/bouzuya/.ghq/github.com/bouzuya/tap-dot-b/node_modules/empower-core/lib/decorator.js:103:17)
          at decoratedAssert (/Users/bouzuya/.ghq/github.com/bouzuya/tap-dot-b/node_modules/empower-core/lib/decorate.js:49:30)
          at powerAssert (/Users/bouzuya/.ghq/github.com/bouzuya/tap-dot-b/node_modules/empower-core/index.js:63:32)
          at /Users/bouzuya/.ghq/github.com/bouzuya/tap-dot-b/.tmp/es5/test/run.js:12:5
          at Object.testFn [as fn] (/Users/bouzuya/.ghq/github.com/bouzuya/tap-dot-b/node_modules/beater/lib/test.js:8:36)
          at callTestFn (/Users/bouzuya/.ghq/github.com/bouzuya/tap-dot-b/node_modules/beater/lib/run.js:21:17)
          at /Users/bouzuya/.ghq/github.com/bouzuya/tap-dot-b/node_modules/beater/lib/run.js:38:20
          at process._tickCallback (internal/process/next_tick.js:109:7)
          at Module.runMain (module.js:606:11)

    ...

5 tests
4 passed
1 failed
```

## Badges

[![npm version][npm-badge-url]][npm-url]
[![Travis CI][travisci-badge-url]][travisci-url]

[npm-badge-url]: https://img.shields.io/npm/v/tap-dot-b.svg
[npm-url]: https://www.npmjs.com/package/tap-dot-b
[travisci-badge-url]: https://img.shields.io/travis/bouzuya/tap-dot-b.svg
[travisci-url]: https://travis-ci.org/bouzuya/tap-dot-b

## License

[MIT](LICENSE)

## Author

[bouzuya][user] &lt;[m@bouzuya.net][email]&gt; ([http://bouzuya.net][url])

[user]: https://github.com/bouzuya
[email]: mailto:m@bouzuya.net
[url]: http://bouzuya.net
