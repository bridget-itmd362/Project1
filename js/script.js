//async was not working until i included window.onload
//ensures that js code runs after the entire page is loaded
window.onload = function(){
  const button = document.querySelector('input[type="submit"]');

  button.addEventListener("click", myFunction);

  function myFunction(){
    //check if text inputs get numbers /^[A-Za-z]+$
    const letters = /[a-zA-Z]/;
    let textInp = document.querySelector('input[type="text"]');
    if(letters.test(textInp.value) == false){
      alert("Please input a valid name");
    } else {
      alert("Thank you for signing up to our mailing list!");
    }
  }
}