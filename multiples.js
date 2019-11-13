var grades = [73, 67, 38, 33]

function gradingStudents(grades) {
    // Write your code here 
    var newGrades = []
    grades.forEach((grade) => {

        if (grade >= 38) {
            var nextMultiple = Math.ceil(grade / 5) * 5;
            var difference = nextMultiple - grade;
            return (difference < 3 ? newGrades.push(nextMultiple) : newGrades.push(grade));
        } else {
            return newGrades.push(grade);
        }
        // console.log(newGrades);

    })
    return newGrades;

}
console.log(gradingStudents(grades));