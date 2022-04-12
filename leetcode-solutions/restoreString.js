/**
 * Input: s = "codeleet", indices = [4,5,6,7,0,2,1,3]
    Output: "leetcode"
    Explanation: As shown, "codeleet" becomes "leetcode" after shuffling.
*/

const s = "codeleet";
const indices = [4,5,6,7,0,2,1,3];

const restoreString = (s, indices) => {
	// converts s into an array
	let stringArr = s.split("");

	let result = [];

	// loop through the indices array and push values into the results array
    // map(element, index, array);
	stringArr.map((e, i) => {
        console.log("index", i);
        console.log("element", e);
		result[indices[i]] = e;
	});

	return result?.join("");
};

restoreString(s, indices);
