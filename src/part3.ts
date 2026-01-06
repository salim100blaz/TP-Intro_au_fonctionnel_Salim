export function applyNTimes(
  f: (x: number) => number,
  n: number,
  x: number
): number {
  let result = x;

  for (let i = 0; i < n; i++) {
    result = f(result);
  }

  return result;
}

// Test
const double = (x: number) => x * 2;
console.log(applyNTimes(double, 3, 1)); // 8
