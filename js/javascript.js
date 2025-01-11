const containerGridDiv = document.querySelector(".container-grid-div");
let gridDivNum = 1;

function drawSketch(size = 16) {
    const gridDivs = new Array(size ** 2).fill().map(() => {
        const gridDiv = document.createElement("div");
        gridDiv.setAttribute("class", "grid-div");
        containerGridDiv.appendChild(gridDiv);
        return gridDiv;
    });
    gridDivs.map((gridDiv) => {
        gridDiv.textContent = gridDivNum++;
    });
    document
        .querySelector("*")
        .setAttribute("style", `--grid-div-num: ${size}`);
    return gridDivs;
}
drawSketch();