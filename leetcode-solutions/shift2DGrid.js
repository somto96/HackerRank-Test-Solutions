const grid = [
	[3, 8, 1, 9],
	[19, 7, 2, 5],
	[4, 6, 11, 10],
	[12, 0, 21, 13],
];
const k = 4; // Number of times the grid will be shifted

const shiftGrid = (grid, k = 1) => {
    /**
     * Flattening the matrix into an array using flat(depth) method
     *
     * The flat() method creates a new array
     * with all sub-array elements concatenated into it recursively up to the specified depth.
     * credit: MDN Web Docs
     */
	const flattenedArray = grid.flat();

	// Length of the first array or first row of the matrix
	const singleArrayLength = grid?.[0]?.length;

	/**
	 * The while statement creates a loop that executes
     * a specified statement as long as the test condition evaluates to true.
     * credit: MDN Web Docs
	 */
	while (k--) {
        /**
         * The unshift() method adds one or more elements to the beginning of
         * an array and returns the new length of the array.
         */
		flattenedArray.unshift(flattenedArray.pop());
	}

	const res = [];

	while (flattenedArray.length) {
        /**
         * The splice() method changes the contents of an array by removing
         * or replacing existing elements and/or adding new elements in place.
         */
		res.push(flattenedArray.splice(0, singleArrayLength));
	}

	return res;
};


shiftGrid(grid, k);
