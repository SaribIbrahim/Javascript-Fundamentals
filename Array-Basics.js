

// Pushing new elements in the array
let num = [1, 2, 4, 5];
let n = num;
num.push(6, 12, 13);
console.log(n); 
// n has the same value as num because it is a reference to the same array.
// Only the reference is copied — not the actual array.


// Now if we don't want to change the original array, we can use the spread operator
let nums = [1, 3, 4, 5];
let n1 = [...nums]; // Now n1 is a copy of nums, a new array (not the same reference)
nums.push(26, 32, 33);
console.log(nums);  // Modified original
console.log(n1);    // Unchanged copy


// Destructuring some elements from numss array e.g 0,1,2 index elements
let numss = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let [elm1, elm2, elm3] = numss; // Destructuring first 3 elements
console.log(elm1, elm2, elm3); // 1 2 3


//using of rest operator while destructuring
let array=[1,3,5,2,7,8];
let [el1,el2,...remaining]=array;
console.log(el1,el2,remaining);// 1 3 [5,2,7,8]

