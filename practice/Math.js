var randomNumber = Math.random();
console.log(randomNumber);

/** Math.random() always returns value between 0 to 1.

 We scale that value with the proper logic in the required interval. 
 **/

var arr = [ 5,78,23,41,67,84,22,10,1 ];
let minNum = Math.min.apply(null, arr);
console.log(minNum);

let maxNum = Math.max.apply(null, arr);
console.log(maxNum);

let sum = arr.reduce((e, curr) => e+curr, 0);
let mean = sum/arr.length;
console.log(mean);

const ceilMean = Math.ceil(mean);
console.log(ceilMean);