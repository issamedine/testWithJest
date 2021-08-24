'use strict';

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _anagramPalindrome = require('./05_anagram-palindrome.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('anagram-palindrome', function () {
  it('should return true for possible to make palindrome', function () {
    expect((0, _anagramPalindrome.isPalindromePossible)('aaabbbb')).toBe(true);
    expect((0, _anagramPalindrome.isPalindromePossible)('cdcdcdcdeeeef')).toBe(true);

    var bigContent = _fs2.default.readFileSync(_path2.default.resolve(__dirname, '../test-data/anagram-palindrome-success1.txt'), 'ascii');
    expect((0, _anagramPalindrome.isPalindromePossible)(bigContent)).toBe(true);
  });

  it('should return false for if not possible to make palindrome', function () {
    expect((0, _anagramPalindrome.isPalindromePossible)('cdefghmnopqrstuvw')).toBe(false);

    var bigContent = _fs2.default.readFileSync(_path2.default.resolve(__dirname, '../test-data/anagram-palindrome-fail1.txt'), 'ascii');
    expect((0, _anagramPalindrome.isPalindromePossible)(bigContent)).toBe(false);
  });
});