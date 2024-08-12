function analyzeArray(array) {
    return ({
        average: findAverage(array),
        min: findMin(array),
        max: findMax(array),
        length: findLength(array)
    })

}

function findAverage(array) {
    let sum = 0;
    array.forEach(num => {
        sum += num
    })

    return sum / array.length;
}

function findMin(array) {
    array = array.sort()
    return array[0]
}

function findMax(array) {
    array = array.sort();
    return array[array.length-1]
}

function findLength(array) {
    return array.length
}


module.exports = {findAverage, findMin, findMax, findLength, analyzeArray}