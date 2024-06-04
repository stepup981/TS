// function greeter(fn: (a: string) => void) {
//   fn("Hello, World");
// }

function printToConsole(s: string) {
  console.log(s);
}

type GreetFunction = (a: string) => void;

function greeter(fn: GreetFunction) {
  fn("hello");
}

greeter(printToConsole);

// мой пример
function myExample(func: GreetFunction) {
  func('prekol')
}

function insideMyExample (x: string) {
  console.log(`Vot eto ${x}`)
}

myExample(insideMyExample)

/*
1, Есть функция myExample, которая принимает функцию, которая ссылается на тип говорящий о том, что вложенная функция принмает только СТРОКУ
*/
