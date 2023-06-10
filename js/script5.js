const btnRef = document.querySelector("[data-button]");
const clickRef = document.querySelector("[data-click-count]");
let clickSum = 0;
const sumClick = function (e) {
  clickSum += 1;
  clickRef.textContent = clickSum;
  return clickSum;
};

btnRef.addEventListener("click", sumClick);
