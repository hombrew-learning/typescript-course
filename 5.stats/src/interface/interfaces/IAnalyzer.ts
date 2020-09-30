import { TMatchData } from '../types/TMatchData';

export interface Analyzer {
  run(matches: TMatchData[]): string;
}
