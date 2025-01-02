// type可以给一个类型起一个别名
type MyNumber = number;
type StringOrNumber = string | number;
type TextS = string | string[];
type Point = [number, number];
type CallBack = (data: string) => void;

// 1.6版本类型别名开始支持泛型
type MyPartial<T> = {
  [P in keyof T]?: T[P] 
}

type Animal = {
  name: string;
}

// 类型别名的拓展
type Bear = Animal & {honey: boolean}; 

// interface只能用于定义对象类型
interface Point1 {
  x: number;
  y: number;
}
interface setPoint {
  (x: number, y: number): void;
}

interface Animal1 {
  name: string;
}

// 类型别名定义的也可以用在interface中使用extends进行拓展
interface Bear1 extends Animal {
  honey: boolean;
}

interface Bear2 extends Animal1 {
  honey: boolean;
}

/**
 * 相同点
 * 
 * type和interface的相同点
 * 1、类型别名和接口都可以用来描述对象或函数
 * 2、类型别名和接口都支持拓展、
 *     类型别名通过extends来拓展类型别名定义的类型
 *     接口通过&来拓展已定义的接口类型
 */

/**
 * 不同点
 * 
 * 1、类型别名可以为基本类型、联合类型、或元素类型定义别名；而接口（interface）不行
 * 2、同名接口会自动合并；而类型别名不会自动合并；
 */


/**
 * 类型别名和接口的一些使用场景
 * 
 * 一、使用类型别名的场景：
 *  - 定义基本类型的别名时，使用type
 *  - 定义远足类型时，使用type
 *  - 定于函数类型时，使用type
 *  - 定于联合类型时，使用type
 *  - 定义映射类型时，使用type
 * 
 * 二、使用接口的场景
 * 
 *  - 需要利用接口且需要自动合并特性时，使用interface
 *  - 定义对象类型切勿需使用type的时，使用interface
 */

