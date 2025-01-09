const controls2 = document.createElement("div");
controls2.id = "controls2";
main.appendChild(controls2)

const newRandomNumberButton = document.createElement("button");
controls2.appendChild(newRandomNumberButton);
newRandomNumberButton.textContent = "New Random Number";

let randomNumber = document.createElement("div");
controls2.appendChild(randomNumber)
randomNumber.id = "removePageButtons";
randomNumber.textContent = "-"

const removeButton = document.createElement("button");
controls2.appendChild(removeButton);
removeButton.innerHTML = `Remove`

let numbersRemoved = document.createElement("div");
controls2.appendChild(numbersRemoved)
numbersRemoved.id = "removePageButtons";
numbersRemoved.textContent = "-"
numbersRemoved.style.width = "200px"

let amountSelected = 0;

newRandomNumberButton.addEventListener("click", function() {
    randomNumber.innerHTML = getRandomInt(99)
    amountSelected = 0;

    for (let number of numbers) {
        if (number.id != "removedGridDiv") {
            number.style.backgroundColor = "lightgray";
            number.id = "";
        }
        if (randomNumber.innerHTML === number.innerHTML) {
            number.style.backgroundColor = "orange";
            number.id = "selectedBox"
            amountSelected++;
        }
    }
    
    
    
})

removeButton.addEventListener("click", function() {
    for (let number of numbers) {
        if (amountSelected == 0) {
            numbersRemoved.innerHTML = `Nothing to remove`;
        } else if (number.id == "selectedBox") {
            number.style.backgroundColor = "red";
            number.innerHTML = `X`;
            number.id = "removedGridDiv"
            
            numbersRemoved.innerHTML = `${randomNumber.innerHTML} removed ${amountSelected} times`;
        }
    }
    
})
