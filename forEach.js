// The second argument/parameter is expected to be a function
function findWaldo(arr, found) {

  arr.forEach(function(element, index){
    if (element === "Waldo") {
      found(index);
    }
  });
}

function actionWhenFound(index) {
  //console.log("Found him!");
  // Found Waldo at index 2!
  console.log(`Found Waldo at index ${index}!`);
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);

