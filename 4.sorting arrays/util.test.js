const {bubbleSort, selectSort} = require('./main');

const arrays = [
    [89, 58, 46, 9, 6, 49, 91, 89, 89, 79],
    [67, 13, 76, 20, 28, 46, 53, 59, 66, 66],
    [79, 36, 47, 24, 11, 43, 49, 38, 39, 56],
    [20, 4, 18, 42, 94, 56, 1, 57, 76, 81],
    [5, 85, 27, 96, 37, 15, 5, 82, 55, 45],
    [],
    [5],
    null
];

const expected = [
    [6,9,46,49,58,79,89,89,89,91],
    [13,20,28,46,53,59,66,66,67,76],
    [11,24,36,38,39,43,47,49,56,79],
    [1,4,18,20,42,56,57,76,81,94],
    [5,5,15,27,37,45,55,82,85,96],
    [],
    [5],
    null
];

test("bubbleSort", () => {
    for (let i = 0; i < arrays.length; i++) {
        const result = bubbleSort(arrays[i]);
        expect(result).toStrictEqual(expected[i]);

    }

})

test("selectSort", () => {
    for (let i = 0; i < arrays.length; i++) {
        const result = selectSort(arrays[i]);
        expect(result).toStrictEqual(expected[i]);
    }

})
