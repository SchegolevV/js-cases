function sumDigPow(a, b) {
    const isEuricable = function (number) {
        let euricableNumber = [...`${number}`].reduce((acc, digit, i) => {
            return acc + Math.pow(digit, i + 1);
        }, 0);

        return number === euricableNumber ? true : false;
    };

    let result = [];

    while (a <= b) {
        if (isEuricable(a)) {
            result.push(a);
        }
        a++;
    }
    return result;
}

sumDigPow(1, 10); //=
