const controls2 = document.createElement("div");
main.appendChild(controls2);
controls2.classList.add("controls");
controls2.innerHTML = `Click on a number to find copies`;

const resetButton = document.createElement("button");
controls2.appendChild(resetButton);
resetButton.innerHTML = `Reset`;
