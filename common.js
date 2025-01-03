function getRandomInt (max) {
    return Math.floor(Math.random() * max);
}

const controlsDiv = document.querySelector("#controls");
controlsDiv.style.display = "flex";
controlsDiv.style.gap = "5px";

function createHowManyNumbers () {
    const gridNumberControl = document.createElement("div");
    controlsDiv.appendChild(gridNumberControl);
    gridNumberControl.innerHTML = `How many numbers in the grid?`;
    
    let createInput = document.createElement("input");
    controlsDiv.appendChild(createInput);
    createInput.style.width = "50px";
    createInput.style.textAlign = "center";
    createInput.value = "95";
}
createHowManyNumbers()

const createButton = document.createElement("button");
controlsDiv.appendChild(createButton);
createButton.textContent = "Create"

function createGridNumbers () {

}