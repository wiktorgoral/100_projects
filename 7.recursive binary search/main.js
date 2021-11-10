`Binary search means to find an item in a sorted array by repeatedly dividing the search interval into two halves 
and recursive binary search means to subdivide the entire binary search process into smaller problems.`

const {rec_bin_search} = require("./main");
module.exports.rec_bin_search = function (array, target, first, last){
    if (first>last && first<0 && last>array.length) return false;

    let mid = Math.floor((first + last) /2);
    if (mid === target) return true;
    else if (target> mid) rec_bin_search(array, target, mid+1, last);
    else rec_bin_search (array, target, first, mid-1);

}