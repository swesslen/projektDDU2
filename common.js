function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

const controlsDiv = document.querySelector("#controls");
controlsDiv.style.display = "flex";
controlsDiv.style.gap = "5px";

const howManyNumbers = document.createElement("div");
controlsDiv.appendChild(howManyNumbers);
howManyNumbers.innerHTML = `How many numbers in the grid?`;
    
let createInput = document.createElement("input");
controlsDiv.appendChild(createInput);
createInput.style.width = "50px";
createInput.style.textAlign = "center";
createInput.value = "95";

const numbersDiv = document.querySelector("#numbers");
numbersDiv.style.display = "flex";
numbersDiv.style.gap = "2px";
numbersDiv.style.flexWrap = "wrap";
numbersDiv.style.marginTop = "20px";

const createButton = document.createElement("button");
controlsDiv.appendChild(createButton);
createButton.textContent = "Create"
createButton.addEventListener("click", function() {
    numbersDiv.innerHTML = "";
    createGridNumbers(createInput.value)
})

function createGridNumbers(max) {
    for (let i = 0; i < max; i++) {
        const gridNumberDiv = document.createElement("div");
        numbersDiv.appendChild(gridNumberDiv)
        
        gridNumberDiv.style.width = "50px";
        gridNumberDiv.style.height = "50px";
        gridNumberDiv.style.backgroundColor = "lightgray";
        gridNumberDiv.style.color = "black";
        gridNumberDiv.style.borderRadius = "10px";
        gridNumberDiv.innerHTML = getRandomInt(99);
        gridNumberDiv.style.display = "flex";
        gridNumberDiv.style.justifyContent = "center";
        gridNumberDiv.style.alignItems = "center";
        gridNumberDiv.style.fontSize = "20px";
    }
}