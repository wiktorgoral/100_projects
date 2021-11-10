`Counting occurrences of a character in a string means counting all substrings of a character from the input string. `

module.exports.count_char = (text) => {
    var dict = {};
    for (let i = 0; i < text.length; i++) {
        if (text[i] in dict) dict[text[i]]++;
        else dict[text[i]] = 1;
    }
    return dict;
};