// TypeScript 交叉类型
// https://juejin.cn/post/7095547569777934367?searchId=202412301344272392240D857FBF33BA65


// 非对象类型的交叉类型
type N0 = string & number;
type N1 = any & number;
type N2 = any & never;


// 对象类型的交叉类型
type A = { name: 'a'; foo: string };
type B = { name: 'b'; foo: number };
type C = { name: 'c'; foo: number };

type AB = A & B;
type AC = B & C;

// 函数类型的交叉类型
type F1 = (a: string, b: string) => void;
type F2 = (a: string, b: number) => void;
type F3 = (a: number, b: string) => void;

type F12 = F1 & F2;
type F13 = F1 & F3;