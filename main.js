import "./style.css";

function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function generateRandomColor(min, max) {
  const r = generateRandomNumber(0, 255);
  const g = generateRandomNumber(0, 255);
  const b = generateRandomNumber(0, 255);
  return `rgb(${r},${g},${b})`;
}

const confettiLayout = document.querySelector("#confetti-layout");
const app = document.querySelector("#app");
const button = document.querySelector("#celebrate");

for (let i = 0; i < 100; i++) {
  const newDiv = document.createElement("div");
  newDiv.style.backgroundColor = generateRandomColor();
  newDiv.style.padding = `${generateRandomNumber(5, 20)}px`;
  newDiv.style.position = "absolute";
  confettiLayout.appendChild(newDiv);
}
const newDivList = document.querySelectorAll("#confetti-layout div");

let timer;
button.addEventListener("click", () => {
  newDivList.forEach((div) => {
    const insideX = generateRandomNumber(0, 680);
    const insideY = generateRandomNumber(0, 330);
    const randomX = generateRandomNumber(-insideX, insideX) + "px";
    const randomY = generateRandomNumber(-insideY, insideY) + "px";

    const randomRotate = generateRandomNumber(-720, 720);

    div.style.transition = "all";
    div.style.transitionDuration = `${generateRandomNumber(1000, 5000)}ms`;
    div.style.transform = `translate(${randomX},${randomY}) rotate(${randomRotate}deg)`;
  });

  clearTimeout(timer);
  timer = setTimeout(() => {
    newDivList.forEach((div) => {
      div.style.transition = "all";
      div.style.transitionDuration = `${generateRandomNumber(1000, 5000)}ms`;
      div.style.transform = `translate(0,0) rotate(0)`;
    });
  }, 5000);
});
