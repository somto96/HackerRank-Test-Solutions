var a = [-1, -3, 4, 2]

const angryProfessor = (k, a) => {
    var earlyStudents = a.filter(a => a <= 0);
    // console.log(earlyStudents.length); debugging comment
    if (earlyStudents.length < k){
        return "YES";
    }else {
        return "NO"
    }   
}

console.log(angryProfessor(3, a));
