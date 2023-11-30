const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

const animalNames = [
  "Lion",
  "Tiger",
  "Elephant",
  "Giraffe",
  "Zebra",
  "Bear",
  "Rhino",
  "Hippopotamus",
  "Kangaroo",
  "Panda",
  "Gorilla",
  "Leopard",
  "Cheetah",
  "Wolf",
  "Fox",
  "Deer",
  "Rabbit",
  "Squirrel",
  "Hedgehog",
  "Raccoon",
  "Owl",
  "Eagle",
  "Parrot",
  "Flamingo",
  "Swan",
  "Peacock",
  "Penguin",
  "Shark",
  "Dolphin",
  "Whale",
  "Octopus",
  "Turtle",
  "Frog",
  "Lizard",
  "Snake",
  "Alligator",
  "Crocodile",
  "Bat",
  "Monkey",
  "Hamster",
  "Moth",
  "Cricket",
  "Moose",
  "Buffalo",
  "Camel",
  "Donkey",
  "Horse",
  "Sheep",
  "Goat",
  "Cow",
  "Pig",
  "Dog",
  "Cat",
  "Chicken",
  "Duck",
  "Goose",
  "Turkey",
  "Pigeon",
  "Earthworm",
  "Swallow",
  "Sparrow",
  "Armadillo",
  "Sloth",
  "Toucan",
  "Seashell",
  "Goldfish",
  "Alpaca",
  "Platypus",
  "Salmon",
  "Catfish",
  "Jellyfish",
  "Starfish",
  "Seahorse",
  "Lobster",
  "Crab",
  "Snail",
  "Ant",
  "Bee",
  "Butterfly",
  "Caterpillar",
  "Ladybug",
  "Dragonfly",
  "Grasshopper",
  "Spider",
  "Scorpion",
  "Mantis",
  "Mosquito",
  "Worm",
  "Beetle",
  "Frog",
  "Toad",
  "Iguana",
  "Chameleon",
  "Tortoise",
  "Seal",
  "Otter",
  "Walrus",
  "Koala",
  "Kangaroo",
  "Ostrich",
];

function shuffle(array) {
  let currentIndex = array.length;
  let randomIndex;
  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    // [array[currentIndex], array[randomIndex]] = [
    //   array[randomIndex],
    //   array[currentIndex],
    // ];
    let temp = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temp;
  }
  return array;
}

let shuffledAnimals = shuffle([...animalNames]);
app.get("/random-animal", (req, res) => {
  if (shuffledAnimals.length === 0) {
    shuffledAnimals = shuffle([...animalNames]);
  }

  const animalName = shuffledAnimals.shift();
  res.json({ animal: animalName });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
