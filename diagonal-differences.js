var arr = [[11,2,4], [4,5,6], [10,8,-12]];

const diagonalDifferences = (arr) => {
    var d0 = 0;
    var d1 = 0;
    var n = arr.length;

    for(i = 0; i<n; i++){
       d0 += arr[i][i];
       d1 += arr[i].reverse()[i]
    //    console.log(d0);
    //    console.log(d1);
    }
    return Math.abs(d0 - d1);
}

console.log(diagonalDifferences(arr));