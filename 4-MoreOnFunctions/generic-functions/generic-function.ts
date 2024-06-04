function firstElement(arr: any[]) {
  return arr[0];
}
// функция сверху возвращает тип any, а надо бы чётко задавать. для этого нужны дженерики. СМ ниже

function firstElementGenerics<Type>(arr: Type[]): Type | undefined {
  return arr[0];
}
// у нас есть TYpe, который говорит, что функция принимает массив, тип которого определится автоматически и вернёт андефайнд, если он пуст

// s is of type 'string'
const s = firstElementGenerics(["a", "b", "c"]);
// n is of type 'number'
const n = firstElementGenerics([1, 2, 3]);
// u is of type undefined
const u = firstElementGenerics([]);

// myEx
type Car = {
  model: string;
  hp: number;
};

const cars: Car[] = [
  { model: "BMW", hp: 275 },
  { model: "Ford", hp: 180 },
];

const firstCar = firstElementGenerics(cars);
console.log(firstCar);
