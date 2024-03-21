// Write a simple program that can take lots of scores and find their average.
// This program calculates the average of all scores given
function averageScore() {
    var scores = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        scores[_i] = arguments[_i];
    }
    // Adds all scores together and divides by the number of scores
    var total = scores.reduce(function (sum, score) { return sum + score; }, 0);
    return total / scores.length;
}
// Example: finding the average of four scores
console.log(averageScore(60, 30, 100, 20)); // Shows the average score
// We add up all the scores, then divide by how many there are.
