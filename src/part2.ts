export type Student = {
  name: string;
  grade: number;
};

export function updateGrade(
  student: Student,
  newGrade: number
): Student {
  return {
    ...student,
    grade: newGrade,
  };
}

// Test
const student = { name: "Léo", grade: 14 };
const updatedStudent = updateGrade(student, 18);

console.log(student);        // { name: "Léo", grade: 14 }
console.log(updatedStudent); // { name: "Léo", grade: 18 }
