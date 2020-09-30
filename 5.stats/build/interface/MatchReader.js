"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MatchReader = void 0;
var utils_1 = require("../utils");
var CsvFileReader_1 = require("./CsvFileReader");
var MatchReader = /** @class */ (function () {
    function MatchReader(reader) {
        this.reader = reader;
        this.data = [];
    }
    MatchReader.csvMatchReader = function (filename) {
        return new MatchReader(new CsvFileReader_1.CsvFileReader(filename));
    };
    MatchReader.prototype.load = function () {
        this.reader.read();
        this.data = this.reader.data.map(function (row) {
            var date = row[0], homeTeam = row[1], awayTeam = row[2], homeScore = row[3], awayScore = row[4], result = row[5], bestPlayer = row[6];
            return [
                utils_1.dateStringToDate(date),
                homeTeam,
                awayTeam,
                parseInt(homeScore),
                parseInt(awayScore),
                result,
                bestPlayer,
            ];
        });
    };
    return MatchReader;
}());
exports.MatchReader = MatchReader;
