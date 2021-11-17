const {rec_bin_search} = require('./main');

test("name", () => {
    const arrays = [
        [6,9,46,49,58,79,89,89,89,91],
        [13,20,28,46,53,59,66,66,67,76],
        [11,24,36,38,39,43,47,49,56,79],
        [1,4,18,20,42,56,57,76,81,94],
        [5,5,15,27,37,45,55,82,85,96],
        ];

    const expected = [[89,true],[13,true],[79,true],[2,false],[null,false]]

    for (let i = 0; i < arrays.length; i++) {
        expect(rec_bin_search(arrays[i],expected[i][0],0,9)).toBe(expected[i][1]);
    }


})
