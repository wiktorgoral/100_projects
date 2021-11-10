`A queue is a data structure where we insert items from the back and remove items from the front. 
It follows the principle of First In, First Out data structures. `

class Queue {
    constructor() {
        this.items = [];
    }

    push(item){
        this.items.unshift(item);
    }

    pop(){
        return this.items.shift();
    }

    empty(){
        return this.items.length === 0;
    }

    size(){
        return this.items.length;
    }

}