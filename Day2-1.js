"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var example = fs.readFileSync('./SourceFiles/Aoc23-Day2-1-example.txt', 'utf8');
var input = fs.readFileSync('./SourceFiles/AoC23-Day2-1-input.txt', 'utf8');
var array = example.split("\r\n");
var games = array.map(function (line) {
    var _a;
    var split = line.split(":");
    var pullRaw = split[1].split(";");
    var pulls = pullRaw.map(function (row, idx) {
        var colorsArray = row.split(",");
        var pull = colorsArray.map(function (elm) {
            var _a;
            var colorRawData = elm.split(" ").filter(Boolean);
            return _a = {}, _a[colorRawData[1]] = colorRawData[0], _a;
        });
        return pull;
    });
    return _a = {}, _a[split[0].replace(" ", "-")] = pulls, _a;
});
