// LOOPS IN JAVASCRIPT

const users = [
    {
      "id": "1",
      "name": "jsmith",
      "actualName": "Jane Smith",
      "displayName": [12,3434,5454,56565,6767]
    },
    {
      "id": "2",
      "name": "hello",
      "actualName": "dibyo",
      "displayName": [12,3434,5454,56565,6767]
    },
    {
      "id": "3",
      "name": "hello2",
      "actualName": "NO USER",
      "displayName": [12,3434,5454,56565,6767]
    },
    {
      "id": "4",
      "name": "hello3",
      "actualName": null,
      "displayName": [12,3434,5454,56565,6767],
      "mobile":[98347838,347348374,34378483473434],
      "family_members":[{name:"hello2",age:12},{name:"hello3",age:16}]
      
    }
  ]
  

  for(i in users){
    users[i].today_date  = new Date().toDateString()
    users[i].verified  = false
}
console.log(users)

// FOR LOOP
for(i in users){
    console.table("first loop",users[i])   
}
// conditional for loop

for(i in users){
    if(users[i].actualName == "NO USER" || users[i].actualName == null){
        console.table("NO FOUND")  
    } else {
        console.table(users[i].actualName)
    }
      
}

// NESTED LOOP
for(i in users){
    console.log("first loop",users[i])
    for(j in users[i].displayName){
        console.log("NESTED LOOP",users[i].displayName[j])
    }
}

var i = 0
// WHILE LOOP conditional
// do{
//   console.log("loop run")
//   i++
// }
// while (i < 10 );

// while(i < 10){
//   i++
//   console.log("anything")
// }


// for(i = 0; i < 10; i++ ){
//   console.log(i)
//   for(j = 0; j > i; j++ ){
//     console.log(i)
//   }
// }




// foreach



