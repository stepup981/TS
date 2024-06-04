// function greeter(fn: (a: string) => void) {
//   fn("Hello, World");
// }
function printToConsole(s) {
    console.log(s);
}
function greeter(fn) {
    fn("hello");
}
greeter(printToConsole);
// мой пример
function myExample(func) {
    func("Prekol");
}
function insideMyExample(x) {
    console.log("Vot eto ".concat(x));
}
myExample(insideMyExample);
/*
1, Есть функция myExample, которая принимает функцию, которая ссылается на тип говорящий о том, что вложенная функция принмает только СТРОКУ
*/
