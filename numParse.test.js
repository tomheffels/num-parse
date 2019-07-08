const numParse = require('./numParse')

// numParse Unit Tests

test('String with number "1.23k" (before text) should return 1230', () => {
  expect(numParse("1.23k people")).toBe(1230)
})

test('String with number "123M" (after text) should return 123000000', () => {
  expect(numParse("more than 123M")).toBe(123000000)
})

test('String with number "1,23b" (wrapped by text) should return 1230000000', () => {
  expect(numParse("more than 1,23b people")).toBe(1230000000)
})

test('String with number "1.23T" (no text) should return 1230000000000', () => {
  expect(numParse("1.23T")).toBe(1230000000000)
})

test('String with number "1.234" (no text) should return 1', () => {
  expect(numParse("1.234")).toBe(1)
})

test('String with number "1.234,56" (no text) should return 1', () => {
  expect(numParse("1.234,56")).toBe(1234)
})
