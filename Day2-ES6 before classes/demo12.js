const employees = [
  { id: 1, name: "Mark", gender: "Male" },
  { id: 2, name: "Paul", gender: "Male" },
  { id: 3, name: "Stacy", gender: "Female" },
  { id: 4, name: "John", gender: "Male" },
  { id: 5, name: "Smith", gender: "Male" },
];

// Mr.Mark
// // Mrs.Stacy

// function transform(employee) {
//   if (employee.gender === "Male") {
//     return "Mr." + employee.name;
//   } else {
//     return "Mrs." + employee.name;
//   }
// }

// const result = employees.map((employee) => transform(employee))
// console.log(result)


// const result = employees.map((employee) => {
//     if (employee.gender === "Male") {
//             return "Mr." + employee.name;
//           } else {
//             return "Mrs." + employee.name;
//           }
// })
// console.log(result)



const result = employees.map((employee) => (employee.gender === 'Male') ? 'Mr.'+ employee.name : 'Mrs.'+ employee.name)
console.log(result)

