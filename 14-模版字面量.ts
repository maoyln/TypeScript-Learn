type EventName<T extends string> = `${T}Changed`;
type Concat<S1 extends string, S2 extends string> = `${S1}-${S2}`;
type ToString<T extends string | number | boolean | bigint> = `${T}`


type T0 = EventName<'foo'>; // 'fooChanged'
type T1 = Concat<'Hello', 'World'>; // 'Hello World'
type T2 = ToString<'maoyl'| 888 | true | -1212n> // 'maoyl | '888' | 'true' | '1212n' 

type T3 = ToString<'foo' | 'bar' | 'baz'>; // 'fooChanged' | 'barChanged' | 'bazChanged'
type T4 = Concat<'top' | 'bottom', 'left' | 'right'>; // top-left | top-right | bottom-left | bottom-right