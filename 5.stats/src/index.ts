import { MatchReader } from './interface/MatchReader';
import { Summary } from './interface/Summary';

const reader = MatchReader.csvMatchReader('original.csv');
reader.load();

const summary = Summary.winsAnalysisWithHtmlReport('Huddersfield');
summary.buildAndPrintReport(reader.data);
