class Element {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  class Stack {
    constructor() {
      this.top = {
        value: null,
        next: null,
      };
      this.bottom = this.top;
      this.length = 1;
    }
    insert(value) {
      const newElement = new Element(value);
      newElement.next = this.top;
      this.top = newElement;
      this.length++;
      return this;
    }
    remove() {
      let unWantedNode = this.top;
      this.top = unWantedNode.next;
      this.length--;
      return this;
    }
    peak(){
      if(this.length === 0) return undefined;
      return this.top.value;
    }
    len() {
      return this.length;
    }
    print() {
      const array = [];
      let currentElement = this.top;
      while(currentElement.next !== null) {
        array.push(currentElement.value);
        currentElement = currentElement.next;
      }
      return array;
    }
  }
  
  const stack = new Stack();
