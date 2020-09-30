import fs from 'fs';
import { DataReader } from './interfaces/IDataReader';

export class CsvFileReader implements DataReader {
  public data: string[][] = [];

  constructor(private filename: string) {}

  read(): void {
    this.data = fs
      .readFileSync(this.filename, { encoding: 'utf-8' })
      .split('\n')
      .map((row: string): string[] => row.split(','));
  }
}
