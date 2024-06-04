function greet<Str extends string>(s: Str) {
  console.log("Hello, " + s);
}
 
greet("world");

function greet(s: string) {
  console.log("Hello, " + s);
}