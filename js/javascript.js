const containerGridDiv = document.querySelector(".container-grid-div");
let gridDivNumX = 0;
let gridDivNumY = 1;

function drawSketch(size = 16) {
    const gridDivs = new Array(size ** 2).fill().map(() => {
        const gridDiv = document.createElement("div");
        gridDiv.setAttribute("class", "grid-div");
        gridDiv.textContent = `${gridDivNumY}/${++gridDivNumX}`;
        if (gridDivNumX % size === 0) {
            gridDivNumY++;
            gridDivNumX = 0;
        }
        containerGridDiv.appendChild(gridDiv);
        return gridDiv;
    });

    console.log(gridDivs);
}
// 	- Divs appear in a square. (maybe wrap?)
// 	- Fixed size of singe divs? Maybe flexible css unit

drawSketch();
