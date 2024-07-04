"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Function to find top names based on scores
function findTopNames(students) {
    var highestScore = Number.MIN_SAFE_INTEGER;
    var topNames = [];
    students.forEach(function (student) {
        if (student.score > highestScore) {
            highestScore = student.score;
            topNames = [student.name];
        }
        else if (student.score === highestScore) {
            topNames.push(student.name);
        }
    });
    return topNames;
}
var students1 = [
    { name: "john", score: 10 },
    { name: "jane", score: 10 },
    { name: "jim", score: 8 },
];
console.log(findTopNames(students1));
exports.default = findTopNames;
