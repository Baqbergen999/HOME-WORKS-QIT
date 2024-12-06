///////////////////////////////////////////////////////////////Ex1

let people = [];

for (let i = 0; i < 3; i++) {
    let name = prompt("Адамның есімін енгізіңіз:");
    let age = prompt("Адамның жасын енгізіңіз:");
    people.push({ name: name, age: age });
}

people.forEach(person => {
    alert(`Аты: ${person.name}, Жасы: ${person.age}`);
});



///////////////////////////////////////////////////////////////Ex2

let books = [
    { title: "Кітап 1", author: "Автор 1", year: 2020 },
    { title: "Кітап 2", author: "Автор 2", year: 2021 },
    { title: "Кітап 3", author: "Автор 3", year: 2022 }
];

let bookTitle = prompt("Кітаптың атын енгізіңіз:");

for (let i = 0; i < books.length; i++) {
    if (books[i].title === bookTitle) {
        let newYear = prompt("Жылын жаңартыңыз:");
        books[i].year = newYear;
        break;
    }
}

books.forEach(book => {
    alert(`Атауы: ${book.title}, Авторы: ${book.author}, Жылы: ${book.year}`);
});


///////////////////////////////////////////////////////////////Ex3


let students = [
    { name: "Студент 1", age: 20, grade: "A" },
    { name: "Студент 2", age: 22, grade: "B" },
    { name: "Студент 3", age: 19, grade: "C" },
    { name: "Студент 4", age: 25, grade: "A" },
    { name: "Студент 5", age: 21, grade: "B" }
];

students.sort((a, b) => a.age - b.age);

alert(`Ең жас студент: ${students[0].name}, Жасы: ${students[0].age}`);
alert(`Ең үлкен студент: ${students[students.length - 1].name}, Жасы: ${students[students.length - 1].age}`);
