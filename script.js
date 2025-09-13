// Simple interaction: change text when button is clicked
document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("demo-btn");
  const text = document.getElementById("demo-text");

  btn.addEventListener("click", () => {
    if (text.innerText.includes("Click")) {
      text.innerText = "Nice! You changed the text with JavaScript 🎉";
    } else {
      text.innerText = "Click the button below to change this text!";
    }
  });
});