`The Sequential search algorithm is a searching algorithm. 
To implement this algorithm, we start by searching for the target value 
from the beginning of the array and continue till we find the target value.`

module.exports.search = (list, point) => {
    for (let i = 0; i < list.length; i++) {
        if (list[i] === point) return i;
    }
    return false;
};