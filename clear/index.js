const controls2 = document.createElement("div");
main.appendChild(controls2);
controls2.classList.add("controls");

const fillClearedButton = document.createElement("button");
controls2.appendChild(fillClearedButton);
fillClearedButton.innerHTML = `Fill Cleared`;

function createGridNumbers(max) {
    numbers = [];
    numbersNumbers = [];
    for (let i = 0; i < max; i++) {
        let gridNumberDiv = document.createElement("div");
        numbersDiv.appendChild(gridNumberDiv);
        gridNumberDiv.classList.add("gridNumberDiv")
        gridNumberDiv.innerHTML = getRandomInt(99);
        numbers.push(gridNumberDiv);
        numbersNumbers.push(Number(gridNumberDiv.innerHTML));

        gridNumberDiv.addEventListener("click", function() {
            if (gridNumberDiv.classList.contains("marked")) {
                gridNumberDiv.setAttribute("class", "gridNumberDiv");
            } else if (gridNumberDiv.classList.contains("gridNumberDiv")) {
                gridNumberDiv.setAttribute("class", "marked");
            }
        })
    }
}

function updateBox() {
    for (let number of numbers) {
        number.addEventListener("click", function() {
            if (number.classList.contains("marked")) {
                number.setAttribute("class", "gridNumberDiv");
            } else if (number.classList.contains("gridNumberDiv")) {
                number.setAttribute("class", "marked");
            }
            
        })
    }    
}
updateBox()

fillClearedButton.addEventListener("click", function() {
    for (let number of numbers) {
        number.setAttribute("class", "gridNumberDiv")
    }
})