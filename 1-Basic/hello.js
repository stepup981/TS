function greet(person, date) {
    console.log("Hello ".concat(person, ", today is ").concat(date.toDateString()));
}
greet("Brandan", new Date());
