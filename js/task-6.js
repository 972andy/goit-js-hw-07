function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
    const boxesContainer = document.querySelector("#boxes");
    boxesContainer.innerHTML = ''; 

  const fragment = document.createDocumentFragment();
  
  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    const size = 30 + i * 10;
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    box.classList.add("box");
    fragment.appendChild(box);
  }

  boxesContainer.appendChild(fragment);
}

function destroyBoxes() {
  const boxesContainer = document.querySelector("#boxes");
  boxesContainer.innerHTML = '';
}

document.querySelector("[data-create]").addEventListener("click", () => {
  const input = document.querySelector("#controls input");
  const value = parseInt(input.value, 10);

  if (isNaN(value) || value < 1 || value > 100) {
    input.value = '';
  } else {
    createBoxes(value);
    input.value = '';
  }
});

document.querySelector("[data-destroy]").addEventListener("click", () => {
  destroyBoxes();
});