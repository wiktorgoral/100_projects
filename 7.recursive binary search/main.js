

`Binary search means to find an item in a sorted array by repeatedly dividing the search interval into two halves 
and recursive binary search means to subdivide the entire binary search process into smaller problems.`


module.exports.rec_bin_search = function (array, target, first, last){
    const {rec_bin_search} = require("./main");

    if (first>last) return false;
    else {
        let mid = Math.floor((first + last) / 2);
        if (array[mid] === target) return true;
        else if (target > array[mid]) return rec_bin_search(array, target, mid + 1, last);
        else return rec_bin_search(array, target, first, mid - 1);
    }
}