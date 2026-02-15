function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btnChangeColor = document.querySelector('.change-color');
const colorDesc = document.querySelector('.color');

function changeColor() {
  const newColor = getRandomHexColor();
  const bg = document.body;
  bg.style.backgroundColor = newColor;
  colorDesc.textContent = newColor;
}

btnChangeColor.addEventListener('click', changeColor);
