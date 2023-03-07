//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. 
The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/

let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]

function findWords(dString, dNames){
    for (let i = 0; i < dNames.length; i++){
        if (dString.includes(dNames[i])){
            return "Matched dog_name"
        } else {
        return "No Matches"
        }
    }
}           

// console.log(findWords(dog_string, dog_names)) 

//Call method here with parameters

//============Exercise #2 ============//
/*Write a fucntion that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

//          0       1           2       3       4      5
let arr = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

function replaceEvens(arr){
    for (let i = 0; i < arr.length; i+=2){
        arr.splice(i, 1, "even index")
    } return arr
}

console.log(replaceEvens(arr))


/* 

CODEWARS EVEN OR ODD

Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.
describe("Sample tests",() => {
  
  it("2 is even", () => {
    assert.strictEqual(evenOrOdd(2), "Even");
  });
  it("7 is odd", () => {
    assert.strictEqual(evenOrOdd(7), "Odd");
  });
  it("-42 is even", () => {
    assert.strictEqual(evenOrOdd(-42), "Even");
  });
  it("-7 is odd", () => {
    assert.strictEqual(evenOrOdd(-7), "Odd");
  });
  it("0 is even", () => {
    assert.strictEqual(evenOrOdd(0), "Even");
  });
});

*/

function evenOrOdd(num) {
    if (num % 2 === 0) {
        return "Even"
    } else {
        return "Odd"
    }
}

console.log(evenOrOdd(-7))

// WHITE BOARD
// # Your job here is to write a function  which takes a 
// # sorted array ary and a value val, and returns the lowest 
// # index where you could insert val to maintain the sorted-ness of the array. 
// # The input array will always be sorted in ascending order. It may contain duplicates.
// # Do not modify the input.
// # Some examples:


// # keep_order([1, 2, 3, 4, 7], 5) #=> 4
// #                       ^(index 4)
// # keep_order([1, 2, 3, 4, 7], 0) #=> 0
// #           ^(index 0)
// # keep_order([1, 1, 2, 2, 2], 2) #=> 2
// #                 ^(index 2)



function keep_order(ary, val) {
    for (let i = 0; i < ary.length; i++) {
        if (val <= ary[i]) {      
            return i
        }
    } return ary.length
}
console.log(keep_order([1, 2, 3, 4, 7],8))