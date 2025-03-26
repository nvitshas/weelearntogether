// script.js
console.log("Hello from JavaScript!");

// Example: Change header text on click
document.querySelector("h1").addEventListener("click", function() {
  this.textContent = "Thanks for visiting! 🎉";
});