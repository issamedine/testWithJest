'use strict';

var _asyncCounter = require('./04_async-counter.js');

var ms = 100;

function testCount(_ref) {
    var startCount = _ref.startCount,
        endCount = _ref.endCount,
        done = _ref.done,
        cancelAfter = _ref.cancelAfter;

    var start = Date.now();
    var doneTimeout = null;
    var cancel = null;
    var isDone = false;
    var finish = function finish(error) {
        if (isDone) return;
        isDone = true;
        done(error);
    };
    var triggerFinish = function triggerFinish() {
        doneTimeout = setTimeout(function () {
            finish();
        }, 500);
    };
    var callback = function callback(count) {
        try {
            var timeDiff = Date.now() - start;
            var run = count - startCount + 1;
            var bottomBorder = run * ms;
            var topBoard = bottomBorder + 10 * run;
            expect(timeDiff).toBeGreaterThanOrEqual(bottomBorder);
            expect(timeDiff).toBeLessThanOrEqual(topBoard);
            if (doneTimeout) {
                clearTimeout(doneTimeout);
                expect('Never to reach this point').toEqual('Callback called after end');
                return;
            }
            if (cancelAfter) {
                expect(count).toBeLessThanOrEqual(cancelAfter);
            }
            if (count === endCount) {
                triggerFinish();
                return;
            }
            if (cancelAfter && cancelAfter === count) {
                expect(cancel).toBeInstanceOf(Function);
                cancel();
                triggerFinish();
            }
        } catch (error) {
            finish(error);
        }
    };
    cancel = (0, _asyncCounter.count)(startCount, endCount, callback);
}

describe('counter', function () {
    it('should count from start number to end number, one per 1/10th of a second by calling the callback', function (done) {
        testCount({ startCount: 1, endCount: 5, done: done });
    });

    it('should provide a method to cancel the counting', function (done) {
        testCount({ startCount: 1, endCount: 5, done: done, cancelAfter: 3 });
    });
});