
let num=[1,2,4,5];
//pushing new elements in the array
let n=num;
num.push(6,12,13);
console.log(n);
//n has same value as num because it is a reference to the same array so refernce is being copied not array


// now if we dont want to change the original array we can use spread operator
let nums=[1,3,4,5];
let n1=[...nums];// now n1 refers to a copy of nums not nums, its a new array
nums.push(26,32,33);
console.log(nums);
console.log(n1);

//now if want to copy only some indexes of org arr i.e destructuring
let numss=[1,2,3,4,5,6,7,8,9,10];;
let [elm1,elm2,elm3]=[...numss];
console.log(elm1,elm2,elm3);






