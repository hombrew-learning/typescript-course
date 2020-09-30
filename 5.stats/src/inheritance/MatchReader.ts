import { CsvFileReader } from './CsvFileReader';
import { TMatchResult } from '../interface/types/TMatchResult';
import { dateStringToDate } from '../utils';

type MatchDataTuple = [
  Date,
  string,
  string,
  number,
  number,
  TMatchResult,
  string
];

export class MatchReader extends CsvFileReader<MatchDataTuple> {
  mapRow(row: string[]): MatchDataTuple {
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
}
