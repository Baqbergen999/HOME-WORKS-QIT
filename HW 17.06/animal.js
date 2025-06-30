class Animal {
  constructor(name, sound, age, weight) {
    this.name = name;
    this.sound = sound;
    this.age = age;
    this.weight = weight;
  }

  show() {
    console.log(`Аты: ${this.name}`);
    console.log(`Дыбысы: ${this.sound}`);
    console.log(`Жасы: ${this.age}`);
    console.log(`Салмағы: ${this.weight} кг`);
    console.log('------------------------');
  }
}
module.exports = Animal;