export class LinkedList {
  private head: Node;
  private tail: Node;
  private length: number;

  constructor(value: any) {
    this.head = new Node(value);
    this.tail = this.head;
    this.length = 1;
  }

  ///add node as tail
  public append(value: any) {
    const newTail = new Node(value);
    this.tail.next = newTail;
    this.tail = newTail;
    this.length++;
  }
  /// Add node as head
  public prepend(value: any) {
    const newHead = new Node(value);
    newHead.next = this.head;
    this.head = newHead;
    this.length++;
  }
  /// add node based on index
  public insert(index: number, value: any) {
    if (index == 0) {
      this.prepend(value);
    } else if (index >= this.length) {
      this.append(value);
    } else {
      const leadNode = this.traverseToIndex(index - 1);
      const newNode = new Node(value);
      newNode.next = leadNode.next;
      leadNode.next = newNode;
      this.length++;
    }
  }
  // find node based on index
  private traverseToIndex(index: number): Node {
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }
}

class Node {
  value: any;
  next: Node;

  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
