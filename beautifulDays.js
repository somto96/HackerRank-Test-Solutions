const beautifulDays = (i, j, k) => {

   
    var count = 0;
    for (i = i; i <= j; i++){
        let reversedNumber = parseInt(i.toString().split('').reverse().join(''));
        var diffbtwNumbers = i - reversedNumber;
        var absNumbers = Math.abs(diffbtwNumbers);
        var beautifulNumbers = absNumbers % k;
        

        if (beautifulNumbers === 0){
            count ++;
        }
       
    }
    return count;
    

}

console.log(beautifulDays(20, 23, 6));