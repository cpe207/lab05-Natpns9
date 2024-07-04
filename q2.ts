interface Student {
  name: string;
  score: number;
}

// Function to find top names based on scores
function findTopNames(students: Student[]): string[] {
  let highestScore = Number.MIN_SAFE_INTEGER;
  let topNames: string[] = [];

  students.forEach(student => {
    if (student.score > highestScore) {
      highestScore = student.score;
      topNames = [student.name]; 
    } else if (student.score === highestScore) {
      topNames.push(student.name); 
    }
  });

  return topNames;
}

const students1: Student[] = [
  { name: "john", score: 10 },
  { name: "jane", score: 10 },
  { name: "jim", score: 8 },
];

console.log(findTopNames(students1)); 

export default findTopNames;
