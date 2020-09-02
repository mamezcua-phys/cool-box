const myGreeting = document.getElementById('greeting');
const myInput = document.getElementById('greeting-input');
const myButton = document.getElementById('greeting-button');

// DOM - document object model --> How we get stuff from HTML to JS
// This is how we tell the button  to listen for clicks.
myButton.addEventListener('click', ()=>{
    //console.log(Date());
    const userInput = myInput.value;
    //console.log(userInput);
    myGreeting.textContent = userInput;
});