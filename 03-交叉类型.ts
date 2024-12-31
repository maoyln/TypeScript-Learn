// TypeScript 交叉类型
// https://juejin.cn/post/7095547569777934367?searchId=202412301344272392240D857FBF33BA65


// 非对象类型的交叉类型
type N0 = string & number; // never
type N1 = any & number; // number
type N2 = any & never; // never


// 对象类型的交叉类型
type A = { name: 'a'; foo: string };
type B = { name: 'b'; foo: number };
type C = { name: 'c'; foo: number };

type AB = A & B; // never
type AC = B & C; // never

// 函数类型的交叉类型
type F1 = (a: string, b: string) => void;
type F2 = (a: string, b: number) => void;
type F3 = (a: number, b: string) => void;

type F12 = F1 & F2; // never
type F13 = F1 & F3; // never


type A0 = 1 & number; // 1
type A1 = '1' & string; // '1'
type A2 = true & boolean; // true
type A3 = null & string; // never
type A4 = undefined & string; // never
type A5 = void & string; // never
type A6 = never & any; // never
type A7 = number & string; // never

// 对象类型
interface D { d: boolean; }
interface E { e: string; }
interface F { f: number; }

interface X { x: D }
interface Y { x: E }
interface Z { x: F }

type XYZ = X & Y & Z;

let xyz: XYZ = { x: { d: true, e: 'hello', f: 1 } };