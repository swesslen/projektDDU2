const controls2 = document.createElement("div");
controls2.classList.add("controls");
main.appendChild(controls2);
controls2.innerHTML = `Add up to:`;

let sumInput = document.createElement("input");
controls2.appendChild(sumInput);
sumInput.style.width = "50px";
sumInput.style.textAlign = "center";
sumInput.value  = "179";

const findCellsButton = document.createElement("button");
controls2.appendChild(findCellsButton);
findCellsButton.innerHTML  = `Find Two Cells that Add Up`;

const randomDash = document.createElement("p");
controls2.appendChild(randomDash);
randomDash.innerHTML = `-`;

let twoCorrectDivs = [];

findCellsButton.addEventListener("click", function() {
    twoCorrectDivs = [];
    for (let number of numbers) {
        number.style.backgroundColor = "lightgray"
    }
    for (let number of numbers) {
        for (let numberX of numbers) {
            if (Number(numberX.innerHTML) + Number(number.innerHTML) == sumInput.value) {
                twoCorrectDivs.push(number);
                twoCorrectDivs.push(numberX);
                twoCorrectDivs[0].style.backgroundColor = "rgb(87, 187, 87)";
                twoCorrectDivs[1].style.backgroundColor = "rgb(87, 187, 87)";
                break;
            } else {
                continue;
            }
        }
    }
})


