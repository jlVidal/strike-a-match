module.exports = {
    compareStrings: compareStrings
};

function compareStrings(a, b) {
    a = a.trim().toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    b = b.trim().toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

    // shortcut out of some situations...
    // identical strings
    if (a === b) return 1;
    // one empty string
    if (!a || !b) return 0;
    // both one char
    if (a.length === 1 && b.length === 1) return 0;

    // one string is one char
    if (a.length === 1) return b.indexOf(a) > -1 ? 1 / b.length : 0;
    if (b.length === 1) return a.indexOf(b) > -1 ? 1 / a.length : 0;

    var pairs1 = wordLetterPairs(a);
    var pairs2 = wordLetterPairs(b);

    var union = pairs1.length + pairs2.length;

    var intersection = pairs1.filter(function (pair1) {
        var match = pairs2.indexOf(pair1);
        if (match > -1) {
            pairs2.splice(match, 1); // Must remove the match to prevent "GGGG" from appearing to match "GG" with 100% success
            return true;
        }
    }).length;

    return (2 * intersection) / union;
}

function letterPairs(str) {
    var numPairs = str.length - 1;
    var pairs = new Array(numPairs);
    for (var i = 0; i < numPairs; i++) {
        pairs[i] = str.substring(i, i + 2);
    }
    return pairs;
}
function wordLetterPairs(str) {
    return flatten(str.split(/\s+/).map(function (word) {
        return letterPairs(word);
    }));
}
function flatten(arrays) {
    return Array.prototype.concat.apply([], arrays);
}
