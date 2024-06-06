// interface SquareConfig {
//   color?: string;
//   width?: number;
// }
 
function createSquare(config: SquareConfig): { color: string; area: number } {
  return {
    color: config.color || "red",
    area: config.width ? config.width * config.width : 20,
  };
}
 
// let mySquare = createSquare({ colour: "red", width: 100 });

interface SquareConfig {
  color?: string;
  width?: number;
  [propName: string]: any;
}

let squareOptions = { colour: "red", width: 100 };
let mySquare = createSquare(squareOptions);