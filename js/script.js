document.addEventListener("DOMContentLoaded", function() {
  const myButton = document.querySelector('input[type="submit"]');

  myButton.addEventListener("click", function() {
    console.log("Hello World!");
  });
});