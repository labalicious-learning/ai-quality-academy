// © 2026 Jared Cluff. Fictional setup practice, unrelated to later defects.
export function describeCount(count) {
  return count + (count === 1 ? ' practice item' : ' practice items');
}
console.log(describeCount(1));
console.log(describeCount(3));
