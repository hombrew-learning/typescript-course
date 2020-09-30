"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MatchReader_1 = require("./interface/MatchReader");
var Summary_1 = require("./interface/Summary");
var reader = MatchReader_1.MatchReader.csvMatchReader('original.csv');
reader.load();
var summary = Summary_1.Summary.winsAnalysisWithHtmlReport('Huddersfield');
summary.buildAndPrintReport(reader.data);
