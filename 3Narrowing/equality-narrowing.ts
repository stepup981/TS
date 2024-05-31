// function ex(x: string | number[], y: string | boolean) {
//   if (x === y) {
//     // автоматом предложил мне методы для строка, так как видит совпадение по типам
//     x.toLowerCase()
//     y.toLowerCase()
//   } else {
//     console.log(x)
//     console.log(y)
//   }
// }

function printAll(strs: string | string[] | null) {
  // if (strs !== null) {
  //   if (typeof strs === "object") {
  //     for (const s of strs) {       

  //       console.log(s);
  //     }
  //   } else if (typeof strs === "string") {
  //     console.log(strs);

  //   }
  // }
  if (strs === null) return;

  if (typeof strs === "object") {
    for (const s of strs) {
      console.log(s)
    }
  } else {
    console.log(strs)
  }
}

printAll('123')