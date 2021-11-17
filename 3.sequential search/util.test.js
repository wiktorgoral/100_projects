const {search} = require('./main');

test("name", () => {

    const arrays = [
        [89, 58, 46, 9, 6, 49, 91, 89, 89, 79],
        [67, 13, 76, 20, 28, 46, 53, 59, 66, 66],
        [79, 36, 47, 24, 11, 43, 49, 38, 39, 56],
        [20, 4, 18, 42, 94, 56, 1, 57, 76, 81],
        [5, 85, 27, 96, 37, 15, 5, 82, 55, 45]
];
    const find = [[49,5],[59,7],[24,3],[76,8],[5,0]];

    for (let i = 0; i < arrays.length; i++) {
        const result = search(arrays[i],find[i][0]);
        expect(result).toBe(find[i][1]);

    }
})
