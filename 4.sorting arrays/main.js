
module.exports.swap = function (list, smaller_index, bigger_index) {
    let tmp = list[bigger_index];
    list[bigger_index] = list[smaller_index]
    list[smaller_index] = tmp
}

module.exports.bubbleSort = function (list) {
    if (list.length<2) return false
    for (let i = 0; i < list.length; i++) {
        for (let j = i; j < list.length; j++) {
                if(list[i]>list[j]){
                    swap(list, i, j);
            }
        }
    }
    return list;
}
module.exports.selectSort = function (list) {
    if (list.length<2) return false
    for (let i = 0; i < list.length; i++) {
        let smallest = i;
        for (let j = i; j < list.length; j++) {
            if (list[j]< list[smallest]) smallest=j;
        }
        swap(list,i,smallest)
    }
    return list;
}

module.exports.mergeSort = function (list){
    if (list.length<2) return false

}

let func = require('./main');
const {swap} = require("./main");

console.log(func.selectSort([64, 34, 25, 12, 22, 11, 90]));