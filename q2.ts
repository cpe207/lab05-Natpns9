// define interface for Student object
interface Student {
  name: string;
  score: number;
}

// assign interface/type to the function definition properly
function findTopNames(students: Student[]): string[] {
 
  let highestScore = Number.MIN_SAFE_INTEGER;
  students.forEach(student => {
    if (student.score > highestScore) {
      highestScore = student.score;
    }
  });
  const topStudents = students.filter(student => student.score === highestScore);
  const topNames = topStudents.map(student => student.name);

  return topNames;
}

// assign interface/type to the student1 object properly
const students1 = [
  { name: "john", score: 10 },
  { name: "jane", score: 9 },
  { name: "jim", score: 8 },
];

console.log(findTopNames(students1));

module.exports = findTopNames;
