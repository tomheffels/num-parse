// Parses string for number and returns it as an integer.
const numParse = (string) => {
  const noCommaString = string.replace(/,/g, '.')
  const firstNum = noCommaString.match(/\d/)
  const firstNumIndex = noCommaString.indexOf(firstNum)
  const croppedString = noCommaString.slice(firstNumIndex)
  const numFloat = firstNum && parseFloat(croppedString)
  const numMultiplier = croppedString.split(numFloat)[1][0] ? croppedString.split(numFloat)[1][0].toUpperCase() : null
  switch(numMultiplier) {
    case 'K':
      return numFloat * 1000
    case 'M':
      return numFloat * 1000000
    case 'B':
      return numFloat * 1000000000
    case 'T':
      return numFloat * 1000000000000
    default:
      return Math.round(numFloat)
  }
}

module.exports = numParse