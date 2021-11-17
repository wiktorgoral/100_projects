const { anagram } = require('./main');

test("name", () => {
    const string1 = ["tar","arc","elbow","state","cider","dusty","night","inch","asdasc"];
    const string2 = ["rat","car","below","taste","cried","study","thing","chin","sdasdddd"];

    const expected = [true,true,true,true,true,true,true,true,false];

    for (let i = 0; i < string1.length; i++) {
        let result = anagram(string1[i],string2[i]);
        expect(result).toStrictEqual(expected[i]);
    }

})
