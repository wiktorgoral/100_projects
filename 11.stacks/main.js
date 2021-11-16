`Stacks are abstract data types that are commonly used in almost all programming languages. 
A stack is a data structure that simulates real-world stacks such as a deck of cards, a stack of plates, etc.
Stacks follow the principle of Last-in-first-out data structures, where the last item inserted is the first item out. It generally has five functions:

is_empty: it returns True if the stacks are empty and return False if the stack is not empty.
push: it inserts an item to the top of the stack.
pop: it removes and returns the top item from the stack.
peep: it returns the top item from the stack but it doesn’t remove it.
size: it returns an integer that represents the number of items present in the stack.`

class Stack{

    constructor() {
        this.items = [];
    }

    is_empty(){
        return this.items.length === 0;
    }

    push(item){
        this.items.append(item);
    }

    pop(){
        this.items.pop();
    }

    peek(){
        return this.items[this.items.length];
    }

    size(){
        return this.items.length;
    }

}