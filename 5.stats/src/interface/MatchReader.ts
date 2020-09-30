import { dateStringToDate } from '../utils';
import { TMatchResult } from './types/TMatchResult';
import { TMatchData } from './types/TMatchData';
import { DataReader } from './interfaces/IDataReader';
import { CsvFileReader } from './CsvFileReader';

export class MatchReader {
  static csvMatchReader(filename: string): MatchReader {
    return new MatchReader(new CsvFileReader(filename));
  }

  data: TMatchData[] = [];

  constructor(public reader: DataReader) {}

  load(): void {
    this.reader.read();
    this.data = this.reader.data.map(
      (row: string[]): TMatchData => {
        const [
          date,
          homeTeam,
          awayTeam,
          homeScore,
          awayScore,
          result,
          bestPlayer,
        ] = row;
        return [
          dateStringToDate(date),
          homeTeam,
          awayTeam,
          parseInt(homeScore),
          parseInt(awayScore),
          result as TMatchResult,
          bestPlayer,
        ];
      }
    );
  }
}
