const cipher = require('../src/caeserCipher')

test('Basic string is shifted', () => {
    expect(cipher('hello', 3)).toBe('khoor')
})

test('The shift will wrap', () => {
    expect(cipher('xyz', 3)).toBe('abc')
})

test('Handles case preservation', () => {
    expect(cipher('HeLLo', 3)).toBe('KhOOr')
})

test('Handles punctuation and spacing', () => {
    expect(cipher('Hello, World!', 3)).toBe('Khoor, Zruog!')
})