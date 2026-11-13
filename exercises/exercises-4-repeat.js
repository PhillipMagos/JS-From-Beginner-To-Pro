// 4.1
let var1 = false;
if(var1) {
  console.log("Its true");
}  if(var1 != true) {
    console.log("Its false")
  }

//4.2
let prompt1 = prompt("What's your age?")
Number(prompt1);
if (prompt1 >= 21) {
  console.log("Have a drink")
}
else if (prompt1 >= 19 ) {
  console.log("You're in but keep you hands off the booze.")
}
else {
  console.log("You're denied entry, kid.")
}

//4.3
let ID = true;
ID >= 18 ? console.log("Access granted") : console.log("Access Denied")

//4.4
let var2 =  Math.random();
var2 = var2 * 5;
var2 = Math.floor(var2)
//console.log(var2)

let prompt3 = prompt("Ask your question");
switch (var2) {
  case 1:
    console.log("Your question was " + prompt3 + " Answer is " + var2 + " Not at all.")
    break;
  case 2:
    console.log("Your question was " + prompt3 + " Answer is " + var2 + " Not likely.")
    break;
  case 3:
    console.log("Your question was " + prompt3 + " Answer is " + var2 + " Its 50/50.")
    break;
  case 4:
    console.log("Your question was " + prompt3 + " Answer is " + var2 + " Likely.")
    break;
  case 5:
    console.log("Your question was " + prompt3 + " Answer is " + var2 + " Very likely.")
    break;

  default:
    console.log("Unable to determine");
    break;
}

// 4.5
let prize = prompt("Pick a number between 1 an 5");
prize = Number(prize)
let output = "My selection: ";

switch (prize) {
  case 1:
    output += " You won a dollar"
    break;
  case 2:
    output += " You won 2 dollars"
    break;
  case 3:
    output += " You won 3 dollars"
    break;
  case 4:
    output += " You won 4 dollars"
    break;
  case 5:
    output += " You won 5 dollars"
    break;

  default:
    console.log("You lost")
    break;
}

//Ch4 Project
//number game
let prompt1 = prompt("Enter number")
prompt1 = Number(prompt1)
let randomNumber = Math.random();
randomNumber = randomNumber * 3;
randomNumber = Math.floor(randomNumber)

if(prompt1 > randomNumber){
  console.log("Your selected number is greater than " + randomNumber)
} else if(prompt1 < randomNumber) {
  console.log("Your selected number is less than " +randomNumber)
} else if(prompt1 == randomNumber) {
  console.log("Your selected number is equal to " + randomNumber)
} else {
  console.log("Pick a different number")
}
//Friend checker game
let prompt2 = prompt("Enter your name ");
let output = "Welcome "
switch (prompt2) {
  case "Phillip":
    output += prompt2
    break;
  case "Jacob":
    output += prompt2
    break;
  case "Bob":
    output += prompt2
    break;

  default:
    console.log("Who are you? Get outta here.")
    break;
}
console.log(output)

//1
let arr1 = ["rock", "paper", "scissors"];
//2

let player = Math.random()*3;
let computer = Math.random()*3;
player = Math.floor(player)
computer = Math.floor(computer)
console.log(player, computer);

//3
let playerResult = "Player chose " + arr1[player] 
console.log(playerResult)
let computerResult = "Computer chose " + arr1[computer]
console.log(computerResult)
let output = ""
//4
if(computerResult == playerResult){
  output += "Its a tie"
} else if(computerResult > playerResult){
  output += computerResult + " and " + playerResult + ". The computer has won."
} else if(playerResult > computerResult) {
  output += playerResult + " and " + computerResult + ". The player has won."
} else {
  output += "Play again"
}



//5
console.log(output)



//my way of doing it(which seems to be better)

//1
let arr1 = ["rock", "paper", "scissors"];
//2

let player = Math.random()*3;
let computer = Math.random()*3;
player = Math.floor(player)
computer = Math.floor(computer)
console.log(player, computer);
let playerResult = arr1[player] 
console.log(playerResult)
let computerResult = arr1[computer]
console.log(computerResult)

if(computerResult == playerResult){
  console.log("Its a tie")
} else if(computerResult > playerResult){
  console.log(computerResult + " and " + playerResult + ". The computer has won.")
} else if(playerResult > computerResult) {
  console.log(playerResult + " and " + computerResult + ". The player has won.")
} else {
  console.log("Play again")
}


//4.1
let newVar = 1;
console.log(newVar)
if(newVar){
  console.log("Variable is true")
} else {
  console.log("New variable is false")
}