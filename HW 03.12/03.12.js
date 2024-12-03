// const AmjiltGroup = {
//     name: "Group24/5",
//     members: [
//         {name: "Бақберген", subject: ["Д/Ш", "Информатика"], age: 13},
//         {name: "Алихан", subject: ["Д/Ш", "Информатика"], age: 15},
//         {name: "Айғаным", subject: ["Д/Ш", "Ағылшын тілі"], age: 14},
//         {name: "Айя", subject: ["Тарих", "Химия"], age: 18},
//         {name: "Ұлдана", subject: ["Информатика", "Биология"], age: 16},
//         {name: "Қайсар", subject: ["Физика", "Математика"], age: 13},
//         {name: "Бекарыс", subject: ["Ағылшын тілі", "Математика"], age: 15},
//         {name: "Ислам", subject: ["Физика", "Д/Ш"], age: 13},
//         {name: "Нұрислам", subject: ["ДШ", "Еңбек"], age: 13},
//         {name: "Асылбек", subject: ["Информатика", "Д/Ш"], age: 13},
//         {name: "Мұхамедали", subject: ["Математика", "Д/Ш"], age: 22},
//     ],
// }

// console.log(AmjiltGroup.members.flatMap((member) => member.subject));
// console.log(AmjiltGroup.members.filter((member) => member.age >= 13 && member.age <= 16));
// console.log(AmjiltGroup.members.filter((member) => member.subject.includes("Д/Ш")).length);

const city = {
  name: "Алматы",
  population: 2000000,
  districts: [
    {
      name: "Бостандық",
      population: 300000,
    },
    {
      name: "Алмалы",
      population: 250000,
    },
  ],
};
console.log(city);






const schools = [
  {
    name: "№1 мектеп",
    district: "Алмалы",
    students: 500,
  },
  {
    name: "№2 мектеп",
    district: "Бостандық",
    students: 700,
  },
];
console.log(schools);







function calculateCityPopulation(city) {
  return city.districts.reduce(
    (total, district) => total + district.population,
    0
  );
}
const kala = {
  name: "Алматы",
  population: 2000000,
  districts: [
    { name: "Бостандық", population: 300000 },
    { name: "Алмалы", population: 250000 },
  ],
};

console.log(calculateCityPopulation(kala)); // 550000






function calculateTotalStudents(school) {
  return school.reduce((total, school) => total + school.students, 0);
}

const school = [
  { name: "№1 мектеп", district: "Алмалы", students: 500 },
  { name: "№2 мектеп", district: "Бостандық", students: 700 },
  { name: "№3 мектеп", district: "Медеу", students: 600 },
];

console.log(calculateTotalStudents(school)); // 1800





function findDistrictByName(districts, name) {
  return districts.find((district) => district.name === name);
}

const districts = [
  { name: "Бостандық", population: 300000 },
  { name: "Алмалы", population: 250000 },
  { name: "Медеу", population: 200000 },
];

console.log(findDistrictByName(districts, "Алмалы"));
