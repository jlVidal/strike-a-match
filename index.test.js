/**
 * Created by John on 9/24/2015.
 */
var comparison = require('./index');

var expect = require('chai').expect;

describe('strike-a-match', function () {
    it('should work', function () {
        expect(true).to.be.true;
    });

    describe('compareStrings', function () {
        it('should be 100% equal', function () {
            expect(comparison.compareStrings("Strike a match", "Strike a match")).to.equal(1);
        });

        it('should return different percentages of equality', function () {
            // (Healed)
            // Sealed	80%
            // Healthy	55%
            // Heard	44%
            // Herded	40%
            // Help	    25%
            // Sold	    0%
            var keyWord = "Healed";
            expect(comparison.compareStrings(keyWord, "Sealed")).to.equal(0.8);
            expect(Math.round(comparison.compareStrings(keyWord, "Healthy") * 100) / 100).to.equal(0.55);
            expect(Math.round(comparison.compareStrings(keyWord, "Heard") * 100) / 100).to.equal(0.44);
            expect(comparison.compareStrings(keyWord, "Help")).to.equal(0.25);
            expect(comparison.compareStrings(keyWord, "Sold")).to.equal(0.0);
        });

        it('should respect a proper proximity', function () {
            var keyWord = "FRANCE";

            var resultOne = comparison.compareStrings(keyWord, "REPUBLIC OF FRANCE");
            expect(Math.round(resultOne * 100) / 100).to.equal(0.56);
            var resultTwo = comparison.compareStrings(keyWord, "QUEBEC");
            expect(resultTwo).to.equal(0);

            var resultThree = comparison.compareStrings(keyWord, "FRENCH REPUBLIC");
            var resultFour = comparison.compareStrings(keyWord, "REPUBLIC OF CUBA");

            expect(resultOne).to.be.above(resultTwo).above(resultThree).above(resultFour);
        });

        it('should respect a proper similarity', function () {
            var keyWord = "FRENCH REPUBLIC";
            var compareWithFirst = "REPUBLIC OF FRANCE";
            var compareWithSecond = "REPUBLIC OF CUBA";

            var resultOne = comparison.compareStrings(keyWord, compareWithFirst);
            expect(Math.round(resultOne * 100) / 100).to.equal(0.72);
            var resultTwo = comparison.compareStrings(keyWord, compareWithSecond);
            expect(Math.round(resultTwo * 100) / 100).to.equal(0.61);
            expect(resultOne).to.be.above(resultTwo);
        });
    })
});