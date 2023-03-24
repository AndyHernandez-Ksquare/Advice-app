// DOM elements
const advice = document.querySelector(".text");
let adviceInfo;

const fetchData = async () => {
  const response = await fetch("https://api.adviceslip.com/advice");
  const data = await response.json();
  return data;
};

const changeText = async () => {
  adviceInfo = await fetchData();
  advice.textContent = adviceInfo.slip.advice;
  console.log(advice);
};

// Load advice on load
changeText();
