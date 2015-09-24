# strike-a-match

[![Build Status](https://travis-ci.org/jlVidal/strike-a-match.svg?branch=master)](https://travis-ci.org/jlVidal/strike-a-match)
[![version](https://img.shields.io/npm/v/strike-a-match.svg?style=flat-square)](http://npm.im/strike-a-match)
[![MIT License](https://img.shields.io/npm/l/strike-a-match.svg?style=flat-square)](http://opensource.org/licenses/MIT)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg?style=flat-square)](https://github.com/semantic-release/semantic-release)

A very clever algorithm that compares adjacent character pairs.


## Installation

This package is distributed via npm:

```
npm install strike-a-match
```

## Usage

```javascript
var comparison = require('strike-a-match');
var result = comparison.compareStrings("Healed", "Sealed");
console.log(result); // 0.8
```

## Other

Although this library was ported by [John Vidal](https://twitter.com/johnLvidal) to javascript, the algorithm is describe with details here: http://www.catalysoft.com/articles/StrikeAMatch.html
