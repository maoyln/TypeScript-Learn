function identity<T, U>(value: T, message: U): T {
  console.log(message);
  return value;
}

const a = identity<string, number>("hello", 1);
const a1 = identity("hello", 1);

console.log(a);

