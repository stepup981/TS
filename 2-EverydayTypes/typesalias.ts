type Point = {
  x: number,
  y: number
}

function prindCoord(pt: Point) {
  const {x, y} = pt
  console.log(`first ${x} + ${y}`)
}

prindCoord({x: 50, y: 'ta'})

type UserInputSanitizedString = string;
 
function sanitizeInput(str: string): UserInputSanitizedString {
  return sanitize(str);
}
 
// Create a sanitized input
let userInput = sanitizeInput(getInput());
 
// Can still be re-assigned with a string though
userInput = "new input";


interface NewPoint {
  x: number;
  y: number;
}
 
function printCoord(pt: NewPoint) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}
 
printCoord({ x: 100, y: 100 });

// interface
interface Animal {
  name: string;
}

interface Bear extends Animal {
  honey: boolean;
}

const bear = getBear();
bear.name;
bear.honey;
// types
type Animal = {
  name: string;
}

type Bear = Animal & { 
  honey: boolean;
}

const bear = getBear();
bear.name;
bear.honey;

// отличие интерфейса от типа тем, что наследование по-другому происходит и то, что нельзя дополнить ТИП в отличии от ИНТЕРФЕЙСА. то есть в типы новые поля не добавляются