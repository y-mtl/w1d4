// Exercis 1

var array = [10, 2, 5, 1, 9];
array.sort(function(a, b){
  return a - b
});

console.log(array);

var students = [
  { id: 1, name: "bruce",    age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex",     age: 22 },
  { id: 4, name: "alex",     age: 30 }
];

// Exercis 2
// sort by name
students.sort(function(a, b){

  var nameA = a.name.toUpperCase();
  var nameB = b.name.toUpperCase();

  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }
  if (nameA === nameB) {
    return b.age - a.age;
  }
});
console.log(students);