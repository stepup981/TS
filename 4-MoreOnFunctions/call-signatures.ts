type DescribableFunction = {
  description: string;
  (someArg: number): boolean;
};
function doSomething(fn: DescribableFunction) {
  console.log(fn.description + " returned " + fn(6));
}
 
function myFunc(someArg: number) {
  return someArg > 3;
}
myFunc.description = "default description";
 
doSomething(myFunc);

// my ex
type myType = {
  description: string;
  (someEx: string): number
}

function doSomethingEx(func: myType) {
  console.log(`${func.description} togo chisla ${func('122')}`)
}

function stringToNumber(someEx: string) {
  return +someEx
  // return someEx > 200, шляпа, так-как я сказал, что на выходе будет число, а он пытается привести к булину
}

stringToNumber.description = 'opisanie'

doSomethingEx(stringToNumber)

// мы можем определять в ТИПАХ, что будет на входе и на выходе