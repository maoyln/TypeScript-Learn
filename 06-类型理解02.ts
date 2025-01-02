// 索引（key）签名类型必须是：string、number、symbol类型或模版字面量类型
// 值（value）的类型可以为任意类型

interface TypeValue {
  id: string;
  name: string;
  age: number;

}
interface TestKey {[key: string | number | symbol]: TypeValue}

interface Dictionary {
  // [key: boolean]: string; // 错误
}


interface PropChangeHandler {
  [key: `${string}Changed`]: () => void
}

let handler: PropChangeHandler = {
  idChanged: () => {}, // 对的
  nameChanged: () => {}, // 对的
  // ageChange: () => {} // 错的
}