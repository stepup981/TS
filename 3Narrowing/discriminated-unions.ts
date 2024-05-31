// правильно высчитывание

interface Circle {
  kind: 'circle',
  radius: 5
}

interface Square {
  kind: 'square',
  sideLength: 2
}

type Shape = Circle | Square

function getArea(shape: Shape) {
  // return Math.PI * shape.radius ** 2
  if (shape.kind === 'circle') {
    return Math.PI * shape.radius ** 2;
  } else {
    return shape.sideLength ** 2
  }
}