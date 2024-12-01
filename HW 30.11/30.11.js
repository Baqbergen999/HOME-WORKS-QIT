const fillArray = (arr) => {
    while (true) {
        let thing = prompt("Мында енгізіңіз:");
        if (thing === "stop") break;
        if (isNaN(Number(thing))) {
            arr.push(thing);
        } else {
            arr.push(Number(thing));
        }
    }
    return arr;
}



//Ex1
// let array = fillArray([]);
// function numbers() {
//     let sandar = array.filter((nums) => nums > 50);
//     let doubled = sandar.map((nums) => nums * 2);
//     return doubled;
// }
// console.log(numbers());





//Ex2
// massive = [];
// let array = fillArray([]);

// array.forEach(newnum => {
//     massive.push(newnum); 
// });
// let result = 0;
// massive.forEach(element => {
//     result += element; 
// });
// console.log("Элементтер: " + massive);
// console.log("Нәтиже: " + result);




//Ex3
let array = fillArray([]);
function numbers() {
    let squared = array.map((num) => num * 3);
    let littleHundred = squared.filter((num) => num <= 100);
    return littleHundred;
}
console.log(numbers());