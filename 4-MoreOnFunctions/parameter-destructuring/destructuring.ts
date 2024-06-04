function sum({ a, b, c }: { a: number; b: number; c: number }) {
  console.log(a + b + c);
}

type ABC = { a: number; b: number; c: number };
function nextSum({ a, b, c }: ABC) {
  console.log(a + b + c);
}