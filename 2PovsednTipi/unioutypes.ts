function printId(id: number | string) {
  console.log(`test ${id}`)
  // мы не можем вызвать методы, которые недоступны для числа
  id.toLowerCase()
}

printId(12)
printId(false)
printId('bka')

// мы можем избегать повденеия путём проверка ЖС
function printId(id: number | string) {
  if (typeof id === "string") {
    // In this branch, id is of type 'string'
    console.log(id.toUpperCase());
  } else {
    // Here, id is of type 'number'
    console.log(id);
  }
}

function welcomePeople(x: string[] | string) {
  if (Array.isArray(x)) {
    // Here: 'x' is 'string[]'
    console.log("Hello, " + x.join(" and "));
  } else {
    // Here: 'x' is 'string'
    console.log("Welcome lone traveler " + x);
  }
}