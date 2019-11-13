var arr = [10, 20, 20, 10, 10, 30, 50, 10, 20]
// var arr = [10, 10 ,10]

// function sockMerchant (n, arr){

// }

const sockMerchant = (arr) => {
    // var n = arr.length;
    // var sortedArray = arr.sort();
    var sortedArray = arr.sort((a,b) => {
        return a-b;
    });
    // console.log(sortedArray);
    var counter = 0
    for (var i = 0; i<arr.length-1; i++){
        if(arr[i] === arr[i+1]){
            counter ++ ;

            i++;
        }
    }
    return counter;
}

console.log(sockMerchant(arr));