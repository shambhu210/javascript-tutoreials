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

const name = "dibyo dey"
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


console.log("First Name:",capitalizeFirstLetter(fullname.fname))






