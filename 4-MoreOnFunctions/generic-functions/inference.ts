function map<Input, Output>(arr: Input[], func: (arg: Input) => Output): Output[] {
  return arr.map(func);
}
 
// Parameter 'n' is of type 'string'
// 'parsed' is of type 'number[]'
const parsed = map(["1", "2", "3"], (n) => parseInt(n));

/*
 в данном примере получается, что функция принимает массив, который вернёт массив с этим же типом данных(в данном случае строки)
 вторым аргументом принимает функция, аргумент которого ссылается на тип ИНПУТ и передаёт его в ОАУТПУТ, чтобы так же вернуть строку(n)
*/