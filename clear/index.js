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
            gridNumberDiv.classList.add("marked");
            gridNumberDiv.innerHTML = "";
            gridNumberDiv.classList.remove("gridNumberDiv");
        })
    }
}

for (let number of numbers) {
    number.addEventListener("click", function() {
        number.classList.add("marked");
        number.innerHTML = "";
        number.classList.remove("gridNumberDiv");
    })
}

fillClearedButton.addEventListener("click", function() {
    for (let number of numbers) {
        
    }
})