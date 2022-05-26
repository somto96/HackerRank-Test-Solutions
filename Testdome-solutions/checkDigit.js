function createCheckDigit(membershipId) {
  // Write the code that goes here.
  let stringArr = membershipId.split("");
  console.log("stringArr", stringArr);
  let newArr = []
  for(i=0; i<stringArr.length; i++){
    newArr.push(Number(stringArr[i]));
  }
  console.log("newArr", newArr);
  let sum = newArr.reduce((a, b) => a + b, 0);
  console.log("sum", sum);
  
  if (sum > 9 ){
    let stringResult = sum.toString();
        let splitResult=stringResult.split("");
        let finalSum = Number(splitResult[0]) + Number(splitResult[1])
        console.log("finalSum", finalSum);
        return finalSum;
  }
  
  return sum;
 
}

console.log(createCheckDigit("55555"));