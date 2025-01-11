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


// Some assertions for testing
console.assert(drawSketch().length === 16**2, "Default grid-div number wrong")
console.assert(drawSketch(13).length === 13**2, "Dynamic grid-div number wrong")
// console.assert(drawSketch(-13).length === 16**2, "Negative grid-div number does not create default")
// console.assert(drawSketch(0).length === 16**2, "0 as grid-div number does not create default")
// console.assert(drawSketch(101).length === 16**2, "Bigger then 100 as grid-div number does not create 100*100 grid")
// console.assert(drawSketch(0).length === 16**2, "0 as grid-div number does not create default")
// console.assert(drawSketch("testString").length === 16**2, "String as grid-div number does not create default")