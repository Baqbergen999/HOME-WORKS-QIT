let obj = {a: 1, b: 2, c: 3, d: 4};
let sum = 0;
for (let key in obj) {
  sum += obj[key];
}
console.log(sum);






const obj1 = {a: 1, b: 2};
const obj2 = {...obj1, c: 3, d: 4};
console.log(obj2);




const students = [
    {id: 1, name: "A"},
    {id: 2, name: "B"},
    {id: 3, name: "C"},
    {id: 4, name: "D"},
    {id: 5, name: "E"},
];
let zhup = students.filter((num) => num.id % 2 === 0);
let taq = students.filter((num) => num.id % 2 !== 0);
console.log(zhup);
console.log(taq);






const library = {
    name: "Alatau HUB",
    books: [
        { name: "Book A", pages: 300},
        { name: "Book B", pages: 100},
        { name: "Book C", pages: 900},
        { name: "Book D", pages: 1100},
    ],
}

function findAveragePages () {
    return library.books.reduce((total, num) => total + num.pages, 0) / library.books.length
};

function findLowPages() {
    return library.books.sort((a, b) => a.pages - b.pages);
}
console.log(findAveragePages());
console.log(findLowPages()[0]);
console.log(findLowPages()[3]);
