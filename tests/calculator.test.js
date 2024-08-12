const calculator = require('../src/calculator')

test('The function subtracts two numbers', () => {
    expect(calculator.subtract(10,5)).toBe(5)
})

test('Divide by zero', () => {
    expect(calculator.divide(4,0)).toBe(Infinity)
})

test('The function divides two numbers', () => {
    expect(calculator.divide(4,2)).toBe(2)
})

test('The function subtracts two numners', () => {
    expect(calculator.multiply(2,2)).toBe(4)
})

test('The function adds two numbers', () => {
    expect(calculator.add(1,1)).toBe(2)
})