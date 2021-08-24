'use strict';

var _arrays = require('./01_arrays.js');

var arrays = _interopRequireWildcard(_arrays);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function getDefaultArray() {
    return [1, 2, 3, 4];
}

describe('arrays', function () {
    var a = getDefaultArray();

    beforeEach(function () {
        a = getDefaultArray();
    });

    test('you should be able to add the values of an array', function () {
        expect(arrays.sum(a)).toEqual(10);
    });

    test('you should be able to concatenate arrays', function () {
        var b = ['a', 'b'];
        var c = ['c', 1];
        var result = arrays.concat(a, b, c);
        expect(result).toHaveLength(8);
        expect(result).toEqual([1, 2, 3, 4, 'a', 'b', 'c', 1]);
        expect(result).not.toEqual(a);
    });

    test('you should be able to count the occurrences of an item in an array', function () {
        var result = arrays.count([1, 2, 4, 4, 3, 4, 3], 4);
        expect(result).toEqual(3);
    });

    test('you should be able to find duplicates in an array', function () {
        var result = arrays.duplicates([1, 2, 4, 4, 3, 3, 1, 5, 3]);

        expect(result).toHaveLength(3);
        expect(result.sort()).toEqual([1, 3, 4]);
        expect(result).not.toEqual(a);
    });

    test('you should be able to square each number in an array', function () {
        var result = arrays.square(a);
        expect(result).toHaveLength(4);
        expect(result).toEqual([1, 4, 9, 16]);
        expect(result).not.toEqual(a);
    });
});