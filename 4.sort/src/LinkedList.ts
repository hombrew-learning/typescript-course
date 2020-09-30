import { Sorter } from './Sorter';

class Node {
  next: Node | null = null;

  constructor(public data: number) {}
}

export class LinkedList extends Sorter {
  head: Node | null = null;

  get length(): number {
    if (!this.head) {
      return 0;
    }

    let length = 1;
    let currentNode = this.head;

    while (currentNode.next) {
      length++;
      currentNode = currentNode.next;
    }

    return length;
  }

  add(data: number): void {
    const node = new Node(data);

    if (!this.head) {
      this.head = node;
      return;
    }

    let tail = this.head;
    while (tail.next) {
      tail = tail.next;
    }

    tail.next = node;
  }

  at(index: number): Node {
    if (!this.head) {
      throw new Error('Index out of bounds');
    }

    let counter = 0;
    let currentNode: Node | null = this.head;

    while (currentNode) {
      if (counter === index) {
        return currentNode;
      }

      counter++;
      currentNode = currentNode.next;
    }

    throw new Error('Index out of bounds');
  }

  compare(leftIndex: number): boolean {
    if (!this.head) {
      throw new Error('List is empty');
    }

    return this.at(leftIndex).data > this.at(leftIndex + 1).data;
  }

  swap(leftIndex: number): void {
    const leftNode = this.at(leftIndex);
    const rightNode = this.at(leftIndex + 1);

    const temp = leftNode.data;
    leftNode.data = rightNode.data;
    rightNode.data = temp;
  }

  print(): void {
    if (!this.head) {
      return;
    }

    let currentNode: Node | null = this.head;
    while (currentNode) {
      console.log(currentNode.data);
      currentNode = currentNode.next;
    }
  }
}
