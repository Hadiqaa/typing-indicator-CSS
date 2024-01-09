const inputField = document.getElementById("inputField");
const typingIndicator = document.getElementById("typingIndicator");

inputField.addEventListener("input", function() {
  const inputValue = this.value.trim(); 
  
  if (inputValue !== "") {
    typingIndicator.style.display = "flex";
  } else {
    typingIndicator.style.display = "none";
  }
});

inputField.addEventListener("focus", function() {
  typingIndicator.style.display = "flex";
});

inputField.addEventListener("blur", function() {
  typingIndicator.style.display = "none";
});

  




  
  
  