interface PaintOptions {
  shape: Shape;
  xPos?: number;
  yPos?: number;
}
 
function paintShape({shape, xPos = 0, yPos = 0}: PaintOptions) {
  // ...
  // let xPos = opts.xPos
  // let yPos = opts.yPos
  console.log(xPos)
  // можно дейструктуризировать и указать сразу же значению по умолчанию, чтобы избегать приверок на undefined так как два параметра в интерфейсас необязательны
}
 
const shape = getShape();
paintShape({ shape });
paintShape({ shape, xPos: 100 });
paintShape({ shape, yPos: 100 });
paintShape({ shape, xPos: 100, yPos: 100 });