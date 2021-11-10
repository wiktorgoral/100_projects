`The hash table implementation is based on the concept of key and value mapping just like dictionaries in Python. 
In other words, these data structures are used to map each unique key to its value. 
When implementing hash tables, we need to make sure that each input key must go through a hash function that will convert its initial data type to an integer value called a hash.`

class Hashtable{
    constructor(items) {
        this.size = 0;
        this.buckets = new Array(128);
        this.assign(items);
    }
    assign(items){
        for (let i = 0; i < items.length; i++) {
            var crypto = require('crypto');
            let hash = crypto.createHash('md5').update(items[i][0]).digest('hex');
            let index = hash % this.buckets.length;
            if (this.buckets[hash].length){
                for (let i = 0; i < this.buckets[index].length; i++) {
                    if (this.buckets[index][i][0] === items[i][0]) {
                        this.buckets[index][i][1] = items[i][1];
                        return;
                    }
                }
            }
            else {
                this.buckets[index] = [];
                this.buckets[index].push([items[i]]);
            }
            this.size++;
        }
    }
    get(key){
        let index = crypto.createHash('md5').update(key).digest('hex') % this.buckets.length;
        if (this.buckets[index]) {
            for (let i = 0; i < this.buckets.length; i++) {
                if (this.buckets[index][i][0] === key) {
                    return this.buckets[index][i][1];
                }
            }
        }
        return false;
    }

}