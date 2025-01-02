// 10-工具类及实现 就是通过映射的形式进行操作的



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
