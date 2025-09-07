function sendMessage() {
    const input = document.getElementById("user-input");
    const message = input.value.trim();
  
    if (message === "") return;
  
    // Add user's message
    const userMessage = document.createElement("div");
    userMessage.classList.add("message", "user");
    userMessage.innerText = message;
    document.getElementById("chat-box").appendChild(userMessage);
  
    // Clear input
    input.value = "";
  
    // Scroll to bottom
    const chatBox = document.getElementById("chat-box");
    chatBox.scrollTop = chatBox.scrollHeight;
  
    // Simulate bot reply
    setTimeout(() => {
      const botMessage = document.createElement("div");
      botMessage.classList.add("message", "bot");
      botMessage.innerText = getBotReply(message);
      chatBox.appendChild(botMessage);
      chatBox.scrollTop = chatBox.scrollHeight;
    }, 1000);
  }
  
  // Simple bot replies
  function getBotReply(message) {
    message = message.toLowerCase();
  
    if (message.includes("hello") || message.includes("hi")) {
      return "Hello! How can I assist you today?";
    } else if (message.includes("problem") || message.includes("issue")) {
      return "I'm sorry to hear that. Could you please describe the issue?";
    } else if (message.includes("thanks") || message.includes("thank you")) {
      return "You're welcome! Let us know if you need anything else.";
    } else {
      return "Thank you for reaching out. We'll get back to you shortly.";
    }
  }
  