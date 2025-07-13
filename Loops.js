
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

  let newProducts=products.map((item)=> {
    return{// call back function returns a obj
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


  //filter function
  //filters elements from org array and returns a new array with elements that satisfy the condition
  let numbers=[1,2,3,4,5,6,7,8,9,10];
  let newNumbers=numbers.filter((num)=>{
    return num>5;//condition
  });
  console.log(numbers);
  console.log(newNumbers);

  //practice problem of filter
  let footballers=[{
    name:"messi",
    goals:150,
    team:"barcelona"
  },{
    name:"ronaldo",
    goals:140,
    team:"real madrid"
  },{
    name:"neymar",
    goals:110,
    team:"psg"
  },{
    name:"kane",
    goals:100,
    team:"tottenham"
  }
];

  let [elm1,...remaining]=footballers.filter((item)=>{
    return item.goals>100;
  });
  console.log(footballers);
  console.log(elm1,remaining);

  //practice problem2 of filter
  let players = [
    { name: "Messi", goals: 150, assists: 60, team: "barcelona", position: "forward" },
    { name: "Ronaldo", goals: 140, assists: 55, team: "real madrid", position: "forward" },
    { name: "Neymar", goals: 110, assists: 70, team: "psg", position: "forward" },
    { name: "Kane", goals: 100, assists: 30, team: "tottenham", position: "forward" },
    { name: "Modric", goals: 50, assists: 80, team: "real madrid", position: "midfielder" },
    { name: "Van Dijk", goals: 25, assists: 20, team: "liverpool", position: "defender" }
  ];

  let filteredPlayers=players.filter((items)=>{
    if(items.goals>=100 && items.team!="tottenham" && items.position=="forward"){
        return items;
  }});
  console.log(filteredPlayers);


  // mix practice problem of map and filter
  let mixplayers = [
    { name: "Messi", goals: 150, assists: 60, team: "barcelona", position: "forward" },
    { name: "Ronaldo", goals: 140, assists: 55, team: "real madrid", position: "forward" },
    { name: "Neymar", goals: 110, assists: 45, team: "psg", position: "forward" },
    { name: "Kane", goals: 100, assists: 30, team: "tottenham", position: "forward" },
    { name: "Modric", goals: 50, assists: 80, team: "real madrid", position: "midfielder" },
    { name: "Mbappe", goals: 130, assists: 60, team: "psg", position: "forward" },
    { name: "Haaland", goals: 120, assists: 20, team: "man city", position: "forward" }
  ];
  let filteredMixplayers=mixplayers.filter(items=>
    items.goals>=100 && items.assists>=50 && items.position=="forward"
  );
  let mappedMixPlayers=filteredMixplayers.map((items)=>{
    return{
        player:items.name,
        team:items.team,
        totalContribution:items.goals+items.assists
    }
  });
  console.log(mappedMixPlayers);
  
  
  
  
  

  

