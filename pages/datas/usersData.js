'use strict'
// const Person = function  (firstName,year) {
//     //instance properties
//   this.firstName =firstName;
//   this.year =year;
//   //instance property's method
//   //this is a bad practice , better with the use of protptype
// //   this.calAge = function (){console.log(120-this.year)}
// };
// //intances of person
//  const john = new Person('john',2000); 
//  const dele = new Person('dele',2001); 
//  const sunday = new Person('sunday',2002); 
//  const daniel = new Person('daniel',2003); 
//  console.log(john,daniel,dele,sunday)

//  Person.prototype.calAge = function (){
//     console.log(2025-this.year)
// }
// john.calAge()
// dele.calAge()
// sunday.calAge()

// daniel.calAge()

// Person.prototype.work = 'teaching';
// console.log(john.work,daniel.work)











// const Car = function(speed,liter){
// this.speed = speed;
// this.liter = liter;
// }
// const tesla = new Car (120,40);
// const motor =  new Car (30,20)

// console.log(tesla,motor);
// Car.prototype.calAclr = function (){
  //   this.liter += 20;
  //   this.speed += 20
  //   console.log(`TESLA & MOTOR acelerate are moving use ${this.liter} and has a liter of ${this.liter}km/hr   `)
  // }
  // Car.prototype.calDec = function (){
    //   this.liter -= 20;
    //   this.speed -= 20
    //   console.log(`TESLA & MOTOR decelerates use${this.liter}liters of petro  moving at ${this.speed}km/hr`)
    
    //   // console.log(this.liter-10)
    // } 
    
    // tesla.calAclr()
    // // motor.calAclr()
// motor.calDec()
// tesla.calAclr()
// motor.calDec()
// tesla.calAclr()
// motor.calDec()
// tesla.calAclr()
// motor.calDec()
// tesla.calAclr()
// motor.calDec()
// motor.calAclr()

// class Personcl{
//   constructor(birthyear, firstName){
//     this.birthyear=birthyear
//     this.firstName = firstName
//   }
// }

// const j = new Personcl(2000,'adaeagbo')
// Personcl.prototype.calAge = function(){
//  console.table(2025 - this.birthyear)
// }



// Racheal.calAge()





// console.dir(tesla,motor)

// class User {
//    constructor(Name,otherName,birthYear,emai){
//       this.Name = Name;
//       this.otherName =otherName;
//       this.birthYear =birthYear;
//       this.emai =emai;
      
//     }
//     displayInfo =function(){
//      console.log(`name:${this.Name}, otjerName:${this.otherName},emal:${this.emai}, otjerName:${this.birthYear}`)
//     }
//     calAge = function(){
//       console.log( (new Date()).getFullYear() - this.birthYear ) 
//     }
// }

//   const users = [];

// document.getElementById('signIn').addEventListener('click', function(event) {
//   event.preventDefault(); // Prevent the form from submitting
//   const Name = document.getElementById('firstName').value;
//   const otherName = document.getElementById('lastName').value;
//   const emai = document.getElementById('email').value;
//   // const password = document.getElementById('password').value;
//   const birthYear = document.getElementById('DOB').value;
//   console.table( Name,otherName,emai,birthYear)
  

  

//   // function displayAllUser(){ 
//   //   newUser.newUser.forEach(user => {
//   //     user.displayInfo();
//   //   }); 
//   // }
//   const newUser = new User( Name,otherName,birthYear,emai);
//   newUser.displayInfo();
//   // displayAllUser()
//   newUser.calAge();
//   users.push(newUser); // to recieveobjects of different users in to an array
//   // console.log(newUser)
//   console.log(users)

//   Name.value = '';
//   otherName.value = '';
//   emai.value = '';
//   birthYear.value = '';

// })




// // console.table( firstName,lastName,email,password,DOB)



 // class constructor
export class User {
  constructor(Name,otherName,birthYear,emai){
     this.Name = Name;
     this.otherName =otherName;
     this.birthYear =birthYear;
     this.emai =emai;
   }

   //methods
   displayInfo =function(){
    console.log(`name:${this.Name}, otjerName:${this.otherName},emal:${this.emai}, otjerName:${this.birthYear}`)
   }

   calAge = function(){
     console.log( (new Date()).getFullYear() - this.birthYear ) 
   }

   displayAllUser = function (){
     users.foreach(user =>{
      user.displayInfo();
    })
   }

}
 
 // Class objects to store in ana array of users
 const users = [];

//Collecting users data
document.getElementById('signIn').addEventListener('click', function(event) {
 event.preventDefault(); // Prevent the form from submitting
 const Name = document.getElementById('firstName').value;
 const otherName = document.getElementById('lastName').value;
 const emai = document.getElementById('email').value;
 // const password = document.getElementById('password').value;
 const birthYear = document.getElementById('DOB').value;
 console.table( Name,otherName,emai,birthYear)
 

 
  // function displayAllUser(){
  //   newUser.newUser.forEach(user => {
  //     user.displayInfo();
  //   });
  // }
 
  //creating users object 
 const newUser = new User( Name,otherName,birthYear,emai);

 // creating users object functio methods
 newUser.displayInfo();
 newUser.calAge();
 users.push(newUser); // to recieveobjects of different users in to an array
 console.log(users)

 //clearing form
 Name.value = '';
 otherName.value = '';
 emai.value = '';
 birthYear.value = '';

})


    






