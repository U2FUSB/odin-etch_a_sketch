const containerGridDiv = document.querySelector(".container-grid-div");
const chooseNumberButton = document.querySelector(".choose-number-button");

function drawSketch(size = 16) {
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
function addListenerChooseGridDivNumber() {
    chooseNumberButton.addEventListener("click", () => {
        const rawUserInput = prompt("Enter a number between 1 and 100:", 16);
        const userInputAsNumber = Number(rawUserInput);
        const numberOfGridDivs =
            userInputAsNumber >= 1 && userInputAsNumber <= 100
                ? Math.floor(userInputAsNumber)
                : 16;
        resetStateOfDivs();
        drawSketch(numberOfGridDivs);
        addListenerChangeColorOnHover();
    });
}
function addListenerChangeColorOnHover() {
    containerGridDiv.childNodes.forEach((gridDiv) => {
        gridDiv.setAttribute("opacity-value", "1");
    });
    containerGridDiv.addEventListener("mouseover", changeColorOnHover);
}
function changeColorOnHover(gridDivEvent) {
    const gridDiv = gridDivEvent.target;
    gridDiv.setAttribute(
        "style",
        `background-color: ${getRandomColor()};
        opacity: ${gridDiv.getAttribute("opacity-value")};`
    );
    gridDiv.setAttribute(
        "opacity-value",
        `${gridDiv.getAttribute("opacity-value") - 0.1}`
    );
}
function resetStateOfDivs() {
    containerGridDiv.replaceChildren();
    containerGridDiv.removeEventListener("mouseover", changeColorOnHover);
}
function getRandomColor() {
    return `#${Math.floor(Math.random() * 16 ** 6).toString(16)}`;
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


drawSketch();
addListenerChooseGridDivNumber();
addListenerChangeColorOnHover();
