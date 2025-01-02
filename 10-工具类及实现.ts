type MyPartialT<T> = {
  [P in keyof T]?: T[P];
}

type MyRequired<T> = {
  [P in keyof T]?: T[P];
}

type MyPickT<T, K extends keyof T> = {
  [P in K]: T[P];
}

type MyRecord<K extends keyof any, T> = {
  [P in K]: T;
}

// 把函数翻译成TS类型函数
function getProperty(obj, key) {
  return obj[key];
}

// 如果是严格TS，上面代码需要加上类型
// 否则会报下面错误
// 参数obj隐式具有any类型。。。参数key隐式具有any类型。。。

// 定义完类型函数如下
function getProperty1(obj: object, key: string) {
  return obj[key];
}
// 上述代码中参数重的错误消失了，但是obj[key]又会出现新的错误
// 元素隐式具有any类型，因为类型为string的表达式不能用于索引类型{}.在类型{}上找不到具有类型为string的参数的索引签名；

// 使用泛型进行修改
function getProperty2<T extends object, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}

// 上述修改则修复了所有错误