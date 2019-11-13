var s = "UDDDUDUU"

// var sArr = (typeof s === "string") ? s.split('') : s;
// console.log(sArr);

const countingValleys = (n, s) => {
    // setting the constraints
    const min = 2;
    const max = 1000000;
    let valleys = 0;
    let isInValley = false;
    // String 2 array
    s = (typeof s === "string") ? s.split('') : s;

/**
 *  Check if s meets the requirements 
 * and n matches the sames number of values of the path s.
 */
    if (s.length >= min &&
        s.length <= max &&
        n === parseInt(n, 0) &&
        n >= min &&
        n <= max &&
        n === s.length) {
        // converting the array steps to integers
        s = s.map(steps => ((steps === "U") ? 1 : -1));
        s.reduce((prev, next) => {
            if (prev < 0 && !isInValley) {
                 isInValley = true;
            }
            if ((prev + next) === 0 && isInValley) {
                 valleys++;
                 isInValley = false;
            }

            return prev + next;    
        });

        /**
         * Another way using for loop below
         */
        // let path = 0;
        // for (let i in s){
        //     path += s[i];
        //     if (path < 0 && !isInValley){
        //          // to check that we're not already in a valley 
        //         isInValley = true;
        //     }
        //     if (path == 0 && isInValley){
        //         // to check if we're just coming out of a valley
        //         valleys++;
        //         isInValley = false;
        //     }
            
        // }
    }
    return valleys;
}

console.log(countingValleys(8, s))