const message = "hello";
// как можно заметить TS выдаёт ошибку ссылаясь на то, что перменная строка и не может её вызвать
message()

const user = {
  id: 12,
  name: "Jonh"
}
// ниже сообщение о том, что ТС не смог найти в объекте данное поле. ЖС выдал бы просто андефайнд
user.location

const world = "HELLO World";
// может искать ошибки синтаксического характера
world.toLocalLowerCase()

function flipCoin() {
  // опять указал на синтаксическую ошиьку, по сути
  return Math.random < 0.5
}

const value = Math.random() < 0.5 ? "a" : "b";
if (value !== "a") {
  // ...
} else if (value === "b") {

  // Oops, unreachable
}