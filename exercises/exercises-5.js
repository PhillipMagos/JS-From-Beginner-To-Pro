// while loops
let i = 0;
while (i < 10) {
  console.log(i);
  i++;
}

let someArray = ["Mike", "Antal", "Marc", "Emir", "Louiza", "Jacky"];
let notFound =  true;

while (notFound && someArray.length > 0) {
  if (someArray[0] === "Louiza") {
    console.log("Found her!");
    notFound = false;
  } else {
    someArray.shift();
  }
}

let nr1 = 0;
let nr2 = 1;
let temp;
fibonacciArray = [];

while (fibonacciArray.length < 25) {
  fibonacciArray.push(nr1);
  temp = nr1 + nr2;
  nr1 = nr2;
  nr2 = temp;
}
console.log(fibonacciArray)

//do while loops
let number;
do {
  number = prompt("Please enter a number between 0 and 100");
} while (!(number >= 0 && number < 100));
alert("Your number was " + number)

// for loops
for (let i = 0; i < 10; i++) {
  console.log(i)
}

let arr = [];
for (let i = 0; i < 100; i++) {
  arr.push(i);
}
console.log(arr)

//create array with even numbers
let arr = [];
for (let i =0; i <100; i = i + 2) {
  arr.push(i)
}
console.log(arr)

//nested loops
let arrOfArrays = [];
for (let i = 0; i < 3; i++) {
  arrOfArrays.push([]);
  for(let j = 0; j < 7; j++) {
    arrOfArrays[i].push(j)
  }
} console.log(arrOfArrays)

//loops and arrays
let names = ["Chantal", "John", "Maxime", "Bobbi", "Jair"];
console.log(names)
for (let i = 0; i < names.length; i ++) {
  names[i] = "hello " + names[i];
} console.log(names)

let names = ["Chantal", "John", "Maxime", "Bobbi", "Jair"];
for (let i = 0; i < names.length; i++){
  if(names[i].startsWith("M")){
    delete names[i];
    continue;
  }
  names[i] = "hello " + names[i];
}
console.log(names);

//for of loop
let names = ["Chantal", "John", "Maxime", "Bobbi", "Jair"];
for (let name of names) {
  console.log(name);
}

//for in loop
let car = {
  model: "Golf",
  make: "Volkswagen",
  year: 1999,
  color: "black",
};

for (let prop in car){
console.log(car[prop]);
}
// or if you want to log the prop rather the value
for (let prop in car){
  console.log(prop)
}


//loop over obects by converting to an array
let car = {
  model: "Golf",
  make: "Volkswagen",
  year: 1999,
  color: "black",
};
let arrKeys = Object.keys(car);
console.log(arrKeys);
//loop over the properties of this array using for of loop
for(let key of Object.keys(car)) {
  console.log(key)
}
//loop over the values of array using for of loop
for(let key of Object.values(car)){
  console.log(key)
}
// new comment