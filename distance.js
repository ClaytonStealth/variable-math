let x1 = 3
let y1 = 5
let x2 = 6
let y2 = 9

let sum1 = x2 - x1;
let sum2 = y2 - y1;
let sqSum1 = sum1 * sum1;
let sqSum2 = sum2 * sum2;
let addSqSum = sqSum1 + sqSum2;
let distance = Math.sqrt(addSqSum);

console.log("The Distance between the 2 coordinates is " + distance);


//console.log Math.sqrt(((x2 - x1)**2 + (y2 - y1)**2))

//console.log ("The Sqrt of 100 is: " +Math.sqrt(100))