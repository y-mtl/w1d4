var words = ["ground", "control", "to", "major", "tom"];

customMap(words, function(word) {
  return word.length;
});

customMap(words, function(word) {
  return word.toUpperCase();
});

customMap(words, function(word) {
  return word.split('').reverse().join('');
});

// Yours will take in two arguments.
// The first will be an array to map and the second will be a callback function.
// The function will return a new array based on the results of the callback function.

function customMap(arr, doSomething) {
  var newArr = [];
  for (i = 0; i < arr.length; i++) {
    newArr.push(doSomething(arr[i]));
  }
  return newArr;
  // console.log(newArr);
}


// [6, 7, 2, 5, 3]

// [ "GROUND", "CONTROL", "TO", "MAJOR", "TOM" ]

// [ 'dnuorg', 'lortnoc', 'ot', 'rojam', 'mot' ]