const {count_char} = require('./main');

test("Random names", () => {
    var arg = [
        "aaaaaaaaaa",
        "hSJMbHzu",
        "Welcome",
        "Hello"
    ]
    var expected = [
        {"a":10},
        {"h":1,"S":1,"J":1,"M":1,"b":1,"H":1,"z":1,"u":1},
        {"W":1,"e":2,"l":1,"c":1,"o":1,"m":1},
        {"H":1,"e":1,"l":2,"o":1}

    ]
    for (let i = 0; i < arg.length; i++) {
        const result = count_char(arg[i]);
        expect(result).toStrictEqual(expected[i])
    }
})
