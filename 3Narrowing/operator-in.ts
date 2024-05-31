type Fish = { swim: () => void };
type Bird = { fly: () => void };

function move(animal: Fish | Bird) {
  if ("swim" in animal) {
    return animal.swim();
  }

  return animal.fly();
}

// Примеры использования:
const fish: Fish = {
  swim: () => console.log("Fish is swimming")
};

const bird: Bird = {
  fly: () => console.log("Bird is flying")
};

move(fish); // "Fish is swimming"
move(bird); // "Bird is flying"

// получается, что в функцию move приходит объект, который содержит в себе функцию и с помощью in проверяет есть ли такое свойство в данном объекте

type Human = { swim?: () => void; fly?: () => void };

function moveX(animal: Fish | Bird | Human) {
  "swim" in animal ? animal : animal
}
