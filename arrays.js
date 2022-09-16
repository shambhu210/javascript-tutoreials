// 2 type off loop are there
// 1 for loop
// 2 while and do while

function hello(pass) {
  let some =pass;
  return btoa(some);
}


// TYPES OF DATA WE CAN USE 
var arr = [true, false, 3, 4, "hellow", hello("98302")];

console.log(arr)

// TO CHEKC LENGTH OF AN ARRAY
console.log("ARRAY LENGTH:",arr.length)

// ARRAY ALWAYS STARTS FROM 0
var arr2 = ["orange","apple","banana","papaya"]

// TO REPLACE AND ELEMENT INSIDE AN ARRAY
arr2[0]="hello"
arr2[3]="hostel"

console.log(arr2)

let User_Details = []

// TWO METHODS OF ARRAY
// PUSH - to insert into element 


User_Details.push("LED TV")
console.log(User_Details)

// POP - Remove element From the last 

arr2.pop()
console.log(arr2)



// SPLICE - to Remove an element from and array

// Start index no , delete count
arr2.splice(0,1)
console.log(arr2)

// EXTRACT LENGHT OF WORD
const word = "my,name,is,dibyo,dey"
console.log(word.length)

// CONVERT WORD TO ARRAY

// here the compiler notes comma as a divider
console.log(word.split(","))

const name = "dibyo dey Dey"
// First Name: Dibyo
// Last name: Dey



const fullname = {
    
    fname: name.split(" ")[0],
    lname:name.split(" ")[1]

}

console.log(fullname)

function capitalizeFirstLetter(string) {

    // chatAt
    console.log( string.charAt(0) + string.charAt(1).toUpperCase() + string.slice(2))

    return string.charAt(0).toUpperCase() + string.slice(1);
    

  }

// CAPITALIZE ALL LETTERS
  
function capitalizeLetters2(names) {
  let fullnamess = names;

  if(fullnamess !== ""){

    const words = fullnamess.split(" ");

    for (let i = 0; i < words.length; i++) {
      words[i] = words[i][0].toUpperCase() + words[i].substr(1);
    }
  
    return words.join(" ");
    
  }

}

console.log(capitalizeLetters2(name))


console.log("First Name:",capitalizeFirstLetter(fullname.fname))

const someArray = ["apple", "banana", "grape", "pineapple", "fruits"]



// SLICE             (start index, slice index)
console.log(someArray.slice(1,3))

// JOIN 
let email =['9830202323',"09723863632"]
console.log(email.join(", "))

// CONCAT
const arr4 = [1,2,3,4,5,6,7,8,9,10]
const arr5 = [1,2,3,4,5,6,7,8,9,10]
const arr6= [1,2,3,4,5,6,7,8,9,10]
var a =arr4.concat(arr5,arr6)
console.log(a)

var hello2 = "23623626326232328323"
var hello5 = "shdishdishdjdosjdsddf"
console.log(hello2.concat(hello5))

// SORT 
let sorting = [2,45,64,2,4,6,7,89,2]
function bubbleSort(array) {
  var done = false;
  while (!done) {
    done = true;
    for (var i = 1; i < array.length; i += 1) {
      if (array[i - 1] > array[i]) {
        done = false;
        var tmp = array[i - 1];
        array[i - 1] = array[i];
        array[i] = tmp;
      }
    }
  }

  return array;
}

var numbers = [12, 10, 15, 11, 14, 13, 16];
bubbleSort(sorting);
console.log("MANUAL:",sorting);
console.log("IBUILT:",sorting.sort())

// Reverse
var soreversearray = [1,2,3,4,5,6,7,8,9]
console.log(soreversearray.reverse())





