function combine<Type>(arr1: Type[], arr2: Type[]): Type[] {
  return arr1.concat(arr2);
}

// const arr = combine([1, 2, 3], ["hello"]);

const arr = combine<number | string>([1, 2, 3], ["hello"])

// мы сказали, что можем скомбинировать рахные типы массивов