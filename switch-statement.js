const getLetter = (s) => {
    let letter;
    if (s.length > 0 && s.length <= 100) {


        switch (s.charAt(0)) {
            case ('a' || 'e' || 'o' || 'i' || 'u'):
                letter = 'A';
                break;

            case ('b' || 'c' || 'd' || 'f' || 'g'):
                letter = 'B';
                break;

            case ('h' || 'j' || 'k' || 'l' || 'm'):
                letter = 'C';
                break;

            case ('z' || 'n' || 'p' || 'q' || 'r' || 's' || 't' || 'v' || 'w' || 'x' || 'y'):
                letter = 'D';
                break;

            default:
                console.log("Undefined");
        }

    }


    return letter;
}

console.log(getLetter("aug"));