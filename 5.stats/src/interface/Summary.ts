import { Analyzer } from './interfaces/IAnalyzer';
import { IOutputTarget } from './interfaces/IOutputTarget';
import { TMatchData } from './types/TMatchData';
import { WinsAnalysis } from './Analyzers/WinsAnalysis';
import { HtmlReport } from './reportTargets/HtmlReport';

export class Summary {
  static winsAnalysisWithHtmlReport(team: string): Summary {
    return new Summary(new WinsAnalysis(team), new HtmlReport());
  }
  constructor(
    private analyzer: Analyzer,
    private outputTarget: IOutputTarget
  ) {}

  buildAndPrintReport(matches: TMatchData[]): void {
    const analysis = this.analyzer.run(matches);
    this, this.outputTarget.print(analysis);
  }
}
