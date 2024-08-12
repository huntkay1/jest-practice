function caeserCipher(string, shift) {
    const capitalLetters = [];
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    const splitString = string.split('');
    let cipherString = '';

    for( var i=0; i < splitString.length; i++) {
        let letter = splitString[i];

        //if letter is uppercase, save it's index and make it lowercase
        if (letter == letter.toUpperCase()) {
            capitalLetters.push(i);
            letter = letter.toLowerCase();
        }

        let index = alphabet.indexOf(letter);
        let newLetter = alphabet[index + shift];

        //allows for wrapping from z to a
        let distanceFromEndIncludingCurrentLetter = 26 - index;
        if (distanceFromEndIncludingCurrentLetter <= shift) {
            index = (distanceFromEndIncludingCurrentLetter - shift);
            if (index !== 0) {index = index * -1};
            newLetter = alphabet[index]
        }

        cipherString += newLetter;
    }

    //if capital letters existed in original string, reapply capital letters
    if (capitalLetters != []) {
        cipherString = capitalizeLetters(cipherString, capitalLetters)
    }

    console.log(cipherString)
    return cipherString
}

function capitalizeLetters(cipherString, capitalLetters) {
    let cipherStringLetters = cipherString.split('');
    capitalLetters.forEach(index => {
        cipherStringLetters[index] = cipherStringLetters[index].toUpperCase();
    })

    return cipherStringLetters.join('');

}

caeserCipher('HeLLo', 3)
module.exports = caeserCipher