const staircase = (n) => {
    if(n > 0 && n <= 100 && typeof(n) === "number" && n === parseInt(n, 0)){
        for (let r = 1; r <= n; r++){
            var space = [...[], ...Array(n-r)].map(i => ' ');
            var hash = [...[], ...Array(n-(n-r))].map(i => '#');

            console.log([
                ...space,
                ...hash
            ].join(''));

        }
    }
}

console.log(staircase(6));