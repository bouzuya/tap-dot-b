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
$ node test | $(npm bin)/tap-dot-b
...!.

---
name: Error
message: message
stack: |2
  Error:   message
...

5 tests
4 passed
1 failed
```

## Badges

[![npm version][npm-badge-url]][npm-url]
[![Travis CI][travisci-badge-url]][travisci-url]

[npm-badge-url]: https://badge.fury.io/js/tap-dot-b.svg
[npm-url]: https://www.npmjs.com/package/tap-dot-b
[travisci-badge-url]: https://travis-ci.org/bouzuya/tap-dot-b.svg?branch=master
[travisci-url]: https://travis-ci.org/bouzuya/tap-dot-b

## License

[MIT](LICENSE)

## Author

[bouzuya][user] &lt;[m@bouzuya.net][email]&gt; ([http://bouzuya.net][url])

[user]: https://github.com/bouzuya
[email]: mailto:m@bouzuya.net
[url]: http://bouzuya.net
