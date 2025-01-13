const controls2 = document.createElement("div");
controls2.classList.add("controls");
main.appendChild(controls2);
controls2.innerHTML = `Sum of all:`;

let sumOfAllDiv = document.createElement("div");
sumOfAllDiv.classList.add("sumPageSums");
controls2.appendChild(sumOfAllDiv);

function createSumControls() {
    let sumOfGridNumbers = 0;
    for (let number of numbers) {
     sumOfGridNumbers = sumOfGridNumbers + Number(number.innerHTML);
    }

    sumOfAllDiv.innerHTML = sumOfGridNumbers;
}

createSumControls()

const controls3 = document.createElement("div");
controls3.classList.add("controls");
main.appendChild(controls3);
controls3.innerHTML = `Sum of marked:`;

let sumOfMarkedDiv = document.createElement("div");
controls3.appendChild(sumOfMarkedDiv);
sumOfMarkedDiv.classList.add("sumPageSums");
sumOfMarkedDiv.style.padding = "0px 50px"
sumOfMarkedDiv.innerHTML = `-`;

let sumOfMarked = 0;


createButton.addEventListener("click", function() {
    numbersDiv.innerHTML = "";
    createGridNumbers(createInput.value)
    createSumControls();
    sumOfMarkedDiv.innerHTML = `-`;
    sumOfMarked = 0;
    for (let number of numbers) {
        number.addEventListener("click", function() {
            number.style.backgroundColor = "rgb(87, 187, 87)";
            sumOfMarked = Number(number.innerHTML);
            sumOfMarkedDiv.innerHTML = sumOfMarked;
        })
    }
})

for (let number of numbers) {
    number.addEventListener("click", function() {
        number.style.backgroundColor = "rgb(87, 187, 87)";
        sumOfMarked += Number(number.innerHTML);
        sumOfMarkedDiv.innerHTML = sumOfMarked;
    })
}

const resetButton = document.createElement("button");
controls3.appendChild(resetButton);
resetButton.innerHTML = `Reset`;

resetButton.addEventListener("click", function() {
    for (let number of numbers) {
        number.style.backgroundColor = "lightgray";
        sumOfMarked = 0;
        sumOfMarkedDiv.innerHTML = `-`;
    }
})