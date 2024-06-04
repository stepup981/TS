function greet(person: string, date: Date) {
  console.log(`Hello ${person}, today is ${date.toDateString()}`);
}

greet("Brandan", new Date())
// нужно указывать типо чётко. если выше мы передадим просто Date(), то это будет строка, и выведет ошибку


let msg = 'hello there'
// ТС сам поставил переменной мсг тип СТРОКА