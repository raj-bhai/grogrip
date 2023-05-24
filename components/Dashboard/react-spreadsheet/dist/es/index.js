import * as React from 'react';
import classNames from 'classnames';
import { createAction, createReducer } from '@reduxjs/toolkit';
import { extractLabel, columnIndexToLabel, Parser } from 'hot-formula-parser';
import { createContext, useContextSelector } from 'use-context-selector';
import flatMap from 'array.prototype.flatmap';

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spreadArray(to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
}

var setData = createAction("SET_DATA", function (data) { return ({ payload: { data: data } }); });
var selectEntireRow = createAction("SELECT_ENTIRE_ROW", function (row, extend) { return ({ payload: { row: row, extend: extend } }); });
var selectEntireColumn = createAction("SELECT_ENTIRE_COLUMN", function (column, extend) { return ({
    payload: { column: column, extend: extend },
}); });
var selectEntireTable = createAction("SELECT_ENTIRE_TABLE");
var select = createAction("SELECT", function (point) { return ({ payload: { point: point } }); });
var activate = createAction("ACTIVATE", function (point) { return ({ payload: { point: point } }); });
var setCellData = createAction("SET_CELL_DATA", function (active, data, getBindingsForCell) { return ({
    payload: { active: active, data: data, getBindingsForCell: getBindingsForCell },
}); });
var setCellDimensions = createAction("SET_CELL_DIMENSIONS", function (point, dimensions) { return ({
    payload: { point: point, dimensions: dimensions },
}); });
var copy = createAction("COPY");
var cut = createAction("CUT");
var paste = createAction("PASTE", function (data) { return ({ payload: { data: data } }); });
var edit$1 = createAction("EDIT");
var view$1 = createAction("VIEW");
var clear$1 = createAction("CLEAR");
var blur$1 = createAction("BLUR");
var keyPress = createAction("KEY_PRESS", function (event) { return ({ payload: { event: event } }); });
var keyDown = createAction("KEY_DOWN", function (event) { return ({ payload: { event: event } }); });
var dragStart = createAction("DRAG_START");
var dragEnd = createAction("DRAG_END");
var commit$1 = createAction("COMMIT", function (changes) { return ({ payload: { changes: changes } }); });

/** Sets the value for point in map */
function set$1(point, value, map) {
    var _a, _b;
    return __assign(__assign({}, map), (_a = {}, _a[point.row] = __assign(__assign({}, map[point.row]), (_b = {}, _b[point.column] = value, _b)), _a));
}
/** Gets the value for point in map */
function get$1(point, map) {
    return map[point.row] && map[point.row][point.column];
}
/** Checks if map has point assigned to value */
function has$3(point, map) {
    return point.row in map && point.column in map[point.row];
}
var EMPTY = {};
/** Creates a new PointMap instance from an array-like or iterable object. */
function from$1(pairs) {
    return pairs.reduce(function (acc, _a) {
        var _b = __read(_a, 2), point = _b[0], value = _b[1];
        return set$1(point, value, acc);
    }, EMPTY);
}
/** Creates a new PointMap instance from a Matrix. */
function fromMatrix(matrix) {
    return matrix.reduce(function (rowAcc, data, row) {
        return data.reduce(function (colAcc, cell, column) {
            return cell ? set$1({ row: row, column: column }, cell, colAcc) : colAcc;
        }, rowAcc);
    }, EMPTY);
}
/** Applies a function against an accumulator and each value and point in the map (from left to right) to reduce it to a single value */
function reduce(func, map, initialValue) {
    var acc = initialValue;
    var _map_keys = Object.keys(map);
    for (var i = 0; i < _map_keys.length; i++) {
        var row = Number(_map_keys[i]);
        var columns = map[row];
        var _columns_keys = Object.keys(columns);
        for (var j = 0; j < _columns_keys.length; j++) {
            var column = Number(_columns_keys[j]);
            var value = columns[column];
            acc = func(acc, value, { row: row, column: column });
        }
    }
    return acc;
}
/** Creates a new map with the results of calling a provided function on every value in the calling map */
function map$1(func, map) {
    return reduce(function (acc, value, point) { return set$1(point, func(value), acc); }, map, from$1([]));
}
/** Creates a new map of all values predicate returns truthy for. The predicate is invoked with two arguments: (value, key) */
function filter$1(predicate, map) {
    return reduce(function (acc, value, point) {
        if (predicate(value, point)) {
            return set$1(point, value, acc);
        }
        return acc;
    }, map, from$1([]));
}
/** Returns whether map has any points set to value */
function isEmpty(map) {
    return Object.keys(map).length === 0;
}

/**
 * Creates an empty matrix with given rows and columns
 * @param rows - integer, the amount of rows the matrix should have
 * @param columns - integer, the amount of columns the matrix should have
 * @returns an empty matrix with given rows and columns
 */
function createEmpty(rows, columns) {
    var matrix = Array(rows);
    for (var i = 0; i < rows; i++) {
        matrix[i] = Array(columns);
    }
    return matrix;
}
/** Gets the value at row and column of matrix. */
function get(point, matrix) {
    var columns = matrix[point.row];
    if (columns === undefined) {
        return undefined;
    }
    return columns[point.column];
}
/** Creates a slice of matrix from startPoint up to, but not including, endPoint. */
function slice(startPoint, endPoint, matrix) {
    var sliced = [];
    var columns = endPoint.column - startPoint.column;
    for (var row = startPoint.row; row <= endPoint.row; row++) {
        var slicedRow = row - startPoint.row;
        sliced[slicedRow] = sliced[slicedRow] || Array(columns);
        for (var column = startPoint.column; column <= endPoint.column; column++) {
            sliced[slicedRow][column - startPoint.column] = get({ row: row, column: column }, matrix);
        }
    }
    return sliced;
}
/** Sets the value at row and column of matrix. If a row doesn't exist, it's created. */
function set(point, value, matrix) {
    var nextMatrix = __spreadArray([], __read(matrix));
    // Synchronize first row length
    var firstRow = matrix[0];
    var nextFirstRow = firstRow ? __spreadArray([], __read(firstRow)) : [];
    if (nextFirstRow.length - 1 < point.column) {
        nextFirstRow[point.column] = undefined;
        nextMatrix[0] = nextFirstRow;
    }
    var nextRow = matrix[point.row] ? __spreadArray([], __read(matrix[point.row])) : [];
    nextRow[point.column] = value;
    nextMatrix[point.row] = nextRow;
    return nextMatrix;
}
/** Like Matrix.set() but mutates the matrix */
function mutableSet(point, value, matrix) {
    var firstRow = matrix[0];
    if (!firstRow) {
        firstRow = [];
        matrix[0] = firstRow;
    }
    if (!(point.row in matrix)) {
        matrix[point.row] = [];
    }
    // Synchronize first row length
    if (!(point.column in firstRow)) {
        firstRow[point.column] = undefined;
    }
    matrix[point.row][point.column] = value;
}
/** Removes the coordinate of matrix */
function unset(point, matrix) {
    if (!has$2(point, matrix)) {
        return matrix;
    }
    var nextMatrix = __spreadArray([], __read(matrix));
    var nextRow = __spreadArray([], __read(matrix[point.row]));
    // Avoid deleting to preserve first row length
    nextRow[point.column] = undefined;
    nextMatrix[point.row] = nextRow;
    return nextMatrix;
}
/** Creates an array of values by running each element in collection thru iteratee. */
function map(func, matrix) {
    var e_1, _a, e_2, _b;
    var newMatrix = [];
    try {
        for (var _c = __values(matrix.entries()), _d = _c.next(); !_d.done; _d = _c.next()) {
            var _e = __read(_d.value, 2), row = _e[0], values = _e[1];
            try {
                for (var _f = (e_2 = void 0, __values(values.entries())), _g = _f.next(); !_g.done; _g = _f.next()) {
                    var _h = __read(_g.value, 2), column = _h[0], value = _h[1];
                    var point = { row: row, column: column };
                    mutableSet(point, func(value, point), newMatrix);
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (_g && !_g.done && (_b = _f["return"])) _b.call(_f);
                }
                finally { if (e_2) throw e_2.error; }
            }
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (_d && !_d.done && (_a = _c["return"])) _a.call(_c);
        }
        finally { if (e_1) throw e_1.error; }
    }
    return newMatrix;
}
/**
 * Converts all elements in row into a string separated by horizontalSeparator and each row string
 * to string separated by verticalSeparator
 */
function join(matrix, horizontalSeparator, verticalSeparator) {
    if (horizontalSeparator === void 0) { horizontalSeparator = "\t"; }
    if (verticalSeparator === void 0) { verticalSeparator = "\n"; }
    var joined = "";
    var _a = getSize(matrix), rows = _a.rows, columns = _a.columns;
    for (var row = 0; row < rows; row++) {
        if (row) {
            joined += verticalSeparator;
        }
        for (var column = 0; column < columns; column++) {
            if (column) {
                joined += horizontalSeparator;
            }
            if (matrix[row] && column in matrix[row]) {
                joined += String(matrix[row][column]);
            }
        }
    }
    return joined;
}
/**
 * Parses a CSV separated by a horizontalSeparator and verticalSeparator into a
 * Matrix using a transform function
 */
function split(csv, transform, horizontalSeparator, verticalSeparator) {
    if (horizontalSeparator === void 0) { horizontalSeparator = "\t"; }
    if (verticalSeparator === void 0) { verticalSeparator = /\r\n|\n|\r/; }
    return csv
        .split(verticalSeparator)
        .map(function (row) { return row.split(horizontalSeparator).map(transform); });
}
/** Returns whether the point exists in the matrix or not. */
function has$2(point, matrix) {
    var firstRow = matrix[0];
    return (firstRow &&
        // validation
        point.row >= 0 &&
        point.column >= 0 &&
        Number.isInteger(point.row) &&
        Number.isInteger(point.column) &&
        // first row length is in sync with other rows
        point.column < firstRow.length &&
        point.row < matrix.length);
}
/** Gets the count of rows and columns of given matrix */
function getSize(matrix) {
    return {
        columns: getColumnsCount(matrix),
        rows: getRowsCount(matrix),
    };
}
/** Gets the count of rows of given matrix */
function getRowsCount(matrix) {
    return matrix.length;
}
/** Gets the count of columns of given matrix */
function getColumnsCount(matrix) {
    var firstRow = matrix[0];
    return firstRow ? firstRow.length : 0;
}
/**
 * Pads matrix with empty columns to match given total columns
 * @param matrix - matrix to pad
 * @param size - minimum size of the matrix after padding.
 * @returns the updated matrix
 */
function pad(matrix, size) {
    var _a = getSize(matrix), rows = _a.rows, columns = _a.columns;
    if (rows >= size.rows && columns >= size.columns) {
        // Optimization, no padding required.
        return matrix;
    }
    var resultSize = {
        rows: size.rows > rows ? size.rows : rows,
        columns: size.columns > columns ? size.columns : columns,
    };
    var padded = __spreadArray([], __read(matrix));
    if (resultSize.columns > columns) {
        var padColumns_1 = resultSize.columns - columns;
        padded = padded.map(function (row) { return __spreadArray(__spreadArray([], __read(row), false), __read(Array(padColumns_1).fill(undefined))); });
    }
    if (resultSize.rows > rows) {
        var padRows_1 = resultSize.rows - rows;
        var emptyRow = Array(resultSize.columns).fill(undefined);
        padded = __spreadArray(__spreadArray([], __read(padded), false), __read(Array(padRows_1).fill(emptyRow)));
    }
    return padded;
}
/**
 * Flattens a matrix values to an array
 * @param matrix - the matrix to flatten values from
 * @param transform - optional transform function to apply to each value in the
 * matrix
 * @returns an array of the values from matrix, transformed if a transform
 * function is passed
 */
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function toArray(matrix, transform) {
    var array = [];
    for (var row = 0; row < matrix.length; row++) {
        for (var column = 0; column < matrix[row].length; column++) {
            var value = matrix[row][column];
            array.push(transform ? transform(value, { row: row, column: column }) : value);
        }
    }
    return array;
}
/** Returns the maximum point in the matrix */
function maxPoint(matrix) {
    var size = getSize(matrix);
    return { row: size.rows - 1, column: size.columns - 1 };
}

/** Returns whether given value is a point */
function is$1(value) {
    return (
    // @ts-ignore
    typeof (value === null || value === void 0 ? void 0 : value.row) === "number" &&
        // @ts-ignore
        typeof (value === null || value === void 0 ? void 0 : value.column) === "number");
}
/** Return whether two given points are the equal */
function isEqual(source, target) {
    return source.column === target.column && source.row === target.row;
}
/** The origin point in matrices */
var ORIGIN = { row: 0, column: 0 };

/**
 * Interface for ranges between two points
 */
/** Creates a normalized range between two given points */
function create(source, target) {
    return {
        start: {
            row: Math.min(source.row, target.row),
            column: Math.min(source.column, target.column),
        },
        end: {
            row: Math.max(source.row, target.row),
            column: Math.max(source.column, target.column),
        },
    };
}
/** Iterates through all the existing points in given range */
function iterate(range) {
    var row, column;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                row = range.start.row;
                _a.label = 1;
            case 1:
                if (!(row <= range.end.row)) return [3 /*break*/, 6];
                column = range.start.column;
                _a.label = 2;
            case 2:
                if (!(column <= range.end.column)) return [3 /*break*/, 5];
                return [4 /*yield*/, { row: row, column: column }];
            case 3:
                _a.sent();
                _a.label = 4;
            case 4:
                column++;
                return [3 /*break*/, 2];
            case 5:
                row++;
                return [3 /*break*/, 1];
            case 6: return [2 /*return*/];
        }
    });
}
/** Returns the size (rows x columns) of the given range */
function size$1(range) {
    var rows = range.end.row + 1 - range.start.row;
    var columns = range.end.column + 1 - range.start.column;
    return rows * columns;
}
/** Returns whether given point exists in given range */
function has$1(range, point) {
    return (point.row >= range.start.row &&
        point.column >= range.start.column &&
        point.row <= range.end.row &&
        point.column <= range.end.column);
}
/** Limits given masked range with given mask */
function mask(masked, mask) {
    return create({
        row: mask.start.row > masked.start.row ? mask.start.row : masked.start.row,
        column: mask.start.column > masked.start.column
            ? mask.start.column
            : masked.start.column,
    }, {
        row: mask.end.row < masked.end.row ? mask.end.row : masked.end.row,
        column: mask.end.column < masked.end.column
            ? mask.end.column
            : masked.end.column,
    });
}
/** Returns whether given value is a point range */
function is(value) {
    // @ts-ignore
    return is$1(value === null || value === void 0 ? void 0 : value.start) && is$1(value === null || value === void 0 ? void 0 : value.end);
}

var Direction;
(function (Direction) {
    Direction["Left"] = "Left";
    Direction["Right"] = "Right";
    Direction["Top"] = "Top";
    Direction["Bottom"] = "Bottom";
})(Direction || (Direction = {}));
/** Type entirely selected */
var EntireType;
(function (EntireType) {
    EntireType["Row"] = "row";
    EntireType["Column"] = "column";
    EntireType["Table"] = "table";
})(EntireType || (EntireType = {}));
/** Returns whether given selection is entire rows */
function isEntireRows(selection) {
    return (selection !== null &&
        "type" in selection &&
        selection.type === EntireType.Row);
}
/** Returns whether given selection is entire columns */
function isEntireColumns(selection) {
    return (selection !== null &&
        "type" in selection &&
        selection.type === EntireType.Column);
}
/** Returns whether given selection is entire table */
function isEntireTable(selection) {
    return (selection !== null &&
        "type" in selection &&
        selection.type === EntireType.Table);
}
/**
 * Creates entire rows selection
 * @param start - row index where the selection starts, integer
 * @param end - row index where the selection ends, integer
 * @throws {@link InvalidIndexError}
 */
function createEntireRows(start, end) {
    if (!isIndex(start)) {
        throw new InvalidIndexError("start");
    }
    if (!isIndex(end)) {
        throw new InvalidIndexError("end");
    }
    return {
        type: EntireType.Row,
        start: Math.min(start, end),
        end: Math.max(start, end),
    };
}
/**
 * Creates entire columns selection
 * @param start - column index where the selection starts, integer
 * @param end - column index where the selection starts, integer
 */
function createEntireColumns(start, end) {
    if (!isIndex(start)) {
        throw new InvalidIndexError("start");
    }
    if (!isIndex(end)) {
        throw new InvalidIndexError("end");
    }
    return {
        type: EntireType.Column,
        start: Math.min(start, end),
        end: Math.max(start, end),
    };
}
/** Creates entire table selection */
function createEntireTable() {
    // create an object as in the future this might hold the worksheet number
    return { type: EntireType.Table };
}
/** Get concrete range in given data of given selection */
function toRange$1(selection, data) {
    if (selection === null) {
        return null;
    }
    if (is(selection)) {
        return selection;
    }
    switch (selection.type) {
        case EntireType.Row: {
            var max = maxPoint(data);
            return create({ row: selection.start, column: 0 }, { row: selection.end, column: max.column });
        }
        case EntireType.Column: {
            var max = maxPoint(data);
            return create({ row: 0, column: selection.start }, { row: max.row, column: selection.end });
        }
        case EntireType.Table: {
            return getMatrixRange(data);
        }
    }
}
/** Get the number of points selected */
function size(selection, data) {
    var range = toRange$1(selection, data);
    return range ? size$1(range) : 0;
}
/** Return whether the given point is within given selection */
function hasPoint(selection, data, point) {
    var range = toRange$1(selection, data);
    return range !== null && has$1(range, point);
}
/** Return whether the given row is entirely selected in given selection */
function hasEntireRow(selection, row) {
    return (isEntireRows(selection) && row >= selection.start && row <= selection.end);
}
/** Return whether the given column is entirely selected in given selection */
function hasEntireColumn(selection, column) {
    return (isEntireColumns(selection) &&
        column >= selection.start &&
        column <= selection.end);
}
/** Normalize given selection to given data matrix */
function normalize(selection, data) {
    if (selection) {
        if (is(selection)) {
            return normalizeRange(selection, data);
        }
        switch (selection.type) {
            case EntireType.Row: {
                return normalizeEntireRows(selection, data);
            }
            case EntireType.Column: {
                return normalizeEntireColumns(selection, data);
            }
        }
    }
    return selection;
}
/** Normalize given range to given data matrix */
function normalizeRange(range, data) {
    var dataRange = getMatrixRange(data);
    return mask(range, dataRange);
}
/** Normalize given entire rows selection to given data matrix */
function normalizeEntireRows(selection, data) {
    var count = getRowsCount(data);
    return createEntireRows(Math.max(selection.start, 0), Math.min(selection.end, count - 1));
}
/** Normalize given entire columns selection to given data matrix */
function normalizeEntireColumns(selection, data) {
    var count = getColumnsCount(data);
    return createEntireColumns(Math.max(selection.start, 0), Math.min(selection.end, count - 1));
}
/** Get selected points */
function getPoints(selection, data) {
    var range = toRange$1(selection, data);
    return range ? Array.from(iterate(range)) : [];
}
/** Get given selection from given data */
function getSelectionFromMatrix(selection, data) {
    var range = toRange$1(selection, data);
    return range ? getRangeFromMatrix(range, data) : [];
}
/** Modify given edge of given selection according to given active point and data matrix */
function modifyEdge(selection, active, data, edge) {
    if (active && selection) {
        if (is(selection)) {
            return modifyRangeEdge(selection, active, data, edge);
        }
        switch (selection.type) {
            case EntireType.Row: {
                return modifyEntireRowsEdge(selection, active, data, edge);
            }
            case EntireType.Column: {
                return modifyEntireColumnsEdge(selection, active, data, edge);
            }
        }
    }
    return selection;
}
/** Modify given edge of given entire rows selection according to given active point and active matrix */
function modifyEntireRowsEdge(selection, active, data, edge) {
    var _a, _b;
    if (edge === Direction.Left || edge === Direction.Right) {
        return selection;
    }
    var delta = edge === Direction.Top ? -1 : 1;
    var property = edge === Direction.Top ? "start" : "end";
    var oppositeProperty = property === "start" ? "end" : "start";
    var nextSelection;
    if (edge === Direction.Top
        ? selection.end > active.row
        : selection.start < active.row) {
        nextSelection = __assign(__assign({}, selection), (_a = {}, _a[oppositeProperty] = selection[oppositeProperty] + delta, _a));
    }
    else {
        nextSelection = __assign(__assign({}, selection), (_b = {}, _b[property] = selection[property] + delta, _b));
    }
    return normalizeEntireRows(nextSelection, data);
}
/** Modify given edge of given entire rows selection according to given active point and active matrix */
function modifyEntireColumnsEdge(selection, active, data, edge) {
    var _a, _b;
    if (edge === Direction.Top || edge === Direction.Bottom) {
        return selection;
    }
    var delta = edge === Direction.Left ? -1 : 1;
    var property = edge === Direction.Left ? "start" : "end";
    var oppositeProperty = property === "start" ? "end" : "start";
    var nextSelection;
    if (edge === Direction.Left
        ? selection.end > active.column
        : selection.start < active.column) {
        nextSelection = __assign(__assign({}, selection), (_a = {}, _a[oppositeProperty] = selection[oppositeProperty] + delta, _a));
    }
    else {
        nextSelection = __assign(__assign({}, selection), (_b = {}, _b[property] = selection[property] + delta, _b));
    }
    return normalizeEntireColumns(nextSelection, data);
}
/** Modify given edge of given range according to given active point and data matrix */
function modifyRangeEdge(range, active, data, edge) {
    var _a, _b, _c;
    var field = edge === Direction.Left || edge === Direction.Right ? "column" : "row";
    var key = edge === Direction.Left || edge === Direction.Top ? "start" : "end";
    var delta = key === "start" ? -1 : 1;
    var edgeOffsets = has$1(range, __assign(__assign({}, active), (_a = {}, _a[field] = active[field] + delta * -1, _a)));
    var keyToModify = edgeOffsets ? (key === "start" ? "end" : "start") : key;
    var nextRange = __assign(__assign({}, range), (_b = {}, _b[keyToModify] = __assign(__assign({}, range[keyToModify]), (_c = {}, _c[field] = range[keyToModify][field] + delta, _c)), _b));
    return normalizeRange(nextRange, data);
}
/** Get the point range of given matrix */
function getMatrixRange(data) {
    var maxPoint$1 = maxPoint(data);
    return create(ORIGIN, maxPoint$1);
}
/** Get a matrix of values in given range from given matrix */
function getRangeFromMatrix(range, matrix) {
    return slice(range.start, range.end, matrix);
}
/** Returns whether given value is a valid index */
function isIndex(value) {
    return Number.isInteger(value) && value >= 0;
}
/** Error thrown when passing a non-index value where index is expected */
var InvalidIndexError = /** @class */ (function (_super) {
    __extends(InvalidIndexError, _super);
    function InvalidIndexError(name) {
        return _super.call(this, name + " is not a valid index. It must be 0 or a positive integer") || this;
    }
    return InvalidIndexError;
}(Error));

/**
 * Immutable Set like interface of points
 */
/** Returns a boolean asserting whether an point is present with the given value in the Set object or not */
var has = function (set, point) {
    return has$3(point, set);
};
/** Creates a new set with all points that pass the test implemented by the provided function */
function filter(func, set) {
    return filter$1(function (_, point) { return func(point); }, set);
}
var minKey = function (object) {
    /* @ts-ignore*/
    return Math.min.apply(Math, __spreadArray([], __read(Object.keys(object))));
};
/** Returns the point on the minimal row in the minimal column in the set */
function min(set) {
    var row = minKey(set);
    return { row: row, column: minKey(set[row]) };
}
var maxKey = function (object) {
    // @ts-ignore
    return Math.max.apply(Math, __spreadArray([], __read(Object.keys(object))));
};
/** Returns the point on the maximal row in the maximal column in the set */
function max(set) {
    var row = maxKey(set);
    return { row: row, column: maxKey(set[row]) };
}
/** Creates a new PointSet instance from an array-like or iterable object */
function from(points) {
    return points.reduce(function (acc, point) { return set$1(point, true, acc); }, from$1([]));
}
/** Transform a point set to a range */
function toRange(set) {
    var start = min(set);
    var end = max(set);
    return create(start, end);
}

var FORMULA_VALUE_PREFIX = "=";
var FORMULA_REFERENCES = /\$?[A-Z]+\$?[0-9]+/g;
/** Returns whether given value is a formula */
function isFormulaValue(value) {
    return typeof value === "string" && value.startsWith(FORMULA_VALUE_PREFIX);
}
/** Extracts formula from value  */
function extractFormula(value) {
    return value.slice(1);
}
/**
 * For given formula returns the cell references
 * @param formula - formula to get references for
 */
function getReferences(formula) {
    var match = formula.match(FORMULA_REFERENCES);
    return match
        ? match.map(function (substr) {
            var _a = __read(extractLabel(substr), 2), row = _a[0], column = _a[1];
            return { row: row.index, column: column.index };
        })
        : [];
}

var PLAIN_TEXT_MIME = "text/plain";
var FOCUS_WITHIN_SELECTOR = ":focus-within";
/** Move the cursor of given input element to the input's end */
function moveCursorToEnd(el) {
    el.selectionStart = el.selectionEnd = el.value.length;
}
/**
 * Creates an array of numbers (positive and/or negative) progressing from start up to, but not including, end. A step of -1 is used if a negative start is specified without an end or step. If end is not specified, it's set to start with start then set to 0.
 * @param end - an integer number specifying at which position to stop (not included).
 * @param start - An integer number specifying at which position to start.
 * @param step - An integer number specifying the incrementation
 */
function range(end, start, step) {
    if (start === void 0) { start = 0; }
    if (step === void 0) { step = 1; }
    var array = [];
    if (Math.sign(end - start) === -1) {
        for (var element = start; element > end; element -= step) {
            array.push(element);
        }
        return array;
    }
    for (var element = start; element < end; element += step) {
        array.push(element);
    }
    return array;
}
/** Return whether given point is active */
function isActive(active, point) {
    return Boolean(active && isEqual(point, active));
}
/** Get the offset values of given element */
function getOffsetRect(element) {
    return {
        width: element.offsetWidth,
        height: element.offsetHeight,
        left: element.offsetLeft,
        top: element.offsetTop,
    };
}
/** Write given data to clipboard with given event */
function writeTextToClipboard(event, data) {
    var _a;
    (_a = event.clipboardData) === null || _a === void 0 ? void 0 : _a.setData(PLAIN_TEXT_MIME, data);
}
/** Read text from given clipboard event */
function readTextFromClipboard(event) {
    // @ts-ignore
    if (window.clipboardData && window.clipboardData.getData) {
        // @ts-ignore
        return window.clipboardData.getData("Text");
    }
    if (event.clipboardData && event.clipboardData.getData) {
        return event.clipboardData.getData(PLAIN_TEXT_MIME);
    }
    return "";
}
/** Get the dimensions of cell at point from state */
function getCellDimensions(point, rowDimensions, columnDimensions) {
    var cellRowDimensions = rowDimensions && rowDimensions[point.row];
    var cellColumnDimensions = columnDimensions && columnDimensions[point.column];
    return (cellRowDimensions &&
        cellColumnDimensions && __assign(__assign({}, cellRowDimensions), cellColumnDimensions));
}
/** Get the dimensions of a range of cells */
function getRangeDimensions(rowDimensions, columnDimensions, range) {
    var startDimensions = getCellDimensions(range.start, rowDimensions, columnDimensions);
    var endDimensions = getCellDimensions(range.end, rowDimensions, columnDimensions);
    return (startDimensions &&
        endDimensions && {
        width: endDimensions.left + endDimensions.width - startDimensions.left,
        height: endDimensions.top + endDimensions.height - startDimensions.top,
        top: startDimensions.top,
        left: startDimensions.left,
    });
}
/** Get the dimensions of selected */
function getSelectedDimensions(rowDimensions, columnDimensions, data, selected) {
    var range = toRange$1(selected, data);
    return range
        ? getRangeDimensions(rowDimensions, columnDimensions, range)
        : undefined;
}
/** Get the computed value of a cell. */
function getComputedValue(_a) {
    var cell = _a.cell, formulaParser = _a.formulaParser;
    if (cell === undefined) {
        return null;
    }
    if (isFormulaCell(cell)) {
        return getFormulaComputedValue({ cell: cell, formulaParser: formulaParser });
    }
    return cell.value;
}
/** Get the computed value of a formula cell */
function getFormulaComputedValue(_a) {
    var cell = _a.cell, formulaParser = _a.formulaParser;
    var formula = extractFormula(cell.value);
    var _b = formulaParser.parse(formula), result = _b.result, error = _b.error;
    return error || result;
}
/** Returns whether given cell contains a formula value */
function isFormulaCell(cell) {
    return isFormulaValue(cell.value);
}
/** Get given data as CSV */
function getCSV(data) {
    var valueMatrix = map(function (cell) { return (cell === null || cell === void 0 ? void 0 : cell.value) || ""; }, data);
    return join(valueMatrix);
}
/**
 * Calculate the rows and columns counts of a spreadsheet
 * @param data - the spreadsheet's data
 * @param rowLabels - the spreadsheet's row labels (if defined)
 * @param columnLabels - the spreadsheet's column labels (if defined)
 * @returns the rows and columns counts of a spreadsheet
 */
function calculateSpreadsheetSize(data, rowLabels, columnLabels) {
    var _a = getSize(data), columns = _a.columns, rows = _a.rows;
    return {
        rows: rowLabels ? Math.max(rows, rowLabels.length) : rows,
        columns: columnLabels ? Math.max(columns, columnLabels.length) : columns,
    };
}
/** Transform given point map to a point set */
function convertPointMapToPointSet(map) {
    return map$1(function () { return true; }, map);
}
/** Get the range of copied cells. If none are copied return null */
function getCopiedRange(copied, hasPasted) {
    if (hasPasted || isEmpty(copied)) {
        return null;
    }
    var set = convertPointMapToPointSet(copied);
    return toRange(set);
}
/** Tranform given hot-formula-parser coord to Point.Point */
function transformCoordToPoint(coord) {
    return { row: coord.row.index, column: coord.column.index };
}
/**
 * Get cell value for given point from given spreadsheet data with evaluated
 * cells using given formulaParser
 */
function getCellValue(formulaParser, data, point) {
    return getComputedValue({
        cell: get(point, data),
        formulaParser: formulaParser,
    });
}
/**
 * Get cell range value for given start and end points from given spreadsheet
 * data with evaluated cells using given formulaParser
 */
function getCellRangeValue(formulaParser, data, start, end) {
    return toArray(slice(start, end, data), function (cell) {
        return getComputedValue({
            cell: cell,
            formulaParser: formulaParser,
        });
    });
}
/** Should spreadsheet handle clipboard event */
function shouldHandleClipboardEvent(root, mode) {
    return root !== null && mode === "view" && isFocusedWithin(root);
}
function isFocusedWithin(element) {
    return element.matches(FOCUS_WITHIN_SELECTOR);
}

var Table = function (_a) {
    var children = _a.children, columns = _a.columns, hideColumnIndicators = _a.hideColumnIndicators;
    var columnCount = columns + (hideColumnIndicators ? 0 : 1);
    var columnNodes = range(columnCount).map(function (i) { return React.createElement("col", { key: i }); });
    return (React.createElement("table", { className: "Spreadsheet__table" },
        React.createElement("colgroup", null, columnNodes),
        React.createElement("tbody", null, children)));
};

var Row = function (props) { return React.createElement("tr", __assign({}, props)); };

var HeaderRow = function (props) { return React.createElement("tr", __assign({}, props)); };

var INITIAL_STATE = {
    active: null,
    mode: "view",
    rowDimensions: {},
    columnDimensions: {},
    lastChanged: null,
    hasPasted: false,
    cut: false,
    dragging: false,
    data: [],
    selected: null,
    copied: from$1([]),
    bindings: from$1([]),
    lastCommit: null,
};
var reducer = createReducer(INITIAL_STATE, function (builder) {
    builder.addCase(setData, function (state, action) {
        var data = action.payload.data;
        var nextActive = state.active && has$2(state.active, data) ? state.active : null;
        var nextSelected = normalize(state.selected, data);
        var nextBindings = map$1(function (bindings) {
            return filter(function (point) { return has$2(point, data); }, bindings);
        }, filter$1(function (_, point) { return has$2(point, data); }, state.bindings));
        return __assign(__assign({}, state), { data: data, active: nextActive, selected: nextSelected, bindings: nextBindings });
    });
    builder.addCase(select, function (state, action) {
        var point = action.payload.point;
        if (state.active && !isActive(state.active, point)) {
            return __assign(__assign({}, state), { selected: create(point, state.active), mode: "view" });
        }
    });
    builder.addCase(selectEntireTable, function (state) {
        return __assign(__assign({}, state), { selected: createEntireTable(), active: ORIGIN, mode: "view" });
    });
    builder.addCase(selectEntireColumn, function (state, action) {
        var _a = action.payload, column = _a.column, extend = _a.extend;
        var active = state.active;
        return __assign(__assign({}, state), { selected: extend && active
                ? createEntireColumns(active.column, column)
                : createEntireColumns(column, column), active: extend && active ? active : __assign(__assign({}, ORIGIN), { column: column }), mode: "view" });
    });
    builder.addCase(selectEntireRow, function (state, action) {
        var _a = action.payload, row = _a.row, extend = _a.extend;
        var active = state.active;
        return __assign(__assign({}, state), { selected: extend && active
                ? createEntireRows(active.row, row)
                : createEntireRows(row, row), active: extend && active ? active : __assign(__assign({}, ORIGIN), { row: row }), mode: "view" });
    });
    builder.addCase(activate, function (state, action) {
        var point = action.payload.point;
        return __assign(__assign({}, state), { selected: create(point, point), active: point, mode: isActive(state.active, point) ? "edit" : "view" });
    });
    builder.addCase(setCellData, function (state, action) {
        var _a = action.payload, active = _a.active, cellData = _a.data, getBindingsForCell = _a.getBindingsForCell;
        var bindings = getBindingsForCell(cellData, state.data);
        if (isActiveReadOnly(state)) {
            return;
        }
        return __assign(__assign({}, state), { mode: "edit", data: set(active, cellData, state.data), lastChanged: active, bindings: set$1(active, from(bindings), state.bindings) });
    });
    builder.addCase(setCellDimensions, function (state, action) {
        var _a, _b;
        var _c = action.payload, point = _c.point, dimensions = _c.dimensions;
        var prevRowDimensions = state.rowDimensions[point.row];
        var prevColumnDimensions = state.columnDimensions[point.column];
        if (prevRowDimensions &&
            prevColumnDimensions &&
            prevRowDimensions.top === dimensions.top &&
            prevRowDimensions.height === dimensions.height &&
            prevColumnDimensions.left === dimensions.left &&
            prevColumnDimensions.width === dimensions.width) {
            return;
        }
        return __assign(__assign({}, state), { rowDimensions: __assign(__assign({}, state.rowDimensions), (_a = {}, _a[point.row] = { top: dimensions.top, height: dimensions.height }, _a)), columnDimensions: __assign(__assign({}, state.columnDimensions), (_b = {}, _b[point.column] = { left: dimensions.left, width: dimensions.width }, _b)) });
    });
    builder.addCase(paste, function (state, action) {
        var text = action.payload.data;
        var active = state.active;
        if (!active) {
            return;
        }
        var copiedMatrix = split(text, function (value) { return ({ value: value }); });
        var copied = fromMatrix(copiedMatrix);
        var minPoint = min(copied);
        var copiedSize = getSize(copiedMatrix);
        var requiredSize = {
            rows: active.row + copiedSize.rows,
            columns: active.column + copiedSize.columns,
        };
        var paddedData = pad(state.data, requiredSize);
        var _a = reduce(function (acc, value, point) {
            var commit = acc.commit || [];
            var nextPoint = {
                row: point.row - minPoint.row + active.row,
                column: point.column - minPoint.column + active.column,
            };
            var nextData = state.cut ? unset(point, acc.data) : acc.data;
            if (state.cut) {
                commit = __spreadArray(__spreadArray([], __read(commit), false), [{ prevCell: value, nextCell: null }]);
            }
            if (!has$2(nextPoint, paddedData)) {
                return { data: nextData, commit: commit };
            }
            var currentValue = get(nextPoint, nextData) || null;
            commit = __spreadArray(__spreadArray([], __read(commit), false), [
                {
                    prevCell: currentValue,
                    nextCell: value,
                },
            ]);
            return {
                data: set(nextPoint, __assign(__assign({}, currentValue), value), nextData),
                commit: commit,
            };
        }, copied, { data: paddedData, commit: [] }), data = _a.data, commit = _a.commit;
        return __assign(__assign({}, state), { data: data, selected: create(active, {
                row: active.row + copiedSize.rows - 1,
                column: active.column + copiedSize.columns - 1,
            }), cut: false, hasPasted: true, mode: "view", lastCommit: commit });
    });
    builder.addCase(edit$1, edit);
    builder.addCase(view$1, view);
    builder.addCase(clear$1, clear);
    builder.addCase(blur$1, blur);
    builder.addCase(keyPress, function (state, action) {
        var event = action.payload.event;
        if (isActiveReadOnly(state) || event.metaKey) {
            return;
        }
        if (state.mode === "view" && state.active) {
            return edit(state);
        }
        return;
    });
    builder.addCase(keyDown, function (state, action) {
        var event = action.payload.event;
        var handler = getKeyDownHandler(state, event);
        if (handler) {
            return __assign(__assign({}, state), handler(state, event));
        }
        return;
    });
    builder.addCase(dragStart, function (state, action) {
        return __assign(__assign({}, state), { dragging: true });
    });
    builder.addCase(dragEnd, function (state, action) {
        return __assign(__assign({}, state), { dragging: false });
    });
    builder.addCase(commit$1, function (state, action) {
        var changes = action.payload.changes;
        return __assign(__assign({}, state), commit(changes));
    });
    builder.addMatcher(function (action) {
        return action.type === copy.type || action.type === cut.type;
    }, function (state, action) {
        var selectedPoints = getPoints(state.selected, state.data);
        return __assign(__assign({}, state), { copied: selectedPoints.reduce(function (acc, point) {
                var cell = get(point, state.data);
                return cell === undefined ? acc : set$1(point, cell, acc);
            }, from$1([])), cut: action.type === cut.type, hasPasted: false });
    });
});
// Shared reducers
function edit(state) {
    if (isActiveReadOnly(state)) {
        return;
    }
    return __assign(__assign({}, state), { mode: "edit" });
}
function clear(state) {
    if (!state.active) {
        return;
    }
    var canClearCell = function (cell) {
        return cell && !cell.readOnly;
    };
    var clearCell = function (cell) {
        if (!canClearCell(cell)) {
            return cell;
        }
        return Object.assign({}, cell, { value: undefined });
    };
    var selectedPoints = getPoints(state.selected, state.data);
    var changes = selectedPoints.map(function (point) {
        var cell = get(point, state.data);
        return __assign(__assign({}, state), { prevCell: cell || null, nextCell: clearCell(cell) || null });
    });
    var newData = selectedPoints.reduce(function (acc, point) {
        var cell = get(point, acc);
        return set(point, clearCell(cell), acc);
    }, state.data);
    return __assign(__assign(__assign({}, state), { data: newData }), commit(changes));
}
function blur(state) {
    return __assign(__assign({}, state), { active: null, selected: null });
}
function view(state) {
    return __assign(__assign({}, state), { mode: "view" });
}
function commit(changes) {
    return { lastCommit: changes };
}
// Utility
var go = function (rowDelta, columnDelta) {
    return function (state) {
        if (!state.active) {
            return;
        }
        var nextActive = {
            row: state.active.row + rowDelta,
            column: state.active.column + columnDelta,
        };
        if (!has$2(nextActive, state.data)) {
            return __assign(__assign({}, state), { mode: "view" });
        }
        return __assign(__assign({}, state), { active: nextActive, selected: create(nextActive, nextActive), mode: "view" });
    };
};
var keyDownHandlers = {
    ArrowUp: go(-1, 0),
    ArrowDown: go(+1, 0),
    ArrowLeft: go(0, -1),
    ArrowRight: go(0, +1),
    Tab: go(0, +1),
    Enter: edit,
    Backspace: clear,
    Delete: clear,
    Escape: blur,
};
var editKeyDownHandlers = {
    Escape: view,
    Tab: keyDownHandlers.Tab,
    Enter: keyDownHandlers.ArrowDown,
};
var editShiftKeyDownHandlers = {
    Tab: go(0, -1),
};
var shiftKeyDownHandlers = {
    ArrowUp: function (state) { return (__assign(__assign({}, state), { selected: modifyEdge(state.selected, state.active, state.data, Direction.Top) })); },
    ArrowDown: function (state) { return (__assign(__assign({}, state), { selected: modifyEdge(state.selected, state.active, state.data, Direction.Bottom) })); },
    ArrowLeft: function (state) { return (__assign(__assign({}, state), { selected: modifyEdge(state.selected, state.active, state.data, Direction.Left) })); },
    ArrowRight: function (state) { return (__assign(__assign({}, state), { selected: modifyEdge(state.selected, state.active, state.data, Direction.Right) })); },
    Tab: go(0, -1),
};
var shiftMetaKeyDownHandlers = {};
var metaKeyDownHandlers = {};
function getKeyDownHandler(state, event) {
    var key = event.key;
    var handlers;
    // Order matters
    if (state.mode === "edit") {
        if (event.shiftKey) {
            handlers = editShiftKeyDownHandlers;
        }
        else {
            handlers = editKeyDownHandlers;
        }
    }
    else if (event.shiftKey && event.metaKey) {
        handlers = shiftMetaKeyDownHandlers;
    }
    else if (event.shiftKey) {
        handlers = shiftKeyDownHandlers;
    }
    else if (event.metaKey) {
        handlers = metaKeyDownHandlers;
    }
    else {
        handlers = keyDownHandlers;
    }
    return handlers[key];
}
/** Returns whether the reducer has a handler for the given keydown event */
function hasKeyDownHandler(state, event) {
    return getKeyDownHandler(state, event) !== undefined;
}
/** Returns whether the active cell is read only */
function isActiveReadOnly(state) {
    var activeCell = getActive(state);
    return Boolean(activeCell === null || activeCell === void 0 ? void 0 : activeCell.readOnly);
}
/** Gets active cell from given state */
function getActive(state) {
    var activeCell = state.active && get(state.active, state.data);
    return activeCell || null;
}

var context = createContext([INITIAL_STATE, function () { }]);

function useDispatch() {
    return useContextSelector(context, function (_a) {
        var _b = __read(_a, 2); _b[0]; var dispatch = _b[1];
        return dispatch;
    });
}

function useSelector(selector) {
    return useContextSelector(context, function (_a) {
        var _b = __read(_a, 1), state = _b[0];
        return selector(state);
    });
}

var CornerIndicator = function (_a) {
    var selected = _a.selected, onSelect = _a.onSelect;
    var handleClick = React.useCallback(function () {
        onSelect();
    }, [onSelect]);
    return (React.createElement("th", { className: classNames("Spreadsheet__header", {
            "Spreadsheet__header--selected": selected,
        }), onClick: handleClick, tabIndex: 0 }));
};
var enhance$3 = function (CornerIndicatorComponent) {
    return function CornerIndicatorWrapper(props) {
        var dispatch = useDispatch();
        var selectEntireTable$1 = React.useCallback(function () { return dispatch(selectEntireTable()); }, [dispatch]);
        var selected = useSelector(function (state) {
            return isEntireTable(state.selected);
        });
        return (React.createElement(CornerIndicatorComponent, __assign({}, props, { selected: selected, onSelect: selectEntireTable$1 })));
    };
};

var ColumnIndicator = function (_a) {
    var column = _a.column, label = _a.label, selected = _a.selected, onSelect = _a.onSelect;
    var handleClick = React.useCallback(function (event) {
        onSelect(column, event.shiftKey);
    }, [onSelect, column]);
    return (React.createElement("th", { className: classNames("Spreadsheet__header", {
            "Spreadsheet__header--selected": selected,
        }), onClick: handleClick, tabIndex: 0 }, label !== undefined ? label : columnIndexToLabel(String(column))));
};
var enhance$2 = function (ColumnIndicatorComponent) {
    return function ColumnIndicatorWrapper(props) {
        var dispatch = useDispatch();
        var selectEntireColumn$1 = React.useCallback(function (column, extend) {
            return dispatch(selectEntireColumn(column, extend));
        }, [dispatch]);
        var selected = useSelector(function (state) {
            return hasEntireColumn(state.selected, props.column) ||
                isEntireTable(state.selected);
        });
        return (React.createElement(ColumnIndicatorComponent, __assign({}, props, { selected: selected, onSelect: selectEntireColumn$1 })));
    };
};

var RowIndicator = function (_a) {
    var row = _a.row, label = _a.label, selected = _a.selected, onSelect = _a.onSelect;
    var handleClick = React.useCallback(function (event) {
        onSelect(row, event.shiftKey);
    }, [onSelect, row]);
    return (React.createElement("th", { className: classNames("Spreadsheet__header", {
            "Spreadsheet__header--selected": selected,
        }), onClick: handleClick, tabIndex: 0 }, label !== undefined ? label : row + 1));
};
var enhance$1 = function (RowIndicatorComponent) {
    return function RowIndicatorWrapper(props) {
        var dispatch = useDispatch();
        var selected = useSelector(function (state) {
            return hasEntireRow(state.selected, props.row) ||
                isEntireTable(state.selected);
        });
        var selectEntireRow$1 = React.useCallback(function (row, extend) {
            return dispatch(selectEntireRow(row, extend));
        }, [dispatch]);
        return (React.createElement(RowIndicatorComponent, __assign({}, props, { selected: selected, onSelect: selectEntireRow$1 })));
    };
};

var Cell = function (_a) {
    var row = _a.row, column = _a.column, DataViewer = _a.DataViewer, formulaParser = _a.formulaParser, selected = _a.selected, active = _a.active, dragging = _a.dragging, mode = _a.mode, data = _a.data, select = _a.select, activate = _a.activate, setCellDimensions = _a.setCellDimensions, setCellData = _a.setCellData;
    var rootRef = React.useRef(null);
    var point = React.useMemo(function () { return ({
        row: row,
        column: column,
    }); }, [row, column]);
    var handleMouseDown = React.useCallback(function (event) {
        if (mode === "view") {
            setCellDimensions(point, getOffsetRect(event.currentTarget));
            if (event.shiftKey) {
                select(point);
            }
            else {
                activate(point);
            }
        }
    }, [mode, setCellDimensions, point, select, activate]);
    var handleMouseOver = React.useCallback(function (event) {
        if (dragging) {
            setCellDimensions(point, getOffsetRect(event.currentTarget));
            select(point);
        }
    }, [setCellDimensions, select, dragging, point]);
    React.useEffect(function () {
        var root = rootRef.current;
        if (selected && root) {
            setCellDimensions(point, getOffsetRect(root));
        }
        if (root && active && mode === "view") {
            root.focus();
        }
    }, [setCellDimensions, selected, active, mode, point, data]);
    if (data && data.DataViewer) {
        // @ts-ignore
        DataViewer = data.DataViewer;
    }
    return (React.createElement("td", { ref: rootRef, className: classNames("Spreadsheet__cell", data === null || data === void 0 ? void 0 : data.className, {
            "Spreadsheet__cell--readonly": data === null || data === void 0 ? void 0 : data.readOnly,
        }), onMouseOver: handleMouseOver, onMouseDown: handleMouseDown, tabIndex: 0 },
        React.createElement(DataViewer, { row: row, column: column, cell: data, formulaParser: formulaParser, setCellData: setCellData })));
};
var enhance = function (CellComponent) {
    return function CellWrapper(props) {
        var row = props.row, column = props.column;
        var dispatch = useDispatch();
        var setCellData$1 = React.useCallback(function (data) {
            return dispatch(setCellData({ column: column, row: row }, data, props.getBindingsForCell));
        }, [dispatch, props.getBindingsForCell, column, row]);
        var select$1 = React.useCallback(function (point) { return dispatch(select(point)); }, [dispatch]);
        var activate$1 = React.useCallback(function (point) { return dispatch(activate(point)); }, [dispatch]);
        var setCellDimensions$1 = React.useCallback(function (point, dimensions) {
            return dispatch(setCellDimensions(point, dimensions));
        }, [dispatch]);
        var active = useSelector(function (state) {
            return isActive(state.active, {
                row: row,
                column: column,
            });
        });
        var mode = useSelector(function (state) { return (active ? state.mode : "view"); });
        var data = useSelector(function (state) {
            return get({ row: row, column: column }, state.data);
        });
        var selected = useSelector(function (state) {
            return hasPoint(state.selected, state.data, { row: row, column: column });
        });
        var dragging = useSelector(function (state) { return state.dragging; });
        var copied = useSelector(function (state) {
            return has$3({ row: row, column: column }, state.copied);
        });
        // Use only to trigger re-render when cell bindings change
        useSelector(function (state) {
            var point = { row: row, column: column };
            var cellBindings = get$1(point, state.bindings);
            return cellBindings &&
                state.lastChanged &&
                has(cellBindings, state.lastChanged)
                ? {}
                : null;
        });
        return (React.createElement(CellComponent, __assign({}, props, { selected: selected, active: active, copied: copied, dragging: dragging, mode: mode, data: data, select: select$1, activate: activate$1, setCellDimensions: setCellDimensions$1, setCellData: setCellData$1 })));
    };
};

var TRUE_TEXT = "TRUE";
var FALSE_TEXT = "FALSE";
/** The default Spreadsheet DataViewer component */
var DataViewer = function (_a) {
    var cell = _a.cell, formulaParser = _a.formulaParser;
    var value = getComputedValue({ cell: cell, formulaParser: formulaParser });
    return typeof value === "boolean" ? (React.createElement("span", { className: "Spreadsheet__data-viewer Spreadsheet__data-viewer--boolean" }, convertBooleanToText(value))) : (React.createElement("span", { className: "Spreadsheet__data-viewer" }, value));
};
function convertBooleanToText(value) {
    return value ? TRUE_TEXT : FALSE_TEXT;
}

/** The default Spreadsheet DataEditor component */
var DataEditor = function (_a) {
    var _b;
    var onChange = _a.onChange, cell = _a.cell;
    var inputRef = React.useRef(null);
    var handleChange = React.useCallback(function (event) {
        onChange(__assign(__assign({}, cell), { value: event.target.value }));
    }, [onChange, cell]);
    React.useEffect(function () {
        if (inputRef.current) {
            moveCursorToEnd(inputRef.current);
        }
    }, [inputRef]);
    var value = (_b = cell === null || cell === void 0 ? void 0 : cell.value) !== null && _b !== void 0 ? _b : "";
    return (React.createElement("div", { className: "Spreadsheet__data-editor" },
        React.createElement("input", { ref: inputRef, type: "text", onChange: handleChange, value: value, autoFocus: true })));
};

var ActiveCell = function (props) {
    var rootRef = React.useRef(null);
    var getBindingsForCell = props.getBindingsForCell;
    var dispatch = useDispatch();
    var setCellData$1 = React.useCallback(function (active, data) {
        return dispatch(setCellData(active, data, getBindingsForCell));
    }, [dispatch, getBindingsForCell]);
    var edit = React.useCallback(function () { return dispatch(edit$1()); }, [dispatch]);
    var commit = React.useCallback(function (changes) {
        return dispatch(commit$1(changes));
    }, [dispatch]);
    var view = React.useCallback(function () {
        dispatch(view$1());
    }, [dispatch]);
    var active = useSelector(function (state) { return state.active; });
    var mode = useSelector(function (state) { return state.mode; });
    var cell = useSelector(function (state) {
        return state.active ? get(state.active, state.data) : undefined;
    });
    var dimensions = useSelector(function (state) {
        return active
            ? getCellDimensions(active, state.rowDimensions, state.columnDimensions)
            : undefined;
    });
    var hidden = React.useMemo(function () { return !active || !dimensions; }, [active, dimensions]);
    var initialCellRef = React.useRef(undefined);
    var prevActiveRef = React.useRef(null);
    var prevCellRef = React.useRef(undefined);
    var handleChange = React.useCallback(function (cell) {
        if (!active) {
            return;
        }
        setCellData$1(active, cell);
    }, [setCellData$1, active]);
    React.useEffect(function () {
        var root = rootRef.current;
        if (!hidden && root) {
            root.focus();
        }
    }, [rootRef, hidden]);
    React.useEffect(function () {
        var prevActive = prevActiveRef.current;
        var prevCell = prevCellRef.current;
        prevActiveRef.current = active;
        prevCellRef.current = cell;
        if (!prevActive || !prevCell) {
            return;
        }
        // Commit
        var coordsChanged = (active === null || active === void 0 ? void 0 : active.row) !== prevActive.row || (active === null || active === void 0 ? void 0 : active.column) !== prevActive.column;
        var exitedEditMode = mode !== "edit";
        if (coordsChanged || exitedEditMode) {
            var initialCell = initialCellRef.current;
            if (prevCell !== initialCell) {
                commit([
                    {
                        prevCell: initialCell || null,
                        nextCell: prevCell,
                    },
                ]);
            }
            else if (!coordsChanged && cell !== prevCell) {
                commit([
                    {
                        prevCell: prevCell,
                        nextCell: cell || null,
                    },
                ]);
            }
            initialCellRef.current = cell;
        }
    });
    var DataEditor = (cell && cell.DataEditor) || props.DataEditor;
    var readOnly = cell && cell.readOnly;
    return hidden ? null : (React.createElement("div", { ref: rootRef, className: classNames("Spreadsheet__active-cell", "Spreadsheet__active-cell--" + mode), style: dimensions, onClick: mode === "view" && !readOnly ? edit : undefined, tabIndex: 0 }, mode === "edit" && active && (React.createElement(DataEditor, { row: active.row, column: active.column, cell: cell, 
        // @ts-ignore
        onChange: handleChange, exitEditMode: view }))));
};

var FloatingRect = function (_a) {
    var _b;
    var dimensions = _a.dimensions, dragging = _a.dragging, hidden = _a.hidden, variant = _a.variant;
    var _c = dimensions || {}, width = _c.width, height = _c.height, top = _c.top, left = _c.left;
    return (React.createElement("div", { className: classNames("Spreadsheet__floating-rect", (_b = {},
            _b["Spreadsheet__floating-rect--" + variant] = variant,
            _b["Spreadsheet__floating-rect--dragging"] = dragging,
            _b["Spreadsheet__floating-rect--hidden"] = hidden,
            _b)), style: { width: width, height: height, top: top, left: left } }));
};

var Selected = function () {
    var selected = useSelector(function (state) { return state.selected; });
    var dimensions = useSelector(function (state) {
        return selected &&
            getSelectedDimensions(state.rowDimensions, state.columnDimensions, state.data, state.selected);
    });
    var dragging = useSelector(function (state) { return state.dragging; });
    var hidden = useSelector(function (state) { return size(state.selected, state.data) < 2; });
    return (React.createElement(FloatingRect, { variant: "selected", dimensions: dimensions, dragging: dragging, hidden: hidden }));
};

var Copied = function () {
    var range = useSelector(function (state) {
        return getCopiedRange(state.copied, state.hasPasted);
    });
    var dimensions = useSelector(function (state) {
        return range &&
            getRangeDimensions(state.rowDimensions, state.columnDimensions, range);
    });
    var hidden = range === null;
    return (React.createElement(FloatingRect, { variant: "copied", dimensions: dimensions, hidden: hidden, dragging: false }));
};

/**
 * For given cell and spreadsheet data returns the cells affecting the cell value
 * @param cell - cell to get bindings for
 * @param data - spreadsheet data the cell relates to
 * @returns an array of coordinates in the given spreadsheet data of the cells that affect the given cell
 */
var getBindingsForCell = function (cell, data) {
    if (!isFormulaValue(cell.value)) {
        return [];
    }
    var formula = cell.value;
    var references = getReferences(formula);
    // Recursively get references to dependencies
    return flatMap(references, function (coords) {
        var dependency = get(coords, data);
        var dependencyBindings = dependency
            ? getBindingsForCell(dependency, data)
            : [];
        return __spreadArray([coords], __read(dependencyBindings));
    });
};

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = ".Spreadsheet {\n  --background-color: white;\n  --text-color: black;\n  --readonly-text-color: rgba(0, 0, 0, 0.4);\n  --outline-color: #4285f4;\n  --outline-background-color: rgba(160, 195, 255, 0.2);\n  --border-color: hsl(2deg, 0%, 91%);\n  --header-background-color: rgba(0, 0, 0, 0.04);\n  --elevation: 0 2px 5px rgba(0, 0, 0, 0.4);\n\n  position: relative;\n  overflow: visible;\n  background: var(--background-color);\n  color: var(--text-color);\n  display: inline-block;\n}\n\n.Spreadsheet--dark-mode {\n  --background-color: black;\n  --text-color: white;\n  --readonly-text-color: rgba(255, 255, 255, 0.4);\n  --header-background-color: rgba(255, 255, 255, 0.04);\n  --border-color: hsl(2deg, 0%, 19%);\n}\n\n.Spreadsheet__active-cell {\n  position: absolute;\n  border: 2px solid var(--outline-color);\n  box-sizing: border-box;\n}\n\n.Spreadsheet__active-cell--edit {\n  background: var(--background-color);\n  box-shadow: var(--elevation);\n}\n\n.Spreadsheet__table {\n  border-collapse: collapse;\n  table-layout: fixed;\n}\n\n.Spreadsheet__cell,\n.Spreadsheet__active-cell {\n  cursor: cell;\n}\n\n.Spreadsheet__cell {\n  outline: none;\n}\n\n.Spreadsheet__cell--readonly {\n  color: var(--readonly-text-color);\n}\n\n.Spreadsheet__cell,\n.Spreadsheet__header {\n  min-width: 6em;\n  min-height: 1.9em;\n  height: 1.9em;\n  max-height: 1.9em;\n  border: 1px solid var(--border-color);\n  overflow: hidden;\n  word-break: keep-all;\n  white-space: nowrap;\n  text-align: left;\n  box-sizing: border-box;\n  user-select: none;\n}\n\n.Spreadsheet__header {\n  background: var(--header-background-color);\n  color: var(--readonly-text-color);\n  text-align: center;\n  font: inherit;\n}\n\n.Spreadsheet__header--selected {\n  background: #5f6268;\n  color: #fff;\n}\n\n.Spreadsheet__header,\n.Spreadsheet__data-viewer,\n.Spreadsheet__data-editor input {\n  padding: 4px;\n  box-sizing: border-box;\n}\n\n.Spreadsheet__data-editor,\n.Spreadsheet__data-editor input {\n  width: 100%;\n  height: 100%;\n}\n\n.Spreadsheet__data-editor input {\n  font: inherit;\n  color: inherit;\n  background: none;\n  border: none;\n  outline: none;\n  margin: 0;\n}\n\n.Spreadsheet__data-viewer--boolean {\n  text-align: center;\n}\n\n.Spreadsheet__floating-rect {\n  position: absolute;\n  pointer-events: none;\n  box-sizing: border-box;\n}\n\n.Spreadsheet__floating-rect--hidden {\n  display: none;\n}\n\n.Spreadsheet__floating-rect--selected {\n  background: var(--outline-background-color);\n  border: 2px var(--outline-color) solid;\n}\n\n.Spreadsheet__floating-rect--dragging {\n  border: none;\n}\n\n.Spreadsheet__floating-rect--copied {\n  border: 2px var(--outline-color) dashed;\n}\n";
styleInject(css_248z);

/**
 * The Spreadsheet component
 */
var Spreadsheet = function (props) {
    var className = props.className, darkMode = props.darkMode, columnLabels = props.columnLabels, rowLabels = props.rowLabels, hideColumnIndicators = props.hideColumnIndicators, hideRowIndicators = props.hideRowIndicators, onKeyDown = props.onKeyDown, _a = props.Table, Table$1 = _a === void 0 ? Table : _a, _b = props.Row, Row$1 = _b === void 0 ? Row : _b, _c = props.HeaderRow, HeaderRow$1 = _c === void 0 ? HeaderRow : _c, _d = props.DataEditor, DataEditor$1 = _d === void 0 ? DataEditor : _d, _e = props.DataViewer, DataViewer$1 = _e === void 0 ? DataViewer : _e, _f = props.getBindingsForCell, getBindingsForCell$1 = _f === void 0 ? getBindingsForCell : _f, _g = props.onChange, onChange = _g === void 0 ? function () { } : _g, _h = props.onModeChange, onModeChange = _h === void 0 ? function () { } : _h, _j = props.onSelect, onSelect = _j === void 0 ? function () { } : _j, _k = props.onActivate, onActivate = _k === void 0 ? function () { } : _k, _l = props.onBlur, onBlur = _l === void 0 ? function () { } : _l, _m = props.onCellCommit, onCellCommit = _m === void 0 ? function () { } : _m;
    var initialState = React.useMemo(function () {
        return (__assign(__assign({}, INITIAL_STATE), { data: props.data }));
    }, [props.data]);
    var reducerElements = React.useReducer(reducer, initialState);
    var _o = __read(reducerElements, 2), state = _o[0], dispatch = _o[1];
    var size = React.useMemo(function () {
        return calculateSpreadsheetSize(state.data, rowLabels, columnLabels);
    }, [state.data, rowLabels, columnLabels]);
    var mode = state.mode;
    var rootRef = React.useRef(null);
    var prevStateRef = React.useRef(__assign(__assign({}, INITIAL_STATE), { data: props.data, selected: null, copied: from$1([]), bindings: from$1([]), lastCommit: null }));
    var copy$1 = React.useCallback(function () { return dispatch(copy()); }, [dispatch]);
    var cut$1 = React.useCallback(function () { return dispatch(cut()); }, [dispatch]);
    var paste$1 = React.useCallback(function (data) { return dispatch(paste(data)); }, [dispatch]);
    var onKeyDownAction = React.useCallback(function (event) { return dispatch(keyDown(event)); }, [dispatch]);
    var onKeyPress = React.useCallback(function (event) { return dispatch(keyPress(event)); }, [dispatch]);
    var onDragStart = React.useCallback(function () { return dispatch(dragStart()); }, [dispatch]);
    var onDragEnd = React.useCallback(function () { return dispatch(dragEnd()); }, [dispatch]);
    var setData$1 = React.useCallback(function (data) { return dispatch(setData(data)); }, [dispatch]);
    var blur = React.useCallback(function () { return dispatch(blur$1()); }, [dispatch]);
    React.useEffect(function () {
        var e_1, _a;
        var prevState = prevStateRef.current;
        if (state.lastCommit && state.lastCommit !== prevState.lastCommit) {
            try {
                for (var _b = __values(state.lastCommit), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var change = _c.value;
                    onCellCommit(change.prevCell, change.nextCell, state.lastChanged);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b["return"])) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
        }
        if (state.data !== prevState.data) {
            // Call on change only if the data change internal
            if (state.data !== props.data) {
                onChange(state.data);
            }
        }
        if (state.selected !== prevState.selected) {
            var points = getPoints(state.selected, state.data);
            onSelect(points);
        }
        if (state.mode !== prevState.mode) {
            onModeChange(state.mode);
        }
        if (state.active !== prevState.active) {
            if (state.active) {
                onActivate(state.active);
            }
            else {
                var root = rootRef.current;
                if (root && isFocusedWithin(root) && document.activeElement) {
                    document.activeElement.blur();
                }
                onBlur();
            }
        }
        prevStateRef.current = state;
    }, [
        props.data,
        state,
        onActivate,
        onBlur,
        onCellCommit,
        onChange,
        onModeChange,
        onSelect,
        rowLabels,
        columnLabels,
    ]);
    React.useEffect(function () {
        var prevState = prevStateRef.current;
        if (props.data !== prevState.data) {
            setData$1(props.data);
        }
    }, [props.data, setData$1]);
    var clip = React.useCallback(function (event) {
        var data = state.data, selected = state.selected;
        var selectedData = getSelectionFromMatrix(selected, data);
        var csv = getCSV(selectedData);
        writeTextToClipboard(event, csv);
    }, [state]);
    var handleCut = React.useCallback(function (event) {
        if (shouldHandleClipboardEvent(rootRef.current, mode)) {
            event.preventDefault();
            event.stopPropagation();
            clip(event);
            cut$1();
        }
    }, [mode, clip, cut$1]);
    var handleCopy = React.useCallback(function (event) {
        if (shouldHandleClipboardEvent(rootRef.current, mode)) {
            event.preventDefault();
            event.stopPropagation();
            clip(event);
            copy$1();
        }
    }, [mode, clip, copy$1]);
    var handlePaste = React.useCallback(function (event) {
        if (shouldHandleClipboardEvent(rootRef.current, mode)) {
            event.preventDefault();
            event.stopPropagation();
            if (event.clipboardData) {
                var text = readTextFromClipboard(event);
                paste$1(text);
            }
        }
    }, [mode, paste$1]);
    var handleKeyDown = React.useCallback(function (event) {
        event.persist();
        if (onKeyDown) {
            onKeyDown(event);
        }
        // Do not use event in case preventDefault() was called inside onKeyDown
        if (!event.defaultPrevented) {
            // Only disable default behavior if an handler exist
            if (hasKeyDownHandler(state, event)) {
                event.nativeEvent.preventDefault();
            }
            onKeyDownAction(event);
        }
    }, [state, onKeyDown, onKeyDownAction]);
    var handleMouseUp = React.useCallback(function () {
        onDragEnd();
        document.removeEventListener("mouseup", handleMouseUp);
    }, [onDragEnd]);
    var handleMouseMove = React.useCallback(function (event) {
        if (!state.dragging && event.buttons === 1) {
            onDragStart();
            document.addEventListener("mouseup", handleMouseUp);
        }
    }, [state, onDragStart, handleMouseUp]);
    var handleBlur = React.useCallback(function (event) {
        /**
         * Focus left self, Not triggered when swapping focus between children
         * @see https://reactjs.org/docs/events.html#detecting-focus-entering-and-leaving
         */
        if (!event.currentTarget.contains(event.relatedTarget)) {
            blur();
        }
    }, [blur]);
    var formulaParser = React.useMemo(function () {
        return props.formulaParser || new Parser();
    }, [props.formulaParser]);
    var Cell$1 = React.useMemo(function () {
        // @ts-ignore
        return enhance(props.Cell || Cell);
    }, [props.Cell]);
    var CornerIndicator$1 = React.useMemo(function () {
        return enhance$3(props.CornerIndicator || CornerIndicator);
    }, [props.CornerIndicator]);
    var RowIndicator$1 = React.useMemo(function () { return enhance$1(props.RowIndicator || RowIndicator); }, [props.RowIndicator]);
    var ColumnIndicator$1 = React.useMemo(function () {
        return enhance$2(props.ColumnIndicator || ColumnIndicator);
    }, [props.ColumnIndicator]);
    React.useEffect(function () {
        document.addEventListener("cut", handleCut);
        document.addEventListener("copy", handleCopy);
        document.addEventListener("paste", handlePaste);
        return function () {
            document.removeEventListener("cut", handleCut);
            document.removeEventListener("copy", handleCopy);
            document.removeEventListener("paste", handlePaste);
        };
    }, [handleCut, handleCopy, handlePaste]);
    React.useEffect(function () {
        formulaParser.on("callCellValue", function (cellCoord, done) {
            var value;
            try {
                var point = transformCoordToPoint(cellCoord);
                var data = state.data;
                value = getCellValue(formulaParser, data, point);
            }
            catch (error) {
                console.error(error);
            }
            finally {
                done(value);
            }
        });
        formulaParser.on("callRangeValue", function (startCellCoord, endCellCoord, done) {
            var startPoint = transformCoordToPoint(startCellCoord);
            var endPoint = transformCoordToPoint(endCellCoord);
            var data = state.data;
            var values;
            try {
                values = getCellRangeValue(formulaParser, data, startPoint, endPoint);
            }
            catch (error) {
                console.error(error);
            }
            finally {
                done(values);
            }
        });
    }, [formulaParser, state, handleCut, handleCopy, handlePaste]);
    var tableNode = React.useMemo(function () { return (React.createElement(Table$1, { columns: size.columns, hideColumnIndicators: hideColumnIndicators },
        React.createElement(HeaderRow$1, null,
            !hideRowIndicators && !hideColumnIndicators && React.createElement(CornerIndicator$1, null),
            !hideColumnIndicators &&
                range(size.columns).map(function (columnNumber) {
                    return columnLabels ? (React.createElement(ColumnIndicator$1, { key: columnNumber, column: columnNumber, label: columnNumber in columnLabels
                            ? columnLabels[columnNumber]
                            : null })) : (React.createElement(ColumnIndicator$1, { key: columnNumber, column: columnNumber }));
                })),
        range(size.rows).map(function (rowNumber) { return (React.createElement(Row$1, { key: rowNumber, row: rowNumber },
            !hideRowIndicators &&
                (rowLabels ? (React.createElement(RowIndicator$1, { key: rowNumber, row: rowNumber, label: rowNumber in rowLabels ? rowLabels[rowNumber] : null })) : (React.createElement(RowIndicator$1, { key: rowNumber, row: rowNumber }))),
            range(size.columns).map(function (columnNumber) { return (React.createElement(Cell$1, { key: columnNumber, row: rowNumber, column: columnNumber, 
                // @ts-ignore
                DataViewer: DataViewer$1, formulaParser: formulaParser, 
                // @ts-ignore
                getBindingsForCell: getBindingsForCell$1 })); }))); }))); }, [
        Table$1,
        size.rows,
        size.columns,
        hideColumnIndicators,
        Row$1,
        HeaderRow$1,
        hideRowIndicators,
        CornerIndicator$1,
        columnLabels,
        ColumnIndicator$1,
        rowLabels,
        RowIndicator$1,
        Cell$1,
        DataViewer$1,
        formulaParser,
        getBindingsForCell$1,
    ]);
    var activeCellNode = React.useMemo(function () { return (React.createElement(ActiveCell
    // @ts-ignore
    , { 
        // @ts-ignore
        DataEditor: DataEditor$1, 
        // @ts-ignore
        getBindingsForCell: getBindingsForCell$1 })); }, [DataEditor$1, getBindingsForCell$1]);
    var rootNode = React.useMemo(function () { return (React.createElement("div", { ref: rootRef, className: classNames("Spreadsheet", className, {
            "Spreadsheet--dark-mode": darkMode,
        }), onKeyPress: onKeyPress, onKeyDown: handleKeyDown, onMouseMove: handleMouseMove, onBlur: handleBlur },
        tableNode,
        activeCellNode,
        React.createElement(Selected, null),
        React.createElement(Copied, null))); }, [
        className,
        darkMode,
        onKeyPress,
        handleKeyDown,
        handleMouseMove,
        handleBlur,
        tableNode,
        activeCellNode,
    ]);
    return (React.createElement(context.Provider, { value: reducerElements }, rootNode));
};

export { DataEditor, DataViewer, Spreadsheet, createEmpty as createEmptyMatrix, Spreadsheet as default, getComputedValue };
//# sourceMappingURL=index.js.map
