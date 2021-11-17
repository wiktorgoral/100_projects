const _ = require("lodash");
`An Anagram is a word or phrase that forms a different word or phrase when the letters of a word are rearranged. 
For example, the words “despair” and “praised” are anagrams.`

module.exports.anagram = function (string1, string2){
    if (string1===null || string2 === null) return false;
    if (string1.length !== string2.length) return false;

    let dict1 = {};
    let dict2 = {};
    for (let i = 0; i < string1.length; i++) {
        if (string1[i] in dict1) dict1[string1[i]]++;
        else dict1[string1[i]] = 1;

        if (string2[i] in dict2) dict2[string2[i]]++;
        else dict2[string2[i]] = 1;
    }
    return _.isEqual(dict1,dict2);

}

