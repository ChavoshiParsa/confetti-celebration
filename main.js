import "./style.css";

function GRN(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function generateRandomColor(min, max) {
  const r = GRN(0, 255);
  const g = GRN(0, 255);
  const b = GRN(0, 255);
  return `rgb(${r},${g},${b})`;
}

const confettiLayout = document.querySelector("#confetti-layout");
const app = document.querySelector("#app");
const button = document.querySelector("#celebrate");

/*
for (let i = 0; i < 1000; i++) {
  const newDiv = document.createElement("div");
  newDiv.style.backgroundColor = generateRandomColor();
  newDiv.style.width = GRN(3, 10) + "px";
  newDiv.style.height = GRN(3, 20) + "px";
  newDiv.style.opacity = "0." + GRN(1, 9);
  newDiv.style.position = "absolute";
  confettiLayout.appendChild(newDiv);
}

const newDivList = document.querySelectorAll("#confetti-layout div");

let timer;
button.addEventListener("click", () => {
  newDivList.forEach((div) => {
    const insideX = GRN(200, 1200);
    const insideY = GRN(100, 600);
    const randomX = GRN(-insideX, insideX) + "px";
    const randomY = GRN(-insideY, insideY) + "px";

    const randomRotate = GRN(-720, 720);

    div.style.transition = "all";
    div.style.transitionDuration = `${GRN(700, 7000)}ms`;
    div.style.transform = `translate(${randomX},${randomY}) rotate(${randomRotate}deg) skew(${GRN(
      0,
      50
    )}deg,${GRN(0, 50)}deg)`;
  });

  clearTimeout(timer);
  timer = setTimeout(() => {
    newDivList.forEach((div) => {
      div.style.transition = "all";
      div.style.transitionDuration = `${GRN(700, 7000)}ms`;
      div.style.transform = `translate(0,0) rotate(0) skew(0,0) `;
    });
  }, 5000);
});
*/

let newDivList = [];

setInterval(() => {
  for (let i = 0; i < 1000; i++) {
    const newDiv = document.createElement("div");
    newDiv.style.backgroundColor = generateRandomColor();
    newDiv.style.width = GRN(8, 20) + "px";
    newDiv.style.height = GRN(8, 30) + "px";
    newDiv.style.opacity = "0." + GRN(1, 9);
    newDiv.style.position = "absolute";
    newDiv.style.transition = "all";
    newDiv.style.transitionDuration = `4000ms`;
    newDivList.push(newDiv);
    confettiLayout.appendChild(newDiv);
    setTimeout(() => {
      newDiv.style.opacity = 0;
      setTimeout(() => {
        confettiLayout.removeChild(newDiv);
      }, 3000);
    }, 3000);
  }
  setTimeout(() => {
    newDivList.forEach((div) => {
      const insideX = GRN(50, 1500);
      const insideY = GRN(50, 1000);
      const randomX = GRN(-insideX, insideX) + "px";
      const randomY = GRN(-insideY, insideY) + "px";

      const randomRotate = GRN(-1200, 1200);
      div.style.transform = `translate(${randomX},${randomY}) rotate(${randomRotate}deg) 
      skew(${GRN(-20, 20)}deg,${GRN(-20, 20)}deg)`;
    });
    newDivList = [];
  }, 50);
}, 3000);

button.addEventListener("click", () => {});
