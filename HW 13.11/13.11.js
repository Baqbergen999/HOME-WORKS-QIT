//Ex1

let num = 1;
while (num <= 20) {
  if (num % 2 === 0) {
    num++;
    continue;
  } else if (num % 5 === 0 && num % 3 === 0 ) {
    console.log("FizzBuzz " + num);
  } else if (num % 3 === 0) {
    console.log("Fizz " + num);
  } else if (num % 5 === 0) {
    console.log("Buzz " + num);
  } else {
    console.log(num);
  }

  num++;
}





//Ex2

let number = 18;
let suraq;
let suraq2;
let suraq3;

do {
    suraq = prompt("АҚШ президенті кім?");
    number--;
} while (suraq != "Трамп");

do {
    suraq2 = prompt("Тесланы кім ойлап тапты?");
    number--;
} while (suraq2 != "Илон Маск");

do {
    suraq3 = prompt("Қазақ хандығы қашан құрылды?");
    number--;
} while (suraq3 != "1465");

alert("Cіз " + number + " ұпай жинадыңыз!");




// Ex3

console.log("Ex3");


let start = Number(prompt("Санның басталатын санын енгізіңіз:"));
let end = Number(prompt("Санның аяқталатың санын енгізіңіз:"));
let result4 = 0;
let result7 = 0;

do {
    if (start % 4 == 0) {
        result4 = result4 + start;
    } else if (start % 7 == 0) {
        result7 = result7 + start;
    } else {
        console.log(start);
    }
    start++;
    
} while (start <= end);
console.log("4-ке қалдықсыз бөлінетін сандардың қосындысы: " + result4);
console.log("7-ге қалдықсыз бөлінетін сандардың қосындысы: " + result7);
