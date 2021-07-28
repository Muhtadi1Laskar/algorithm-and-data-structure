class List {
    constructor() {
      this.dataStore = [];
      this.length = 0;
    }
    listSize() {
      return this.length;
    }
    pos(value) {
      if (this.length === 0) return null;
      for (let i = 0; i < this.length; i++) {
        if (this.dataStore[i] === value) {
          return i;
        }
      }
    }
    append(value) {
      this.dataStore[this.length] = value;
      this.length++;
    }
    toString() {
      return this.dataStore.toString();
    }
    clear() {
      this.dataStore.length = 0;
      this.length = 0;
    }
    getElement(index) {
      if (index > this.length) return null;
      return this.dataStore[index];
    }
    pop() {
      this.dataStore.pop();
      this.length--;
    }
  }