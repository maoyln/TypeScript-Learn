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