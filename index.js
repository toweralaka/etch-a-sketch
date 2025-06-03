// create grid
let container = document.querySelector(".container");
let grid_size = 16;

for(let i = 1; i < grid_size + 1; i++){
    let gridRow = document.createElement("div");
    gridRow.setAttribute("class", "grid-row");
    for(let j = 1; j < grid_size + 1; j++){
        let newDiv = document.createElement("div");
        newDiv.setAttribute("class", "grid-div");
        newDiv.addEventListener("mouseover", (e)=>{
            e.target.style.backgroundColor = "red";

        })
        gridRow.appendChild(newDiv);
    }
    container.appendChild(gridRow);
}

document.querySelectorAll(".grid-div").forEach(element =>{
    element.style.height = `${element.offsetWidth}px`;
})