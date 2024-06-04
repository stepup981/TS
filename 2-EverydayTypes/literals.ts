function printText(s: string, alignment: "left" | "right" | "center") {
  // ...
}
printText("Hello, world", "left");
printText("G'day, mate", "centre");

function compare(a: string, b: string): -1 | 0 | 1 {
  return a === b ? 0 : a > b ? 1 : -1;
}

// явно задаёшь, что должно стоять, а не просто присваиваешь ТИП

// можно комбинировать с нилетералами

function test(num: number | 'bla') {
  console.log(num)
}

test(24)
test("bla")

interface Opt {
  height: number[]
}

function optionsCheck (value: Opt | 'napisano' | number) {
  console.log(value)
}

const arr = [1, 2]

optionsCheck(arr)
optionsCheck({height: arr})
optionsCheck(false)
optionsCheck(12)
optionsCheck('bla-bla')
optionsCheck('napisano')

declare function handleRequest(url: string, method: "GET" | "POST"): void;
 
const req = { url: "https://example.com", method: "GET" };
handleRequest(req.url, req.method);

// Change 1:
// GET всегда будет иметь литеральный тип ГЕТ
const req = { url: "https://example.com", method: "GET" as "GET" };
// Change 2
// И тут же говоришь, что я знаю, что это поле ГЕТ
handleRequest(req.url, req.method as "GET");

// или явно привести к литералам с помощью const
const req = { url: "https://example.com", method: "GET" } as const;
handleRequest(req.url, req.method);

// обработка налл
function doSomething(x: string | null) {
  if (x === null) {
    // do nothing
  } else {
    console.log("Hello, " + x.toUpperCase());
  }
}


function liveDangerously(x?: number | null) {
  // No error
  // восклицательный знак говорит, что Х явно не налл
  console.log(x!.toFixed());
}