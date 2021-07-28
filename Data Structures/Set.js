class Set {
  constructor() {
    this.items = [];
    this.count = 0;
  }
  add(element) {
    if (this.items.length == 0) {
      this.count++;
      return (this.items[0] = element);
    }
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i] === element) {
        return undefined;
      }
    }
    this.items[this.count] = element;
    this.count++;
    return this.items;
  }
  list() {
    let str = " ";
    for (let i = 0; i < this.items.length; i++) {
      str += this.items[i] + " ";
    }
    return str;
  }
  delete(element) {
    if (this.items.length === 0) return undefined;
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i] === element) {
        this.items.splice(i, 1);
      }
    }
    this.count--;
    return this.items;
  }
}

const set = new Set();
set.add(1);
set.add(2);
set.add(3);
set.add(4);
set.add(5);

console.log(set);

set.delete(3);

console.log(set);
