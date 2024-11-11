let a = prompt("Бірінші қабырға (a) мәнін енгізіңіз:");
let b = prompt("Екінші қабырға (b) мәнін енгізіңіз:");
let c = prompt("Үшінші қабырға (c) мәнін енгізіңіз:");

a = parseInt(a);
b = parseInt(b);
c = parseInt(c);

if (a + b > c && a + c > b && b + c > a) {
  alert("Бұл үшбұрыш жасай алады");
} else {
  alert("Бұл үшбұрыш жасай алмайды");
}







let number = prompt("Сан енгізіңіз:");

if (number < 0) {
  alert("Факториалды тек 0 немесе одан жоғары сандар үшін есептей аламыз.");
} else {
  number = parseInt(number);
  let factorial = 1;
  for (let i = 1; i <= number; i++) {
    factorial *= i;
  }
  alert("Санның факториалы: " + factorial);
}








let baga = prompt("0-ден 100-ге дейін ұпай енгізіңіз:");

if (baga >= 0 && baga <= 59) {
    alert("Баға: F");
}
if (baga >= 60 && baga <= 69) {
    alert("Баға: D");
}
if (baga >= 70 && baga <= 79) {
    alert("Баға: C");
}
if (baga >= 80 && baga <= 89) {
    alert("Баға: B");
}
if (baga >= 90 && baga <= 100) {
    alert("Баға: A");
}