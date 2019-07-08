# Overview
Little tool I built to parse strings for numbers, including those that use abbreviation (for thousands, millions, etc.). Pass a string to the function and it returns the number as an integer. 

```javascript
const stringWithNumber = "I've got 99k problems, but a string ain't one." 

numParse(stringWithNumber)

// Output: 99000
```

## Functionality
* Finds the number in the provided string.
* Converts commas to periods (e.g. 1,23M => 1.23M).
* Converts thousands ('k'/'K'), millions ('m'/'M'), billions ('b'/'B') and trillions ('t'/'T').
* Returns the number from the string as an integer.

### Example strings
| String | Output |
| --- | --- |
| "123" | 123 |
| "123K foo bar" | 123000 |
| "foo 12.3m bar" | 12300000 |
| "foo bar 1,23B" | 1230000000 |
| "foo bar 0,123t." | 123000000000 |


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
