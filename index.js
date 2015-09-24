/**
 * Created by John on 9/23/2015.
 */
function letterPairs(str) {
    var numPairs = str.length - 1;

    var pairs = new Array(numPairs);
    for (var i = 0; i < numPairs; i++) {
        pairs[i] = str.substring(i, i + 2);
    }

    return pairs;
}
function isBlank(str) {
    return (!str || /^\s*$/.test(str));
}
function wordLetterPairs(str) {
    var allPairs = [];

    // Tokenize the string and put the tokens/words into an array
    var words = str.split(/(\s)/);

    // For each word
    for (var w = 0; w < words.length; w++) {
        if (!isBlank(words[w])) {
            // Find the pairs of characters
            var pairsInWord = letterPairs(words[w]);
            for (var p = 0; p < pairsInWord.length; p++) {
                allPairs.push(pairsInWord[p]);
            }
        }
    }

    return allPairs;
}
var toExport =
{
    compareStrings: function (a, b) {
        if (!a || !b) {
            if (!a && !b)
                return 1;

            return 0;
        }

        a = a.toUpperCase();
        b = b.toUpperCase();
        if (a.length == 1 && a.length == 1) {
            if (a === b) {
                return 1;
            }
            return 0;
        }

        var pairs1 = wordLetterPairs(a);
        var pairs2 = wordLetterPairs(b);

        if (pairs1.length == 0 || pairs2.length == 0) {
            a = a.trim();
            b = b.trim();

            var maxSize = Math.max(a.length, b.length);
            var percentUnit = 1 / maxSize;
            var score = 0;
            for (var i = 0; i < maxSize; i++) {
                var tempLetterA;

                if (i + 1 >= a.length)
                    tempLetterA = null;
                else
                    tempLetterA = a.substring(i, i + 1);

                var tempLetterB;

                if (i + 1 >= b.length) {
                    tempLetterB = null;
                }
                else {
                    tempLetterB = b.substring(i, i + 1);
                }

                if (tempLetterA == null || tempLetterB == null)
                    return score;

                if (tempLetterA === tempLetterB)
                    score = score + percentUnit;
            }
            return score;
        }

        var intersection = 0;
        var union = pairs1.length + pairs2.length;

        for (var i = 0; i < pairs1.length; i++) {
            for (var j = 0; j < pairs2.length; j++) {
                if (pairs1[i] === pairs2[j]) {
                    intersection++;
                    pairs2.splice(j, 1);//Must remove the match to prevent "GGGG" from appearing to match "GG" with 100% success

                    break;
                }
            }
        }

        return (2.0 * intersection) / union;
    }
};
module.exports = toExport;
