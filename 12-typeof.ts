const lolo = {
  name: 'lolo',
  age: 18,
  address: {
    province: '安徽',
    city: 'DS',
  }
}


type Person1 = typeof lolo;
type Person2 = {
  name: string;
  age: number;
  address: {
    province: string;
    city: string;
  }
};


// Person1 与 Person2 相同

type Address1 = typeof lolo['address'];
type Address2 = {
  province: string;
  city: string;
}

// Address1 和 Address2 完全相同