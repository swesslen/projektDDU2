const controls2 = document.createElement("div");
main.appendChild(controls2);
controls2.classList.add("controls");

let copiesText = document.createElement("p");
controls2.appendChild(copiesText);
copiesText.innerHTML = `Click on a number to find copies`;

const resetButton = document.createElement("button");
controls2.appendChild(resetButton);
resetButton.innerHTML = `Reset`;

let sameCounter = 0;

resetButton.addEventListener("click", function() {
    copiesText.innerHTML = `Click on a number to find copies`;
    sameCounter = 0;
    for (let number of numbers) {
        number.style.backgroundColor = "lightgray"
    }
})

function findSame() {
    for (let number of numbers) {
        number.addEventListener("click", function() {
            for (let number of numbers) {
                number.style.backgroundColor = "lightgray"
            }
            sameCounter = 0;
            number.style.backgroundColor = "rgb(87, 187, 87)"
            for (let numberX of numbers) {
                if (number.innerHTML == numberX.innerHTML) {
                    numberX.style.backgroundColor = "rgb(87, 187, 87)";
                    sameCounter++;
                }
            }
            copiesText.innerHTML = `${sameCounter} copies of the number ${number.innerHTML}`;
        })
    }
}
findSame();

createButton.addEventListener("click", function() {
    findSame();
})

