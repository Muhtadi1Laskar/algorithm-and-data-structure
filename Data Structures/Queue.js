class Queue {
    constructor() {
        this.items = []
        this.count = 0
    }
    enqueue(item) {
        this.items[this.count] = item
        this.count++
        return this.items
    }
    dequeue() {
        this.items.shift();
        this.count--;
        return this.items;
    }
}


const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);


console.log(queue);

queue.dequeue();
queue.dequeue();
queue.dequeue();
queue.dequeue();
queue.dequeue();
queue.dequeue();

console.log(queue);