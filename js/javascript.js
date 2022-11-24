const container = document.querySelector("#container");
container.setAttribute("style", "display: flex; flex-grow: 0; flex-shrink: 0; width: 1000px; height: 1000px; justify-content: center; align-items: stretch;");

let pixelSide = 16;
const gridSize = document.querySelector("#gridsize");
gridSize.addEventListener("click", () => {
    while (container.firstChild){
        container.removeChild(container.firstChild);
    }
    pixelSide = prompt("Enter a Number between 10 and 100!");
    createGrid();
    draw();
});


function createGrid() {
    for (let i = 1; i <= pixelSide; i++) {
        const div = document.createElement("div");

        div.setAttribute("style", "display: flex; flex-direction: column; flex: 1; justify-content: center; align-items: stretch;");
        container.appendChild(div);
        for(let j = 1; j <= pixelSide; j++) {
            const innerDiv = document.createElement("div");
            innerDiv.setAttribute("style", "display:flex; flex: 1; background: pink;");
            innerDiv.setAttribute("id", "gridbox");
            div.appendChild(innerDiv);
        }
    }
}


function draw() {
    let mouseIsDown = false
    const myBody = document.querySelector("body");
    myBody.addEventListener('mousedown', function(){mouseIsDown = true});
    myBody.addEventListener('mouseup', function(){mouseIsDown = false});


    const gridDiv = document.querySelectorAll("#gridbox");
    gridDiv.forEach((box) => {
        box.addEventListener("mouseover", () => {
            if (mouseIsDown) {
                box.style.backgroundColor = "black";
            }
        });
    });
}


createGrid();
draw();



