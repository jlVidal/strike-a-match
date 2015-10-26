var comparison = require('./index');
var compareStrings = comparison.compareStrings;

var expect = require('chai').expect;

describe('strike-a-match', function () {
    describe('compareStrings', function () {
        it('should be 100% equal', function () {
            expect(compareStrings("Strike a match", "Strike a match")).to.equal(1);
        });
        it('should treat empty and non-empty strings as entirely different', function () {
            expect(compareStrings('', 'a')).to.equal(0);
        });
        it('should treat two whitespace-only strings as equal', function () {
            expect(compareStrings('', ' ')).to.equal(1);
        });

        it('should trim strings', function () {
            expect(compareStrings('a ', ' a')).to.equal(1);
        });
        it('should perform case insensitive comparisons', function () {
            expect(compareStrings('A', 'a')).to.equal(1);
        });

        it('should work on short strings', function () {
            expect(compareStrings('a', 'ab')).to.equal(0.5);
            expect(compareStrings('a', 'abcd')).to.equal(0.25);
        });

        it('should not match repeated strings with 100% success', function () {
            expect(compareStrings('gggg', 'gg')).to.equal(0.5);
        });

        it('should return different percentages of equality', function () {
            var keyWord = "Healed";
            expect(compareStrings(keyWord,       "Sealed")).to.equal(0.8);
            expect(round(compareStrings(keyWord, "Healthy"))).to.equal(0.55);
            expect(round(compareStrings(keyWord, "Heard"))).to.equal(0.44);
            expect(compareStrings(keyWord,       "Help")).to.equal(0.25);
            expect(compareStrings(keyWord,       "Sold")).to.equal(0);
        });

        it('should respect a proper proximity', function () {
            var keyWord = "FRANCE";

            var resultOne = compareStrings(keyWord, "REPUBLIC OF FRANCE");
            expect(round(resultOne)).to.equal(0.56);
            var resultTwo = compareStrings(keyWord, "QUEBEC");
            expect(resultTwo).to.equal(0);

            var resultThree = compareStrings(keyWord, "FRENCH REPUBLIC");
            var resultFour = compareStrings(keyWord, "REPUBLIC OF CUBA");

            expect(resultOne).to.be.above(resultTwo).above(resultThree).above(resultFour);
        });

        it('should respect a proper similarity', function () {
            var keyWord = "FRENCH REPUBLIC";
            var compareWithFirst = "REPUBLIC OF FRANCE";
            var compareWithSecond = "REPUBLIC OF CUBA";

            var resultOne = compareStrings(keyWord, compareWithFirst);
            expect(round(resultOne)).to.equal(0.72);
            var resultTwo = compareStrings(keyWord, compareWithSecond);
            expect(round(resultTwo)).to.equal(0.61);
            expect(resultOne).to.be.above(resultTwo);
        });
    })
});

function round(x) {
    return Math.round(x * 100) / 100;
}
