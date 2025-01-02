// 工具类型 Exclude、Extract、NonNullable、Parameters、ReturnType


/**
 * 从T中排除可分配给U的类型
 */
type Exclude1<T, U> = T extends U ? never : T;


/**
 * 从T中提取那些可分配给U的类型
 */
type Extract1<T, U> = T extends U ? T : never;

/**
 * 从T中排除空值和未定义
 */
type NonNullable1<T> = T & {};

/**
 * 在元组中获取函数类型的参数
 */
type Parameters1<T extends (...args: any) => any> = T extends (...args: infer P) => any ? P : never;

/**
 * 获取函数类型的返回类型
 */
type ReturnType1<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : any;