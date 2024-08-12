const {findAverage, findMin, findMax, findLength, analyzeArray} = require('../src/analyzeArray')

test('Returns correct average', () => {
    expect(findAverage([1,2,3])).toBe(2)
})

test('Returns the correct min', () => {
    expect(findMin([2,1,3])).toBe(1)
})

test('Retruns the correct max', () => {
    expect(findMax([3,4,2,1])).toBe(4)
})

test('Returns the correct length', () => {
    expect(findLength([1,2,3])).toBe(3)
})

test('Returns object with correct average, min, max, length', () => {
    const expectation = 
    {
        average: 4,
        min: 1,
        max: 8,
        length: 6
    } 
    expect(analyzeArray([1,8,3,4,2,6])).toStrictEqual(expectation)
})