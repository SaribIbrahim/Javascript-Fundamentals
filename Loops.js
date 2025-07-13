
//map function 

// Original array
let number=[1,2,3,4];
// Using map to create a new array by doubling each element
let newArray=number.map((v)=>v*2);//immutable behaviour no need of spread because number,strings and booleans value is stored not refernce so new value is stored directly in new array
// 'v' is each value in the 'number' array
// The result of v*2 is stored in the new array
// This does NOT change the original 'number' array
//Whatever name you use in the parameter for var must also be used in the callback logic.
number.push(10);// change only in number array
newArray.push(101);//change only in newArray
console.log(number);//1,2,3,4,10
console.log(newArray);//2,4,6,8


//practice problem of map
let products = [
    { name: "Shirt", price: 1000 },
    { name: "Pant", price: 1500 },
  ];

  let newProducts=products.map((item)=> {// call back returns a obj
    return{// return also returns a obj
    ...item,// as obj is stored in reference so we need to spread it otherwise mutation will happen
    price:item.price*0.9}
  })
  console.log(products);
  
  console.log(newProducts);

  //practice problem of map
  let students=[
    {name:"sarib",totalMarks:300},
    {name:"Adan",totalMarks:450}
  ];

  let newStudents=students.map((item)=>{
    return{
        name:item.name,
        percentage:(item.totalMarks / 500) * 100
    }
  })
  console.log(students);
  console.log(newStudents);
  
  

  

