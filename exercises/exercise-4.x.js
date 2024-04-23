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
let prize = prompt("pick a number between 0 and 10");
prize = Number(prize);
let output = "My selection is " + prize;

switch(prize){
    case 0: 
    output += "Gold ";
    break;
    case 1:
    case 2:
        output += "You win free pizza";
    break;
    case 3:
    case 4:
    case 5:
        output += "You win some bubble gum";
        break;
    case 6:
    case 7:
    case 8:
        output += "You win a free bathroom break";
        break;
    case 9:
    case 10:
        output += "You win pizza with extra pepproni";
        break;
    default:
        output += "You win a trip to the Bahamas";
}

console.log(output)