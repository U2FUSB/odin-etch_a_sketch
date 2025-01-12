const containerGridDiv = document.querySelector(".container-grid-div");
const chooseNumberButton = document.querySelector(".choose-number-button");

function drawSketch(size = 16) {
    containerGridDiv.replaceChildren();
    const gridDivs = new Array(size ** 2).fill().map(() => {
        const gridDiv = document.createElement("div");
        gridDiv.setAttribute("class", "grid-div");
        containerGridDiv.appendChild(gridDiv);
        return gridDiv;
    });
    document
    .querySelector("*")
    .setAttribute("style", `--grid-div-num: ${size}`);
    // addGridDivCounter(gridDivs); //If I want to count the squares on the screen
}
function addGridDivCounter(gridDivs) {
    let gridDivNumX = 0;
    let gridDivNumY = 1;
    gridDivs.map((gridDiv) => {
        gridDiv.textContent = `${++gridDivNumX}/${gridDivNumY}`;
        if (gridDivNumX % Math.sqrt(gridDivs.length) === 0) {
            gridDivNumX = 0;
            gridDivNumY++;
        }
    });
}
function addListenerGridDivNumber() {
    chooseNumberButton.addEventListener("click", () => {
        const rawUserInput = prompt("Enter a number between 1 and 100:", 16);
        const userInputAsNumber = Number(rawUserInput);
        const numberOfGridDivs =
            userInputAsNumber >= 1 && userInputAsNumber <= 100
                ? Math.floor(userInputAsNumber)
                : 16;
        drawSketch(numberOfGridDivs)
    });
}
drawSketch();
addListenerGridDivNumber()

