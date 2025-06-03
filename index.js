// create grid
let container = document.querySelector(".container");
let resetBtn = document.querySelector(".resize");
let initGridSize = 16;
// let penColor = "#472aa5";
let penR = 71;
let penG = 42;
let penB = 165;
let colorGraduation = 0.1;

const setGridColor = (elem) => {
    if (elem.style.backgroundColor == ""){
        elem.style.backgroundColor = getPenColor();
        elem.style.opacity = colorGraduation;
    }else{
        if (parseFloat(elem.style.opacity) < 1.0) {
            elem.style.opacity = parseFloat(elem.style.opacity) + colorGraduation;
        }
    }
}
const createGrid = (gridSize) => {
    for(let i = 1; i < gridSize + 1; i++){
        let gridRow = document.createElement("div");
        gridRow.setAttribute("class", "grid-row");
        for(let j = 1; j < gridSize + 1; j++){
            let newDiv = document.createElement("div");
            newDiv.setAttribute("class", "grid-div");
            newDiv.addEventListener("mouseover", (e)=>{
                setGridColor(e.target)

            })
            gridRow.appendChild(newDiv);
        }
        container.appendChild(gridRow);
    }

    document.querySelectorAll(".grid-div").forEach(element =>{
        element.style.height = `${element.offsetWidth}px`;
    })
}

const getPenColor = () => {
    penB = Math.floor(Math.random() * 255);
    console.log("pen", penB)
    let theRGB = `rgb(${penR}, ${penG}, ${penB})`
    return theRGB
}
const getGridSize = () => {
    let userSize = null;
    while(userSize == null) {
        let userChoice = prompt("Number of squares per side (100 max.):");
        userSize = parseInt(userChoice);
        if(userSize > 100 || userSize < initGridSize){
            userSize = null;
        }
    }
    return userSize
}

const resetGrid = () => {
    let userSize = getGridSize();
    container.innerHTML = "";
    createGrid(userSize);
}

resetBtn.addEventListener("click", resetGrid);

createGrid(initGridSize)
