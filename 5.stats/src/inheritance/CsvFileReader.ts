import fs from 'fs';

export abstract class CsvFileReader<T> {
  abstract mapRow(row: string[]): T;

  public data: T[] = [];

  constructor(private filename: string) {}

  read(): void {
    this.data = fs
      .readFileSync(this.filename, { encoding: 'utf-8' })
      .split('\n')
      .map((row: string): string[] => row.split(','))
      .map(this.mapRow);
  }
}
