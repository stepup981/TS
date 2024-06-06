interface Box<Type> {
  contents: Type;
}

interface Apple {
  // ....
}

// Same as '{ contents: Apple }'.
type AppleBox = Box<Apple>;

// function setContents<Type>(box: Box<Type>, newContents: Type) {
//   box.contents = newContents;
// }

type OrNull<Type> = Type | null;

type OneOrMany<Type> = Type | Type[];

type OneOrManyOrNull<Type> = OrNull<OneOrMany<Type>>;

type OneOrManyOrNullStrings = OneOrManyOrNull<string>;

interface Apple {
  color: string;
  variety: string;
}

const appleBox: AppleBox = { contents: { color: "red", variety: "Fuji" } };

function setContents<Type>(box: Box<Type>, newContents: Type) {
  box.contents = newContents;
}

const newApple: Apple = { color: "green", variety: "Granny Smith" };
setContents(appleBox, newApple);

console.log(appleBox.contents); // { color: "green", variety: "Granny Smith" }

type FavoriteFoods = OneOrManyOrNullStrings;

const user1: FavoriteFoods = "Pizza";
const user2: FavoriteFoods = ["Pizza", "Sushi"];
const user3: FavoriteFoods = null;

function processFavoriteFoods(foods: FavoriteFoods) {
  if (foods === null) {
    console.log("No favorite foods specified.");
  } else if (Array.isArray(foods)) {
    console.log("Favorite foods: " + foods.join(", "));
  } else {
    console.log("Favorite food: " + foods);
  }
}

processFavoriteFoods(user1); // Favorite food: Pizza
processFavoriteFoods(user2); // Favorite foods: Pizza, Sushi
processFavoriteFoods(user3); // No favorite foods specified.