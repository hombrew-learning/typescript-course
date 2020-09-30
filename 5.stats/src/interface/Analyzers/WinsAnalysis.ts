import { Analyzer } from '../interfaces/IAnalyzer';
import { TMatchData } from '../types/TMatchData';
import { TMatchResult } from '../types/TMatchResult';

export class WinsAnalysis implements Analyzer {
  constructor(private team: string) {}

  run(matches: TMatchData[]): string {
    let wins = 0;

    for (let match of matches) {
      if (match[1] === this.team && match[5] === TMatchResult.HomeWin) {
        wins++;
      } else if (match[2] === this.team && match[5] === TMatchResult.AwayWin) {
        wins++;
      }
    }

    return `Team ${this.team} won ${wins} games`;
  }
}
