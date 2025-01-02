// 类型就是一个集合。最小的值是空及never


// 错误语法，因为该值类型是空的，所以没有任何值可以赋给类型为never类型的值

// let num: never = 123;  // 错误语法
// let num: never = 'maoyln';  // 错误语法


// 最小的集合是包括单个值的集合
// type A = 'A'; // 对 字面量类型
// type B = 'B'; // 对 
// type B = 'A'; // 错 

// let a: A = 'a';
// let b: B = 'b';

// 两个值的集合:boolean true\false
// type C = boolean; // boolean

// 联合类型
// type AB = 'A' | 'B'; // 联合类型
// let a: AB = 'A'; // 对
// let b: AB = 'B'; // 对
// let c: AB = 'C'; // 对

