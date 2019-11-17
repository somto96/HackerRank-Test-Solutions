const arr = [-4, 3, -9, 0, 4, 1];

var positiveValues = [];
var negativeValues = [];
var zeroValues = [];

arr.forEach((element) => {
    if (element > 0) {
        return positiveValues.push(element);
    } else if (element < 0) {
        return negativeValues.push(element);
    } else {
        return zeroValues.push(element);
    }
})

var positiveRatio = positiveValues.length / arr.length;
var negativeRatio = negativeValues.length / arr.length;
var zeroRatio = zeroValues.length / arr.length;

console.log(positiveRatio.toFixed(6));
console.log(negativeRatio.toFixed(6));
console.log(zeroRatio.toFixed(6));
