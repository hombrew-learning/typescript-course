import fs from 'fs';
import { IOutputTarget } from '../interfaces/IOutputTarget';

export class HtmlReport implements IOutputTarget {
  print(report: string): void {
    const html = `
      <div>
        <h1>Analysis Output</h1>
        <div>${report}</div>
      </div>
    `;

    fs.writeFileSync('reports.html', html);
  }
}
