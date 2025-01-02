// 索引（key）签名类型必须是：string、number、symbol类型或模版字面量类型
// 值（value）的类型可以为任意类型
interface TestKey {[key: string]: string}

interface Dictionary {
  // [key: boolean]: string; // 错误
}