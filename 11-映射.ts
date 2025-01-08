// 10-工具类及实现 就是通过映射的形式进行操作的

// 映射类型的语法
// {readonly[P in K]?: T}

/**
 * 通过+号和-号表示添加或者移除修饰符
 * 没有+、-则默认为+号
 */

// 所有映射类型语法
// {[P in K]: T}
// {[P in K]?: T}
// {[P in K]-?: T}
// { readonly [P in K]: T}
// { readonly [P in K]?: T}
// { -readonly [P in K]?: T}

type Getters<T> = {
  [K in keyof T as `get${Capitalize<string & K>}`]: () => T[K];  // Capitalize单词首字母转大写
}

interface Person {
  name: string;
  age: number;
  location: string;
}

type LazyPerson = Getters<Person>;

// LazyPerson的值如下
// {
//   getName: () => string;
//   getAge: () => number;
//   getLocation: () => string;
// }
