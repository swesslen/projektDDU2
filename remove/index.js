const controls2 = document.createElement("div");
controls2.id = "controls2";
main.appendChild(controls2)

const newRandomNumberButton = document.createElement("button");
controls2.appendChild(newRandomNumberButton);
newRandomNumberButton.textContent = "New Random Number";

let randomNumber = document.createElement("div");
controls2.appendChild(randomNumber)
randomNumber.id = "randomNumber";
randomNumber.textContent = "-"

const removeButton = document.createElement("button");
controls2.appendChild(removeButton);
removeButton.innerHTML = `Remove`

let numbersRemoved = document.createElement("div");
controls2.appendChild(numbersRemoved)
numbersRemoved.id = "randomNumber";
numbersRemoved.textContent = "-"
numbersRemoved.style.width = "200px"

newRandomNumberButton.addEventListener("click", function() {
    randomNumber.innerHTML = getRandomInt(createInput.value)
})

function markNumberBox() {
    
}