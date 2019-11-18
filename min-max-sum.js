const arr = [1, 2, 3, 4, 5];

const miniMaxSum = (arr) => {
    var minValues = Math.min(...arr);
    var maxValues = Math.max(...arr);

    // console.log(minValues);
    // console.log(maxValues);

    var maxIndex = arr.indexOf(maxValues);
    var minIndex = arr.indexOf(minValues);

    // console.log(maxIndex);
    // console.log(minIndex);

    var maxSum = 0;
    var minSum = 0;

    for (let i = 0; i < arr.length; i++){
        if (maxIndex !== i){
            minSum += arr[i];
            // console.log(maxSum)
        };
        
        if(minIndex !== i){
            maxSum += arr[i];
            // console.log(minSum)
        }
    }

    return `${minSum} ${maxSum}`;


}

console.log(miniMaxSum(arr));
