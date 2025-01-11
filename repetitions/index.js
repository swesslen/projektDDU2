const controls2 = document.createElement("div");
controls2.classList.add("controls");
main.appendChild(controls2);
controls2.innerHTML = `Most repeated number(s):`;

let mostRepeatedNumbersDiv = document.createElement("div");
controls2.appendChild(mostRepeatedNumbersDiv);
mostRepeatedNumbersDiv.style.border = "1px solid black";
mostRepeatedNumbersDiv.style.width = "fit-content";
mostRepeatedNumbersDiv.style.paddingLeft = "10px";
mostRepeatedNumbersDiv.style.paddingRight = "10px";

let theMostFrequentNumbersAndCount = [];

function findMostRepeatedNumbers(arr) {
    theMostFrequentNumbersAndCount = [];

    const frequencyMap = arr.reduce((acc, num) => {
        acc[num] = (acc[num] || 0) + 1;
        return acc;
    }, {});

    const maxCount = Math.max(...Object.values(frequencyMap));

    const mostFrequentNumbers = Object.entries(frequencyMap)
        .filter(([num, count]) => count === maxCount)
        .map(([num]) => num);

    theMostFrequentNumbersAndCount.push({
        numbers: mostFrequentNumbers, 
        count: maxCount
    });
    return {numbers: mostFrequentNumbers, count: maxCount};
}

findMostRepeatedNumbers(numbersNumbers);

mostRepeatedNumbersDiv.innerHTML = `
    ${theMostFrequentNumbersAndCount[0].numbers} (Repeated ${theMostFrequentNumbersAndCount[0].count} times)
`;

const controls3 = document.createElement("div");
controls3.classList.add("controls");
main.appendChild(controls3);
controls3.innerHTML = `Number(s) not in place:`;

let numbersNotInPlaceDiv = document.createElement("div");
controls3.appendChild(numbersNotInPlaceDiv);
numbersNotInPlaceDiv.style.border = "1px solid black";
numbersNotInPlaceDiv.style.paddingLeft = "10px";
numbersNotInPlaceDiv.style.paddingRight = "10px";

function findMissingNumbers(generatedNumbers) {
    const allNumbers = [];
    for (let i = 1; i < 100; i++) {
        allNumbers.push(i);
    }

    const missingNumbers = allNumbers.filter(num => !generatedNumbers.includes(num));

    return missingNumbers;
}

let missingNumbers = findMissingNumbers(numbersNumbers);

numbersNotInPlaceDiv.innerHTML = missingNumbers;

createButton.addEventListener("click", function() {
    let missingNumbers = findMissingNumbers(numbersNumbers);  
    numbersNotInPlaceDiv.innerHTML = missingNumbers;
    findMostRepeatedNumbers(numbersNumbers);
    mostRepeatedNumbersDiv.innerHTML = `
        ${theMostFrequentNumbersAndCount[0].numbers} (Repeated ${theMostFrequentNumbersAndCount[0].count} times)
    `;
})