const {palindrome} = require("./main");
`Palindromic words are those words that are read the same way when we read them from both rights and left ends.
 For example, lol, mom, etc.`

module.exports.palindrome = (text) => {
    let punctuationless = text.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
    punctuationless = punctuationless.toLowerCase();
    let finalString = punctuationless.replace(/\s{2,}/g," ");
    let words = finalString.split(" ");
    let wordsSet = [... new Set(words)];
    let palindrome = [];
    for (let i = 0; i < wordsSet.length; i++) {
        let reverse = wordsSet[i].split('').reverse().join('');
        if (reverse===wordsSet[i]) palindrome.append(wordsSet[i]);
    }
    return palindrome;

};
