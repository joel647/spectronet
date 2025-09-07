
'use strict'
document.getElementById('checkbox').onchange = function(event){
  event.preventDefault
  const password = document.getElementById('password');
  password.type = e.target.checked ? 'text' : 'password';
  setTimeout(() => password.type = 'password', 500);
}


  document.getElementById('signIn').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the form from submitting
    signIn();
  });
  
  

  
     // Function to validate email format
     function isValidEmail(email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
  }

  // Function to validate password
  function isValidPassword(password) {
      return password.length >= 8;
  }

  // Function to handle sign-in
   function signIn() {
      let firstName = document.getElementById('firstName').value;
      let lastName = document.getElementById('lastName').value;
      let email = document.getElementById('email').value;
      let password = document.getElementById('password').value;
      let passwordError = document.getElementById('passwordError');
      let headTag = document.getElementById('headTag');
      let birthYear = document.getElementById('DOB').value;
      // calAge=()=> new Date().getFullYear() - this.birthYear;;
  

      if (!email || !password || !lastName || !firstName || !birthYear) {
          passwordError.textContent = 'Enter the fields';
          return;
      }

      if (!isValidEmail(email)) {
          passwordError.textContent = 'Invalid email address';
          return;
      }

      if (!isValidPassword(password)) {
          passwordError.textContent = 'Password must be at least 8 characters long';
          return;
        }
      

        
  else { 
    passwordError.textContent = 'Logging in...';
    passwordError.style.color = '#ecd3d32b';

    console.log( firstName,lastName, birthYear, email)
    window.open('/index.html', "_self");

  }
}

// Assuming the User class is defined outside the function
export class User {
  constructor( firstName,lastName, birthYear, email) {
    this.firstName = firstName;
    this.lastName = lastName;
    // this.Name =  `${this.firstName} + ${this.lastName}`
    this.birthYear = birthYear;
    this.email = email;
  }
// Create a new User instance and log the details

}

  
