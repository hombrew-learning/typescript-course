import { IOutputTarget } from '../interfaces/IOutputTarget';

export class ConsoleReport implements IOutputTarget {
  print(report: string): void {
    console.log(report);
  }
}
