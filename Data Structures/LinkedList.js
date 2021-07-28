class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };
    this.tail = this.head;
    this.length = 0;
  }
  append(value) {
    const newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }
  preAppend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }
  insert(index, value) {
    if (index < 0 || index >= this.length) return null;
    if (index >= this.length) {
      return this.append(value);
    }
    const newNode = new Node(value);
    const leader = this.traverseToIndex(index - 1);
    const holdingPointer = leader.next;
    leader.next = newNode;
    newNode.next = holdingPointer;
    this.length++;
    return this;
  }
  delete(index) {
    if (index < 0 || index >= this.length) return null;
    const leader = this.traverseToIndex(index - 1);
    const unWantedNode = leader.next;
    leader.next = unWantedNode.next;
    this.length--;
    return this;
  }
  search(value) {
    let currentNode = this.head;
    while (currentNode !== null) {
      if (currentNode.value === value) {
        return currentNode;
      }
      currentNode = currentNode.next;
    }
    return null;
  }
  update(value, index) {
    if (index < 0 || index >= this.length) return null;
    const node = this.traverseToIndex(index);
    node.value = value;
    return this;
  }
  traverseToIndex(index) {
    let currentNode = this.head;
    let current = 0;
    while (current !== index) {
      currentNode = currentNode.next;
      current++;
    }
    return currentNode;
  }
  print() {
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
  }
}

const list = new LinkedList(0);

console.log(list);

list.append(2);
list.append(4);
list.append(3);

console.log(list.print());

list.insert(10, 3);

console.log(list.print());

list.remove(3);

console.log(list.print());
