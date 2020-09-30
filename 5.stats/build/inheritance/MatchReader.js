"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.MatchReader = void 0;
var CsvFileReader_1 = require("./CsvFileReader");
var utils_1 = require("../utils");
var MatchReader = /** @class */ (function (_super) {
    __extends(MatchReader, _super);
    function MatchReader() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MatchReader.prototype.mapRow = function (row) {
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
    };
    return MatchReader;
}(CsvFileReader_1.CsvFileReader));
exports.MatchReader = MatchReader;
