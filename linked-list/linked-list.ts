export class LinkedList {
  private head: Node;
  private tail: Node;

  constructor(value: any) {
    this.head = new Node(value);
    this.tail = this.head;
  }

  public append(value: any) {
    const newTail = new Node(value);
    this.tail.next = newTail;
    this.tail = newTail;
  }

  public prepend(value: any) {
    const newHead = new Node(value);
    newHead.next = this.head;
    this.head = newHead;
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
