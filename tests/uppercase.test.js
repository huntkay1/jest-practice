const uppercase = require('../src/uppercase');

test('First letter is uppercase', () => {
    expect(uppercase('uppercase')).toBe('Uppercase')
})
