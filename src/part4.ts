const numbers = [1, 2, 3, 4, 5, 6];

/**
 * Exercice 4.1
 * Paire → *2 → somme
 */
export const result = numbers
  .filter(n => n % 2 === 0)
  .map(n => n * 2)
  .reduce((acc, n) => acc + n, 0);

console.log(result); // 24

/**
 * Exercice 4.2
 */
export function sum(numbers: number[]): number {
  return numbers.reduce((acc, n) => acc + n, 0);
}

export function average(numbers: number[]): number {
  return sum(numbers) / numbers.length;
}

export function product(numbers: number[]): number {
  return numbers.reduce((acc, n) => acc * n, 1);
}

// Tests
console.log(sum(numbers));      // 21
console.log(average(numbers)); // 3.5
console.log(product(numbers)); // 720
