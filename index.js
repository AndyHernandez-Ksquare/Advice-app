// DOM elements
const advice = document.querySelector(".text");
const anotherAdvice = document.querySelector(".another-quote");
const twitterAnchor = document.querySelector(".twitter");
const main = document.querySelector("main");
// Variable to store the advice sentence
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

  advice.textContent = `"${adviceInfo.slip.advice}"`;

};

// Function to open twitter and share current sentence
const shareOnTwitter = () => {
  const text = encodeURIComponent(adviceInfo.slip.advice);
  const twitterUrl = `https://twitter.com/intent/tweet?text=${text}`;
  window.open(twitterUrl);
};

// Function to randomize the background color
const getRandomColor = () => {
  // String with all possible letters in a hexa color code
  const letters = "0123456789ABCDEF";
  // All colors begin with a #
  let color = "#";
  // Loop 6 times
  for (let i = 0; i < 6; i++) {
    // Randomize the letter in each index
    color += letters[Math.floor(Math.random() * 16)];
  }

  return color;
};

// Function to change the background color of main
const changeBackgroundColor = () => {
  const randomColor = getRandomColor();
  main.style.backgroundColor = randomColor;
};

// Call the change text function and randomize color when button is clicked
anotherAdvice.addEventListener("click", () => {
  changeText();
  changeBackgroundColor();
});

// Call the shareOnTwitter function when twitter anchor tag is clicked
twitterAnchor.addEventListener("click", () => {
  shareOnTwitter();
});

// Load advice on load
changeText();
