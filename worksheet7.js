//worksheet7.js objects
let person = {
    name: "Paurakh",
    cast: "Bhandari",
    age: 17,
    city: "Jhapa"
};
console.log(person);

console.log(person.name);
console.log(person.cast);
console.log(person.age);

person.city = "Kathmandu";
console.log(person);

//output:
// { name: 'Paurakh', cast: 'Bhandari', age: 17, city: 'Jhapa' }
// Paurakh
// Bhandari
// 17
// { name: 'Paurakh', cast: 'Bhandari', age: 17, city: 'Kathmandu' }