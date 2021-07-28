class PQElement {
    constructor(priority, element) {
        this.priority = priority
        this.element = element
    }
}

class PQueue {
    constructor() {
        this.items = []
    }
    enqueue(item, priority) {
        const pQueue = new PQElement(priority, item)
        let contain = false;
        for(let i=0;i<this.items.length;i++){
            if(this.items[i].priority > pQueue.priority) {
                this.items.splice(i, 0, pQueue);
                contain = true;
                break;
            }
        }
        if(!contain) {
            this.items.push(pQueue)
        }
        // return pQueue;
    }
    dequeue() {
        return this.items.shift()
    }
    front() {
        return this.items[0];
    }
    rear() {
        return this.items[length-1]
    }
}

const queue = new PQueue();
queue.enqueue(10, 100);
queue.enqueue(20, 200);
queue.enqueue(30, 50);
queue.enqueue(30, 75);
queue.enqueue(300, 5);

console.log(queue);

queue.dequeue();
queue.dequeue();
queue.dequeue();

console.log(queue);