// Pick的原代码
type MyPick<T, K extends keyof T> = {
  [P in K]: T[P]
}


function MyPickF(obj, keys) {
  const ret = {};
  for (const key of keys) {
    ret[key] = obj[key];
  }
  return ret;
}

interface User {
  id: string;
  name?: string;
  age?: number;
  email?: string;
  password?: string;
}

type PickUser = Pick<User, 'id' | 'name'>; 

// PickUser则为如下
// interface User {
//   id: string;
//   name?: string;
// }