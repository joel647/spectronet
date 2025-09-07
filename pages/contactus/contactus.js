




// document.getElementById('checkbox').onchange = function(e){
//     password.type= checkbox.type? 'text': 'password';
//   setTimeout(()=> password.type = 'password' ,500)
  
//   }
  
  
  // ...existing code...
  
  // Function to validate email format
  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  
  
  
//   Function to validate message
  function isValidText(textarea) {
    const TestRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return TestRegex.test(textarea);
  }
  
  
  // Event listener for login button
  document.getElementById('sendMessage').addEventListener('click', function() {
    const email = document.getElementById('email').value;
    const textarea = document.getElementById('textarea').value;
    const passwordError = document.getElementById('passwordError');
  
    if (!email || !(textarea)) {
        passwordError.textContent = 'Enter the fields';
        passwordError.style.color='red'
        return
    
    }

    if(!isValidText(textarea)){
        passwordError.textContent = 'please enter only alphanumeric characters and spaces'
        passwordError.style.color='red'
    }
  
    if (!isValidEmail(email)) {
        passwordError.textContent = 'Invalid email address';
        passwordError.style.color='red'
        
        

    }else{
      textarea.textContent  = 'sending....',
                setTimeout(()=> 
                  passwordError.textContent  = 'sending....',
                  passwordError.style.color='rgba(236, 211, 211, 0.63)'
                ,500)
                   
                   setTimeout(()=>passwordError.textContent="We have received your message, we give you feed back shortly",2500)
              
        }
    }
  )
  