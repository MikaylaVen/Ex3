//Flattening
let arrays = [[1, 2, 3], [4, 5], [6]];
// Your code here.
//using reduce and concat to flatten the array
let flattenArray = arrays.reduce((Flatten, currentArray) =>
  {
    return Flatten.concat(currentArray);
    }, []);
//Output the flattened array to the console
    console.log (flattenArray);
// → [1, 2, 3, 4, 5, 6]


// Your Own Loop 
//Defining a loop function that takes a value, a test function, an update function, and a body function.
function loop( value, test, update, body) {
    //using regular loop to perform iterations
    for (let current = value; test(current); 
    current = update(current)) {
        body(current);
    }
}
//testing the loop function
loop(3, n => n > 0, n => n - 1, console.log);
// → 3
// → 2
// → 1

//Everything 
//defining two functions called everyLoop and everySome.
function everyLoop(array, test) {
    for (let element of array){
        if(!test(element)) {
            return false;
        }
    
    }  
    //return true if every element in the array passes the test function

    return true;
  }

  function everySome(array, test) {
    return !array.some(element => test(element));
  }
  
//Testing everyLoop and everySome functions
  console.log(everyLoop ([1, 3, 5], n => n < 10));
  // → true
  console.log(everySome([2, 4, 16], n => n < 10));
  // → false
  console.log(everyLoop([], n => n < 10));
  // → true