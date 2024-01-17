function twoSum(numbers, target) {
    let mapOfNumbersIndexes = {};
    let [first, second] = [];

    numbers.forEach((num, i) => {
        mapOfNumbersIndexes[num] = i;
    })

    numbers.forEach((num, i) => {
        let desired = target - num;
        if (mapOfNumbersIndexes[desired] !== null && mapOfNumbersIndexes[desired] !== i) {
            first = mapOfNumbersIndexes[desired];
            second = i;
        }
    })
    return [first, second]
}

twoSum([1, 2, 3], 4); //?
