const reverse = require('../src/reverse')

test('Multiple words in a string', () => {
    expect(reverse('hi there')).toBe('ereht ih')
})

test('One word in a string is reversed', () => {
    expect(reverse('hello')).toBe('olleh')
})