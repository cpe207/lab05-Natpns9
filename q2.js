function findTopNames(students) {
    return students.filter(function (student) { return student.score > 8; }).map(function (student) { return student.name; });
}
var students1 = [
    { name: "john", score: 10 },
    { name: "jane", score: 9 },
    { name: "jim", score: 8 },
];
console.log(findTopNames(students1));
module.exports = findTopNames;
