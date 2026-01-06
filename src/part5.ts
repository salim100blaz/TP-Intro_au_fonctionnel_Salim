type User = {
  name: string;
  age: number;
};

const users: User[] = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 15 },
  { name: "Charlie", age: 30 },
  { name: "Diana", age: 17 },
];


export const firstAdult = users.find(u => u.age >= 18);
console.log(firstAdult);

export const hasMinor = users.some(u => u.age < 18);
export const allAboveTen = users.every(u => u.age > 10);

console.log(hasMinor);     // true
console.log(allAboveTen);  // true


const names = users.map(u => u.name);

console.log(names.includes("Alice")); // true
console.log(names.includes("Eve"));   // false

const usersWithHobbies = [
  { name: "Alice", hobbies: ["climbing", "yoga"] },
  { name: "Bob", hobbies: ["gaming"] },
  { name: "Charlie", hobbies: ["reading", "hiking"] },
];

export const allHobbies = usersWithHobbies.flatMap(
  u => u.hobbies
);

console.log(allHobbies);

export const sortedByAge = [...users].sort(
  (a, b) => a.age - b.age
);

export const twoYoungest = sortedByAge.slice(0, 2);

console.log(twoYoungest);
