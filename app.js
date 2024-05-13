const container = document.querySelector('.container');

//reset the grid
const btn = document.querySelector("#reset");
btn.addEventListener('click',()=>{
    let div = document.querySelectorAll('.individual');
    for(i=0;i<div.length;i++){
        div[i].style.backgroundColor = "white";
    }
});

const gridBtn = document.querySelector('#grid_size');
gridBtn.addEventListener("click",()=>{
    let a = prompt("Enter the grid size you want:(1-100)");
    if(parseInt(a)>= 0 && parseInt(a)<=100){
        let size= parseInt(a);
        deleteGrid();
        createGrid(size);
    }
});

//function to delete a grid

function deleteGrid(){
    let parent = container;
    while(parent.firstChild){
        parent.removeChild(parent.firstChild);
    }
}

function createGrid(grid_size){

    for(let i =0 ;i<grid_size;i++){
        for(let j=0;j<grid_size;j++){
            let div = document.createElement('div');
            div.classList.add('individual');
            div.style.setProperty("--columns", grid_size);
            div.style.setProperty("--rows", grid_size);
            

            div.addEventListener("mouseover",function(){
                div.style.backgroundColor = "black";
            })
            
            container.appendChild(div);
        }
    }
}

let grid_size = 16;
createGrid(grid_size);
