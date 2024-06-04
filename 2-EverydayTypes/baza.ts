function test(name: string) {
  console.log(name)
}

test(42)

function getNumber(): number {
  return 'test'
}

// чуть ниже функция для промисов, то есть для асинхронного кода
async function getFavNumber(): Promise<number> {
  return 26
}

const names = ["Alice", "Bob", "Eve"];
// Contextual typing for function - parameter s inferred to have type string
names.forEach(function (s) {
  console.log(s.toUpperCase());
});
// Contextual typing also applies to arrow functions
names.forEach((s) => {
  console.log(s.toUpperCase());
});

// ниже функция, которая принимает в себе объект
function printCoord(pt: {x: number; y: number}) {
  console.log(`first ${pt.x}`)
  console.log(`second ${pt.y}`)
}
printCoord({x: 15, y: 'sd'})

// ставя занк ? мы указваем, что данное после может быть необязательным
function printName(obj: { first: string; last?: string }) {
  // ...
}
// Both OK
printName({ first: "Bob" });
printName({ first: "Alice", last: "Alisson" });
