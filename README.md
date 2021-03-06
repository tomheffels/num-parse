# Overview
Little tool I built to parse strings for numbers, including those that use abbreviation (for thousands, millions, etc.). Pass a string to the function and it returns the number as an integer. 

```javascript
const stringWithNumber = "I've got 99k problems, but a string ain't one." 

numParse(stringWithNumber)

// Output: 99000
```

## Functionality
* Finds the number in the provided string.
* Converts commas to decimals (e.g. 1,23M => 1.23M).
* Converts thousands ('k'/'K'), millions ('m'/'M'), billions ('b'/'B') and trillions ('t'/'T').
* Returns the number from the string as an integer.

### Example strings
| String | Output |
| --- | --- |
| "1.23" | 1 |
| "123" | 123 |
| "123K foo bar" | 123000 |
| "foo 12.3m bar" | 12300000 |
| "foo bar 1,23B" | 1230000000 |
| "foo bar 0,123t." | 123000000000 |
| ~~"1.234,56"~~ | 1 *(expected 1234)** |

`*` = As of yet it is not possible to convert numbers that contain both a comma and a decimal point. Currently trying to wrap my head around this, if anyone has suggestions/solutions to solve this problem feel free to get in touch or add a pull request. 


## How to use
1) Clone or download this repository.
2) Copy the numParse.js file to your project directory.
3) Import the function in the file you want to use it in, you can name the function however you like when importing it.
4) Change the import path according to your project's file structure. 
5) Call the function, passing the string you want to parse as an argument. 

### ES5 import
```javascript
const numParse = require('./numParse')
```

### ES6 import
```javascript
import numParse from './numParse'
```

## Updates

### Testing
This project now also contains unit tests (Jest). To run the tests run `npm test` in your terminal from the project directory.*

`*` = Make sure you run `npm install` first to install dependencies.
