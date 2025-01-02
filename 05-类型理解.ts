// 类型就是一个集合。最小的值是空及never


// 错误语法，因为该值类型是空的，所以没有任何值可以赋给类型为never类型的值

// let num: never = 123;  // 错误语法
// let num: never = 'maoyln';  // 错误语法


// 最小的集合是包括单个值的集合
type AAA = 'A'; // 字面量类型
type BBB = 'B'; // 

let aaa: AAA = 'A'; // 对
let bbb: BBB = 'B'; // 对
// let ccc: BBB = 'C'; // 错误

// 两个值的集合:boolean true\false
type DDD = boolean; // boolean

// 联合类型
type AAABBB = 'A' | 'B'; // 联合类型
let ddd: AAABBB = 'A'; // 对
let eee: AAABBB = 'B'; // 对
// let fff: AAABBB = 'C'; // 错误


// 
interface Vector1D { x: number } // 含有x属性且属性值类型为number的对象集合
// 用语法表述上述语句
// v1 && type v1 === 'object' && type v1.x === 'number'


interface Vector2D { x: number, y: number } // 同时含有x、y属性且属性值的类型都是number类型的对象的集合
// 用语法表述上述语句
// v2 && type v2 === 'object' && type v2.x === 'number' && v2.y === 'number'

// Vector2D也可以这么写Vector2D1
interface Vector2D2 extends Vector1D {y: number}

// 在x、y属性的基础是那个再增加一个z属性
interface Vector3D extends Vector2D { z: number}

// 举例

type SubtypeOf<U, T> = T extends U ? true : false; // true
type AA = SubtypeOf<Vector2D, Vector1D>; // true
type BB = SubtypeOf<Vector1D, Vector1D>; // true
type CC = SubtypeOf<Vector1D, Vector2D>; // false