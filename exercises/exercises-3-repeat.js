//3.1
arr1 = ["Milk", "Bread", "Apples"];
console.log(arr1.length);
arr1[1] = "Bananas";
console.log(arr1);

//3.2
arrShoppingList = ["Milk", "Bread", "Apples"];
arrShoppingList[1] = "Bananas";
arrShoppingList.pop();
arrShoppingList.sort();
let findVal = arrShoppingList.indexOf("Milk");
console.log(findVal);
arrShoppingList.splice(1,0, "Carrots", "Lettuce");
newList = ["Juice", "Pop"];
let combinedArrays1 = arrShoppingList.concat(newList);
let combinedArrays2 = combinedArrays1.concat(newList);
console.log(combinedArrays2);
let pop = combinedArrays2.lastIndexOf("Pop");
console.log(pop);
console.log(combinedArrays2);

//3.3
let array33 = [1,2,3]
arrayOfArray = [array33, array33, array33];
console.log(arrayOfArray[1][1]);

//3.4
let myCar = {
  make: "Kia",
  model: "Forte",
  color: "Grey",
  year: 2013

}
//Q2
let carColor = myCar["color"];
console.log(carColor);
myCar["color"] = "Blue"
let newColor = myCar["color"]
console.log(newColor);
//Q3
newColor = "forSale"
myCar[newColor] = true;

console.log(myCar)

//Q4
console.log(myCar["make"], myCar["model"])
//Q5
console.log(myCar["forSale"])
// or
console.log(myCar.forSale);

//3.5
//1 
let people = {
  friends: []
}
//2
let friend1 = {
  fName: "Anil",
  lName: "Naidu",
  id: 1
}
let friend2 = {
  fName: "Michael",
  lName: "I forgot",
  id: 2
}
let friend3 = {
  fName: "bob",
  lName: "billy",
  id: 3
}
//3 
people.friends.push(friend1, friend2, friend3)
console.log(people)

//chapter 3 project
const theList = ['Laurence', 'Svekis', true, 35, null, undefined, {test: 'one', score: 55}, ['one', 'two']];

theList.shift()
theList.pop()
console.log(theList)
theList.unshift("FIRST")
theList.splice(3, 0, "hello world")
theList.splice(2, 0, "MIDDLE");
theList.push("LAST")

console.log(theList)