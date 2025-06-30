const Animal = require('./animal');

const dog = new Animal("Ит", "үреді", 5, 20);
const cat = new Animal("Мысық", "мияулайды", 3, 5);
const horse = new Animal("Жылқы", "күңіренеді", 7, 300);

dog.show();
cat.show();
horse.show();

const animals = [dog, cat, horse];
let heaviest = animals[0];

for (let i = 1; i < animals.length; i++) {
  if (animals[i].weight > heaviest.weight) {
    heaviest = animals[i];
  }
}

console.log("Ең ауыр жануар:");
heaviest.show();
