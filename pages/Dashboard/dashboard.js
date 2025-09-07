
  'use strict'
// import  {User} from ' http://127.0.0.1:5501/pages/signin/sign.js';
// const welcomeMessage = `Welcome back, ${this.Name} ${this.otherName}!`;
const showBalance = document.getElementById('showBalance');
const tracHis = document.getElementById('tracHis');
const fundWal = document.getElementById('btn');
const welcomeMessage = document.getElementById('welcomeMwssage');
 class User {
  constructor( firstName,lastName, birthYear, email) {
    this.firstName = 'Adeagbo';
    this.lastName = 'tobi joel';
    // this.Name =  `${this.firstName} + ${this.lastName}`
    this.birthYear = 2000;
    this.email = 'tobiadeagbo4@gmail.com';
  }
  // displayAllUser(){ 
  //   console.log(User)
  //     };

   displayInfo =function(){
          console.log(User)
  }

   calAge = function(){
      console.log( (new Date()).getFullYear() - this.birthYear ) 
    }
 }

 cal()
// Create a new User instance and log the details
 


