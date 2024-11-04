//assigment 1
// const students = [
//   { name: "Alice", age: 20, grade: 85 },
//   { name: "Bob", age: 22, grade: 90 },
//   { name: "Charlie", age: 21, grade: 78 },
//   { name: "Diana", age: 23, grade: 95 },
// ];

//part 1
//students.forEach((students) => {
//console.log(students.name, students.grade);
//});

//Part 2
// const topStudents = students.filter((student) => student.grade > 80);
// console.log(topStudents);

//part 3
const above80 = students.filter((student) => student.grade > 80);
const namesabove80 = above80.map((student) => student.name);
console.log(namesabove80);

// const age21 = students.filter((student) => student.age <= 21);
// const nameage21 = age21.map((student) => student.name);
// console.log(nameage21);

//assigment 2
const products = [
  { name: "Laptop", price: 1200, category: "Electronics", rating: 4.5 },
  { name: "Phone", price: 800, category: "Electronics", rating: 4.7 },
  { name: "Headphones", price: 150, category: "Accessories", rating: 4.3 },
  { name: "Monitor", price: 300, category: "Electronics", rating: 4.6 },
  { name: "Keyboard", price: 100, category: "Accessories", rating: 4.1 },
  { name: "Chair", price: 250, category: "Furniture", rating: 4.0 },
  { name: "Desk", price: 450, category: "Furniture", rating: 4.8 },
];

//part 1
//1
// products.forEach((product) => {
//   console.log(product.name, product.price);
// });

//2
// products.forEach((product) => {
//   console.log(product.name, product.price * 1.1);
// });

//3
// const categories = [];
// products.forEach((product) => {
//   if (!categories.includes(product.category)) {
//     categories.push(product.category);
//   }
// });
// console.log("Unique Categories:", categories);

//part 2
//1
// const electronics = products.filter(
//   (product) => product.category === "Electronics"
// );
// console.log("Electronics:", electronics);

//2
// const more300 = products.filter((product) => product.price > 300);
// console.log("expensive products:", more300);

//3
// const rated = products.filter((product) => product.rating >= 4.5);
// console.log("high rated products:", rated);

//part 3
//1
// const rated = products.filter((product) => product.rating >= 4.5);
// rated.forEach((rated) => {
//   console.log(rated.name);
// });

//2
const afford = products.filter((product) => product.price < 1000);
afford.forEach((afford) => {
  console.log(afford);
});
