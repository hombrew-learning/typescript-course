import { Sorter } from './Sorter';

export class NumbersCollection extends Sorter {
  constructor(private data: number[]) {
    super();
  }

  get length(): number {
    return this.data.length;
  }

  get collection(): number[] {
    return this.data;
  }

  compare(leftIndex: number): boolean {
    return this.data[leftIndex] > this.data[leftIndex + 1];
  }

  swap(leftIndex: number): void {
    const temp = this.data[leftIndex];
    this.data[leftIndex] = this.data[leftIndex + 1];
    this.data[leftIndex + 1] = temp;
  }
}
