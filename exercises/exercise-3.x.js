// 3.1
// let arr = ["Milk", "Bread", "Apples"]
// console.log(arr.length)
// arr[1] = "Bananas"
// console.log(arr)

//3.2
// let arr = [];
// arr.push("Milk", "Bread", "Apples")
// arr.splice(1,1, "Bananas", "Eggs")
// arr.sort()
// let a = arr.indexOf("Milk")
// console.log(a)
// arr.splice(1, 0, "Carrots", "Lettuce")
// arr.splice(1,0, "Carrots")
// console.log(arr)
// let arr2 = ["Juice", "Pop"]
// let arr3 = arr.concat(arr2)
// console.log(arr3)
// arr3.lastIndexOf("Pop")

// //corrections
// let arr4 = arr3.concat(arr2)
// console.log(arr4)

//3.3
// let arr = [1,2,3]
// let arr2 = [arr, arr, arr];
// console.log(arr2)
// console.log(arr2[0][1]);
// console.log(arr2[1][1]);
// console.log(arr2[2][1]);

//3.4
// let myCar = { make: 'honda',
//         model: 'accord',
//         stock: 4,
//         gas: true
//         };

// let propColor = "blue";

// 3.2
// let arr1 = ["Milk", "Bread", "Apples"];
// arr1[1] = "Bananas";
// console.log(arr1)
// let tossApples = arr1.pop();
// console.log(tossApples);
// arr1.sort();
// console.log(arr1);
// let six = arr1.indexOf("Milk");
// console.log(six);
// let seven = arr1.splice(1, 0, "Carrots", "Letuce")
// console.log("prob7 is " + arr1);
// let newArr = ["Juice", "Pop"];
// let conbinedArr = arr1.concat(newArr);
// console.log(conbinedArr)
// let ten = conbinedArr.pop();
// console.log(ten);

//3.3
// let arr1 = [1,2,3];
// let arr2 = [arr1, arr1, arr1];
// console.log(arr2)
// let output = arr2[2][1];
// console.log(output);

//3.4
// let myCar = {
//         make: "kia",
//         model: "forte",
//         color: "grey",
//         wheels: 4,
//         chickMagnent: "No",
//         reliable: true
// };
// let carColor = "color";
// console.log(carColor);
// //2
// myCar[carColor] = "red";
// console.log(myCar);
// //3
// carColor = "forSale";
// myCar[carColor] = true
// console.log(carColor)
// //4
// console.log(myCar.make, myCar.model)
// //5
// console.log(myCar.forSale)


//3.5 
// let people = {friends: []}
// let friendOne = {
//                 fName: "Anil", 
//                 lName: "Naidu", 
//                 id: 1234
//         }
// let friend2 = {
//                 fName: "Felipe", 
//                 lName: "Lopez",
//                 id: 4321
//         }
// let friend3 = {
//                 fName: "Lax",
//                 lName: "Mura...",
//                 id: 8493
//         }
// people.friends.push(friendOne, friend2, friend3)
// console.log(people)


// project 1

// const theList = ['Laurence', 'Svekis', true, 35, null, undefined, {test: 'one', score: 55}, ['one', 'two']];
// //1
// let one = theList.shift();
// let one1 = theList.pop();
// console.log(one, one1);
// //console.log(theList);
// //2
// theList.unshift("FIRST")
// console.log(theList);
// //3
// let three = theList.splice(3,1,"hello World");
// console.log(theList)
let dog = {
        dogName: "Javascript", 
        weight: 2.4,
        color: "brown", 
        breed: "chihuahua", 
        age: 3,
        burglarBiter: true
};

let dogColor1 = dog["color"]
console.log(dogColor1); // brown
let dogColor2 = dog.color;
console.log(dogColor2); // brown

// Updating Obects
dog["color"] = ["blue"];
dog.weight = 2.3;

dog.age = "three"

let variable = "age";
console.log(dog[variable]);

variable = "breed";
console.log(dog[variable]); // output chiuhuah

dog[variable] = "dachshund";
console.log(dog["breed"]); //daschund

//Exercise 3.4
let myCar = { carName: "Ol Reliable",
make: "Honda",
model: "CRV",
price: 5000,
year: 1999,
color: "Blue",
forSale: 1
};

let carColor1 = myCar["color"];
myCar[carColor1] = "navy"

// Obects in objects 
let company = {
        companyName: "Healthy Candy",
        activity: "food manufacturing",
        address: {
                street: "2nd street",
                number: "123",
                zipcode: "33116",
                city: "Miami",
                state: "Florida"
        },
        yearOfEstablishment: 2021
};
//Access or modify one of the properties
company.address.zipcode = "33117"
company["address"]["number"] = "100";

// pg 65 Arrays in Objects
company = {
        companyName: "Healthy Candy",
        activities: ["food manufacturing", "improving kids' health", "manufacturing toys"],
        address: {
                street: "2nd street",
                number: "123",
                zipcode: "33116",
                city: "Miami",
                state: "Florida"
        },
        yearOfEstablishment: 2021
};
//fetch second value of activities array
let activity = company.activities[1];

//pg 66 Obects in Arrays
let addresses = [{
        street: "2nd street",
        number: "123",
        zipcode: "33116",
        city: "Miami",
        state: "Florida"
},
{
        street: "1st West Avenue",
        number: "5",
        zipcode: "75001",
        city: "Addison",
        state: "Texas"
}];

//
let streetName = addresses[0].street;

//pg 66 Objects in arrays in objects
company = { companyName: "Healthy Candy",
                activities: [ "food manufacturing", "improving kids' health", "manufacturing toys"], 
                address: [{
                        street: "2nd street",
                        number: "123",
                        zipcode: "33116",
                        city: "Miami",
                        state: "Florida"
                },
                {
                        street: "1st West Ave",
                        number: "5",
                        zipcode: "75001",
                        city: "Addison",
                        state: "Texas"
                }],
                yearOfEstablishment: 2021
}

let streetName1 = company.address[0].street;

// exercise 3.5
const people = { friends: []};
const friend1 = {first: "Bob", last: "Sarge", id: 11};
const friend2 = {first: "Anil", last: "Naidu", id: 40};
const friend3 = {first: "Bill", last: "Bob", id: 12};

//let peopleNew = { friends: [friend1, friend2, friend3]};
people.friends.push(friend1, friend2, friend3);
console.log(people)

// pg 68 MAnipulating an array
const theList = ['Laurence', 'Svekis', true, 35, null, undefined, {test: 'one', score: 55}, ['one', 'two']];
// remove first and last item
theList.shift()
theList.pop()
theList.unshift("FIRST")
theList.splice(3, 0, "hello world")
theList.splice(2, 0, "MIDDLE")
theList.push("LAST")

// pg 68
const inventory = []
const item1 = {
        name: "apple",
        model: "green",
        cost: 3.99,
        quantity: 2
}
const item2 = {
        name: "orange",
        model: "orange",
        cost: 7.99,
        quantity: 3
}
const item3 = {
        name: "onion",
        model: "bulb",
        cost: 1.99,
        quantity: 5
}

inventory.push(item1, item2, item3)
console.log(inventory[2].cost)
// //4
// let four = theList.splice(2,1,"MIDDLE");
// console.log(theList);
// //5
// let five = theList.push("LAST");
// console.log(theList)

// project 2
//1
let arr1 = ['ketchup', 'calendars', 'garlic bread'];
//2

let soap = {
        name: "loreal",
        model: "v9",
        cost: 4.99,
        quanity: 12
}
let mustard = {
        name: "heinz",
        model: "v1",
        cost: 9.99,
        quanity: 5
}
//3
arr1.push(mustard, ketchup, soap)
console.log(arr1);
//4
console.log(arr1[5].quantity)
// 11/2/26
// 3.1
arr1 = ["Mild", "Bread", "Apples"];
console.log(arr1.length)
arr1[0] = "Bananas"
console.log(arr1)

//3.2
arr1 = [];
arr1[0] = "Milk"
arr1[1] = "Bread"
arr1[2] = "Apples"
console.log(arr1)

arr1[1] = "Bananas"
arr1.pop();
console.log(arr1)
arr1.sort()
console.log(arr1)
let x = arr1.indexOf("Milk")
console.log(x)
arr1.splice(1, 0, "Carrots", "Lettuce")
console.log(arr1)

arr2 = ["Juice", "Pop"]

let newArr = arr1.concat(arr2, arr2)
console.log(newArr)

let y = newArr.lastIndexOf("Pop")
console.log(y);

//3.3
array = [1, 2, 3];
newArray = [array, array, array];
console.log(newArray[1][1])