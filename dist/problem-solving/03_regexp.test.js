'use strict';

var _regexp = require('./03_regexp.js');

var _regexp2 = _interopRequireDefault(_regexp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('regexp', function () {
    it('you should be able to detect a number in a string', function () {
        expect(_regexp2.default.containsNumber('abc123')).toEqual(true);
        expect(_regexp2.default.containsNumber('abc')).toEqual(false);
    });

    it('you should be able to detect a repeating letter in a string', function () {
        expect(_regexp2.default.containsRepeatingLetter('bookkeeping')).toEqual(true);
        expect(_regexp2.default.containsRepeatingLetter('rattler')).toEqual(true);
        expect(_regexp2.default.containsRepeatingLetter('ZEPPELIN')).toEqual(true);
        expect(_regexp2.default.containsRepeatingLetter('cats')).toEqual(false);
        expect(_regexp2.default.containsRepeatingLetter('l33t')).toEqual(false);
    });

    it('you should be able to determine whether a string ends with a vowel (aeiou)', function () {
        expect(_regexp2.default.endsWithVowel('cats')).toEqual(false);
        expect(_regexp2.default.endsWithVowel('gorilla')).toEqual(true);
        expect(_regexp2.default.endsWithVowel('I KNOW KUNG FU')).toEqual(true);
    });

    it('you should be able to capture the first series of three numbers', function () {
        expect(_regexp2.default.captureThreeNumbers('abc123')).toEqual('123');
        expect(_regexp2.default.captureThreeNumbers('9876543')).toEqual('987');
        expect(_regexp2.default.captureThreeNumbers('abcdef')).toEqual(false);
        expect(_regexp2.default.captureThreeNumbers('12ab12ab')).toEqual(false);
    });

    it('you should be able to determine whether a string matches a pattern', function () {
        // the pattern is XXX-XXX-XXXX where all X's are digits
        expect(_regexp2.default.matchesPattern('800-555-1212')).toEqual(true);
        expect(_regexp2.default.matchesPattern('451-933-7899')).toEqual(true);
        expect(_regexp2.default.matchesPattern('33-444-5555')).toEqual(false);
        expect(_regexp2.default.matchesPattern('abc-def-hijk')).toEqual(false);
        expect(_regexp2.default.matchesPattern('1800-555-1212')).toEqual(false);
        expect(_regexp2.default.matchesPattern('800-555-12121')).toEqual(false);
        expect(_regexp2.default.matchesPattern('800-5555-1212')).toEqual(false);
        expect(_regexp2.default.matchesPattern('800-55-1212')).toEqual(false);
    });

    it('you should be able to detect correctly-formatted monetary amounts in USD', function () {
        expect(_regexp2.default.isUSD('$132.03')).toEqual(true);
        expect(_regexp2.default.isUSD('$32.03')).toEqual(true);
        expect(_regexp2.default.isUSD('$2.03')).toEqual(true);
        expect(_regexp2.default.isUSD('$1,023,032.03')).toEqual(true);
        expect(_regexp2.default.isUSD('$20,933,209.93')).toEqual(true);
        expect(_regexp2.default.isUSD('$20,933,209')).toEqual(true);
        expect(_regexp2.default.isUSD('$459,049,393.21')).toEqual(true);
        expect(_regexp2.default.isUSD('34,344.34')).toEqual(false);
        expect(_regexp2.default.isUSD('$,344.34')).toEqual(false);
        expect(_regexp2.default.isUSD('$34,344.3')).toEqual(false);
        expect(_regexp2.default.isUSD('$34,344.344')).toEqual(false);
        expect(_regexp2.default.isUSD('$34,344_34')).toEqual(false);
        expect(_regexp2.default.isUSD('$3,432,12.12')).toEqual(false);
        expect(_regexp2.default.isUSD('$3,432,1,034.12')).toEqual(false);
        expect(_regexp2.default.isUSD('4$3,432,034.12')).toEqual(false);
    });
});