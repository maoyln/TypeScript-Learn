// TypeScript 泛型中的 T、K、V 等到底是个啥？
// https://juejin.cn/post/7095547569777934367?searchId=202412301344272392240D857FBF33BA65
function identity<T, U>(value: T, message: U): T {
  console.log(`message->${message}`);
  return value;
}

const a = identity<string, number>("hello world", 1);
const a1 = identity("hello myl", 2);

console.log(`a->${a}`);
console.log(`a1->${a1}`);

