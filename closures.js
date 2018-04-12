// Exercise 1 – Loaded Die

function makeLoadedDie() {
  var list = [5, 4, 6, 1, 6, 4, 2, 3, 3, 5];
  var i = -1;

  return function() {
    i++;
    if (i === list.length){
      i = 0;
    }
    return list[i];
  }
}

var rollLoadedDie = makeLoadedDie();
// console.log(rollLoadedDie());  // 5


// Exercise 2 – Countdown
var countdownGenerator = function (x) {
  /* your code here */
  var i = x;

  return function() {
    var output = '';

    if (i > 0) {
      output = `T-minus ${i}...`;
    } else if (i === 0) {
      output = `Blast Off!`;
    } else {
      output = `Rockets already gone, bub!`;
    }
    console.log(output);
    i--;
    return output;
  }
};

var countdown = countdownGenerator(3);

countdown(); // T-minus 3...
countdown(); // T-minus 2...
countdown(); // T-minus 1...
countdown(); // Blast Off!
countdown(); // Rockets already gone, bub!
countdown(); // Rockets already gone, bub!