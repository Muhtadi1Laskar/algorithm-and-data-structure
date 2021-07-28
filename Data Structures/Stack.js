class Stack {
  constructor() {
    this.items = [];
    this.count = 0;
  }
  push(item) {
    this.items.unshift(item);
    this.count++;
    return this.items;
  }
  pop() {
      this.count--;
      return this.items.shift();;
  }
  peak() {
    if (this.count === 0) return undefined;
    return this.items[0];
  }
  contains(item) {
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i] === item) return true;
    }
    return false;
  }
}

const stack = new Stack();
stack.push(100);
stack.push(200);
stack.push(300);
stack.push(400);

stack.pop();
stack.pop();
stack.pop();
stack.pop();
stack.pop();
stack.pop();
stack.pop();
console.log(stack);
