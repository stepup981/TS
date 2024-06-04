function doSomething(fn) {
    console.log(fn.description + " returned " + fn(6));
}
function myFunc(someArg) {
    return someArg > 3;
}
myFunc.description = "default description";
doSomething(myFunc);
function doSomethingEx(func) {
    console.log("".concat(func.description, " togo chisla ").concat(func('122')));
}
function stringToNumber(someEx) {
    +someEx;
    return someEx > '200';
    // return someEx > 200, шляпа, так-как я сказал, что на выходе будет число, а он пытается привести к булину
}
stringToNumber.description = 'opisanie';
doSomethingEx(stringToNumber);
// мы можем определять в ТИПАХ, что будет на входе и на выходе
