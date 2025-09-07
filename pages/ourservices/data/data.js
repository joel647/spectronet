document.getElementById("airtimeForm").addEventListener("submit", function(event) {
    event.preventDefault();
  
    // Retrieve form values
    const provider = document.getElementById("provider").value;
    const phone = document.getElementById("phone").value;
    const amount = document.getElementById("amount").value;

    console.log(provider)
    // Basic validation (you could add more if necessary)
    if (!provider || !phone || !amount) {
      document.getElementById("message").textContent = "Please fill in all fields.";
      return;
    }
  
    // Simulate purchase processing
    document.getElementById("message").textContent = `Processing ${amount} GIG  ${provider} Data subcription...`;
  
    setTimeout(() => {
      document.getElementById("message").textContent = `${amount}GIG ${provider} Succesfully suscribed...`;
    }, 2000); // Simulate delay
  });
  