//1
// let a = true;
// console.log(a);
// if(a == true) {
//     console.log("Its true")
// }
// if(a != true) {
//     console.log("its not true")
// }


// 4.2
// let age = prompt("whats your age?")
// age = Number(age);
// let message;
// if(age >= 21) {
// message = "you're old enough to enter and drink"
// } else if (age >= 19) {
//     message = "You're old enough to enter but not drink"
// } else {
//     message = "You're not old enought to enter nor drink."
// }
// console.log(message)

// 4.3
// const id = false;
// let checkId = (id) ? "Allowed" : "Denied"
// console.log(checkId)

// // 4.4
// //1 
// let randoNumb = Math.floor(Math.random() * 6);
// //2
// let answer = "Something went wrong";
// let qustion = prompt("Ask a question");
// //3
// switch(randoNumb) {
//     case 0:
//     console.log("text1");
//     break;
//     case 1:
//         console.log("text2");
//         break;
//     case 2:
//         console.log("text3");
//         break;
//     case 3:
//         console.log("text4");
//         break;
//     case 4:
//         console.log("text5");
//         break;
//     case 5:
//         console.log("text6");
//         break;
//     default: 
//     answer = "I don't know about that";
// }

// let output = "You asked me " + qustion + ". I think tath " + answer;
// console.log(output);

// 4.5
// let prize = prompt("pick a number between 0 and 10");
// prize = Number(prize);
// let output = "My selection is " + prize;

// switch(prize){
//     case 0: 
//     output += "Gold ";
//     break;
//     case 1:
//     case 2:
//         output += "You win free pizza";
//     break;
//     case 3:
//     case 4:
//     case 5:
//         output += "You win some bubble gum";
//         break;
//     case 6:
//     case 7:
//     case 8:
//         output += "You win a free bathroom break";
//         break;
//     case 9:
//     case 10:
//         output += "You win pizza with extra pepproni";
//         break;
//     default:
//         output += "You win a trip to the Bahamas";
// }

// console.log(output)

// project 1
let arr = [rock, paper, scissors]

let rock = rock.Math.random();
let paper = paper.Math.random();
let scissors = scissors.Math.random();



//pg 72
let rain = true;
if(rain){
  console.log("Take umbrella if going outside");
} else {
  console.log("Leave the umbrella at home");
}

let hobby = "dancing";
if(hobby = "coding"){
  console.log("I love coding too");
} else {
  console.log("Teach me that")
}
// add tow equal signs for coniditon to check or else its going to assign it a new value
// 4.1
let vari = false;
console.log(vari)
if(vari == true){
console.log("This variable is true")
} else {
  console.log("This variable is false")
}
if (vari != true){
  console.log("This variable is still false")
}

//pg 74

let age = prompt("Enter your age");
let cost = 0;
let message;
if (age < 3 && age >= 0) {
  cost = 0;
  message = "Access is free under three."
} else if(age > 3 && age < 12) {
  cost = 5;
  message = "With the child discount, the fee is 5 dollars";
} else if (age>= 12 && age < 65) {
  cost = 10;
  message = "A regular ticket costs 10 dollars.";
} else {
  message ="You're not authorized for entry";
}

console.log(message);
console.log("Your total cost "+cost);
alert(message);
alert("Your total cost "+cost)

//pg 76
let access = age < 18 ? "denied" : "allowed";

age < 18 ? console.log("denied") : console.log("allowed");

age < 18 ? true : false; 
retirement > 65 ? true : false;
age < 18 ? true : false; 
returment > 65 ? true : false;
let messageID = prompt("Whats your ID?")
messageID == 69 ? console.log("Welcome") : console.log("GTFO");

switch (activity) {
  case "Get Up":
    console.log("It is 6:20AM");
    break;
  case "Breakfast":
    console.log("Its 7:30AM");
  case "Drive to work":
    console.log("Its 8:00AM");
  case "Lunch":
    console.log("Its noon");
  case "Drive Home":
    console.log("Its 5PM");
  case "Dinner":
    console.log("Its 6:30PM");
  

  default:
    console.log("I cannot determine the current time")
    break;
}

//Exercise 4.4
let randomNumber = Math.random();
randomNumber = randomNumber * 6;
randomNumber = Math.floor(randomNumber);

let answer = "Something went wrong"
let userInput = prompt("Ask me anything");
switch (randomNumber) {
  case 0:
    answer = "It will work out"
    break;
  case 1:
    answer = "It will work out better"
    break;
  case 2:
    answer = "It will get better"
    break;
  case 3:
    answer = "It will get even better"
    break;
  case 4:
    answer = "couldnt get better than this"
    break;
  default:
    answer = "I dont' know about that";
    break;
}
let output = "you asked me " + userInput + " . I think that " + answer;
console.log(output)

switch(grade){
  case "F":
  case "D":
    console.log("You've failed");
    break;
  case "C":
  case "B":
    console.log("You've passed");
    break;
  case "A":
    console.log("Nice");
    break;
  default:
    console.log("I don't know this grade");
}


let prize = prompt("Choose a number between 0 and 10")
prize = Number(prize);
let outPut = "My Selection: ";
switch (prize){
  case 0:
    output += "You win nothing ";
    break;
  case 1:
  case 2:
    output += "You win 3 dollars ";
    break;
  case 3:
  case 4:
    output += "you win 7 dollars ";
  case 5:
  case 6:
  case 7:
  case 8:
  case 9:
  case 10:
    output += "You win 10 dollars ";
  break;
  default:
    output += "you won nothing";
    break;
}
console.log(outPut);

//exercise 4.4 
let randomNumber = Math.random();
randomNumber = randomNumber * 10;
RandomNumber = Math.random(randomNumber);


const randomNumber = Math.floor(Math.random() * 6);

let userQuestion = prompt("Ask me any question")
switch (randomNumber) {
  case 0:
    output = "Not at all";
    break;
  case 1:
    output = "Don't wait";
    break;
  case 2:
    output = "Not likely";
    break;
  case 3:
    output = "Maybe";
    break;
  case 4:
    output = "It's possible";
    break;
  case 5:
    output = "Very likely";
    break;
  case 6:
    output = "Absolutley";
    break;

  default:
    output = "Ask again"
    break;
}
console.log("Your question was " + userQuestion + " and the answer is: " + output);


//Combining Cases
switch(grade){
  case "F":
  case "D":
    console.log("You've failed");
    break;
  case "C":
  case "B":
    console.log("You've passed");
    break;
  case "A":
    console.log("You're great");
    break;
  default:
    console.log("Test again");
}

// Exercise 4.5
let prize = prompt("Pick a number between 1 and 10");
prize = Number(prize);
let output = "My selection: ";

switch (prize) {
  case 0:
    output += "Gold ";
    break;
  case 2:
    output += "Coin ";
    break;
  case 3:
    output = "Box of ";
    break;
  case 4:
    output = "Silver ";
    break;
  case 5:
    output = "Bricks ";
    break;

  default:
    output = "Try again";
    break;
}
// let moreOutPut = "My selection was " + prize;
console.log(output);

//Chapter 9 Project
//Project 1
prompt("Enter your number")