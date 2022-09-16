// ONLY FOR DEBUGGING POURPOSE , DO NOT USE IN PRODUCTION
// console.log("WORKING");

// const demo = false;

// IF ELSE STATEMENT

// if(demo = "DEV"){
//     console.log(demo)
// }
// ERROR BECAUSE CONDITION IS INVALID

// SERIES OF CONDITIONAL OPERATORS
// ! = NOT
// && = and
// == = equal
// type of = value type
// || = or

// LOGIC

// = : use with any logical operator
// == : slighty match
// === : needs to match with exact same value

// const hello = 0; // iNT
// const demo2 = false;

// const num1 = 5;
// const num2 = 8;

// // CONDITIONAL OPERATORS

// if (demo2) {
//   console.log("STRING VALUE");
// } else if (demo2 !== false) {
//   console.log("hello is true");
// } else if (demo2 !== false) {
//   console.log("hello is true 1");
// } else if (demo2 !== false) {
//   console.log("hello is true 2 ");
// } else if (demo2 !== true) {
//   console.log("hello is tru  3");
// } else {
//   //alert("FORMT IS EMPTY")
//   console.warn("THE VALUE FALSE");
//   if (hello == 0) {
//     console.error("hello = 0");
//     console.table([
//       {
//         name: "hello1",
//         age: 26,
//       },
//       {
//         name: "hello2",
//         age: 26,
//       },
//     ]); // TABLE
//   }
// }

// var num = 3;

// if (num % 2 == 0) {
//   console.log("ODD");
// } else {
//   console.log("EVEN");
// }

// const switch2 = 0;

// SINGLE OPERATOR CASE BASED

// switch(switch2){
//     case switch2 == true:
//          console.log("demo2 is true")
//          break
//     case !switch2:
//          //console.log("demo2 is false")
//          return demo2

//     default:
//         console.log("demo2 is false2")

//  }

// DAY REMINDER

// var var1 = document.getElementById("days")
// let var2=0

// // TERNARY OPERARTOR

// const something = var2 !== 0 ? "hello" : "is 0 " // SHORT HAND
// console.log(something)

// // const var2=var1.value

// document.addEventListener("click", () => {
//   // console.log(var1.value)
//   //console.log(var1)
//   if (var1 !== null) {
//     if (var1.value !== null) {
//         console.warn(var1.value)
//       switch (var1.value) {
//         case 0:
//         console.log(var2.value)
//           document.getElementById("outout").innerHTML = "today is sunday"
//           break
//           default:
//             console.error("invalid days ")
          
//       }
//     } else {
//       console.log("this is not  working");
//     }
//     console.log(var1.value);
//   } else {
//   }
// });


var num = document.getElementById("days");

document.getElementById("sub").addEventListener("click", () => {
  console.log(num.value);
  const numbers = num.value;

const texts = document.getElementById("texts")

  switch (parseInt(numbers)) {
    
    case 0:
        console.log(numbers)
       texts.innerText = "SUNDAY";
      break;
    case 1:
        console.log(numbers)
        texts.innerText = "MONDAY";
      break;
      case 2:
        console.log(numbers)
        texts.innerText = "TUESDAY";
      break;
      case 3:
        console.log(numbers)
        texts.innerText = "WEDNESDAY";
      break;
      case 4:
        console.log(numbers)
        texts.innerText = "THURSTDAY";
      break;
      case 5:
        console.log(numbers)
        texts.innerText = "FRIDAY";
      break;
      case 6:
        console.log(numbers)
        texts.innerText = "SATURDAY";
      break;
    default:
        
        texts.innerText = "GIVE SOME VALID INPUT";
  }
});

var pic = document.getElementById("pic")
let count = 0
var images= ["aa.png","dd.jpg"]


// Dynamic


if(count<10){
  count++
  pic.src=images[count]
}

