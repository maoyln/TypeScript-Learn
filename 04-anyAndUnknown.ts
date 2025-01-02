// any 可以理解为我不在乎它的类型
// 可以吧任何值赋给any类型的变量，并对该变量执行任何操作。

// unknown 我不知道它的类型
// 可以把任何值赋给unknown类型的变量，但必须进行类型判断或类型断言才能对变量进行操作

type T00 = unknown & null; // null
type T01 = unknown & undefined; // undefined
type T02 = unknown & null & undefined; // never
type T03 = unknown & string; // string
type T04 = unknown & string[]; // string[]
type T05 = unknown & unknown; // unknown
type T06 = unknown & any; // any-——（特殊）


type T10 = unknown | null; // unknown
type T11 = unknown | undefined; // unknown
type T12 = unknown | null | undefined; // unknown
type T13 = unknown | string; // unknown
type T14 = unknown | string[]; // unknown
type T15 = unknown | unknown; // unknown
type T16 = unknown | any; // any-——（特殊）