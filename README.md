# strike-a-match

[![Build Status](https://travis-ci.org/jlVidal/strike-a-match.svg?branch=master)](https://travis-ci.org/jlVidal/strike-a-match)
[![version](https://img.shields.io/npm/v/strike-a-match.svg?style=flat-square)](http://npm.im/strike-a-match)
[![MIT License](https://img.shields.io/npm/l/strike-a-match.svg?style=flat-square)](http://opensource.org/licenses/MIT)

A very clever algorithm that compares two strings, using adjacent character pairs.


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

This library was just ported by [John Vidal](https://twitter.com/johnLvidal) to javascript, the algorithm is describe with details here: http://www.catalysoft.com/articles/StrikeAMatch.html
