// DOM elements
const advice = document.querySelector(".text");
const anotherAdvice = document.querySelector(".another-quote");
let adviceInfo;

const fetchData = async () => {
  const response = await fetch("https://api.adviceslip.com/advice");
  const data = await response.json();
  return data;
};

// Function to change the text of the advice
const changeText = async () => {
  // Change value of advice to the return of the fetchData function, which is the object given by the API
  adviceInfo = await fetchData();
  // Get the sentence from the object
  advice.textContent = adviceInfo.slip.advice;
};

// Call the change text function when button is clicked
anotherAdvice.addEventListener("click", () => {
  changeText();
});

// Load advice on load
changeText();
