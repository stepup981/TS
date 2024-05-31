let x = Math.random() < 0.5 ? 10 : "hello world!";

x = 1;

console.log(x);

x = "goodbye!";

console.log(x);

//  если я попытаюсь сменить перменную на тип, который не указаен был изначально, то труба
function example() {
  let x: string | number | boolean;

  x = Math.random() < 0.5;

  console.log(x);

  if (Math.random() < 0.5) {
    x = "hello";
    console.log(x);
  } else {
    x = 100;
    console.log(x);
  }

  return x;
}
