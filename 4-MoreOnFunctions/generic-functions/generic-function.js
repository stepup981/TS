function firstElement(arr) {
    return arr[0];
}
// функция сверху возвращает тип any, а надо бы чётко задавать. для этого нужны дженерики. СМ ниже
function firstElementGenerics(arr) {
    return arr[0];
}
// у нас есть TYpe, который говорит, что функция принимает массив, тип которого определится автоматически и вернёт андефайнд, если он пуст
// s is of type 'string'
var s = firstElementGenerics(["a", "b", "c"]);
// n is of type 'number'
var n = firstElementGenerics([1, 2, 3]);
// u is of type undefined
var u = firstElementGenerics([]);
var cars = [
    { model: "BMW", hp: 275 },
    { model: "Ford", hp: 180 },
];
var firstCar = firstElementGenerics(cars);
console.log(firstCar);
