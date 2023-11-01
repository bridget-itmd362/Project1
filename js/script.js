//async was not working until i included window.onload
//ensures that js code runs after the entire page is loaded
window.onload = function(){
  const myButton = document.querySelector('input[type="submit"]');

  myButton.addEventListener("click", function() {
    alert("thank you for your submission")
  });
}