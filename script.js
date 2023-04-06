const container = document.querySelector('#container');
const large = document.querySelector('#large');
const largest = document.querySelector('#largest');
const sixteen = document.querySelector('#sixteen');
const eight = document.querySelector('#eight');
const small = document.querySelector('#small');
const reset = document.querySelector('#reset');
const cells = document.createElement('div');
let isDrawing = false;


window.addEventListener("mousedown", () => {
    isDrawing = true;
});
window.addEventListener("mouseup", () => {
    isDrawing = false;
})


function baseCells(num) {
    if(num == 4096) {
        deleteCells();
    for(let i = 1; i <= num; i++) {
        const cells = document.createElement('div');
        cells.classList.add('cells');
        cells.style.width = '15px';
        cells.style.height = '15px';
        container.append(cells);
        cells.addEventListener('mouseover', () => { 
            if(isDrawing){cells.style.background = "#000000";}
        })}  
    }
    
    if(num == 1024) {
        deleteCells();
    for(let i = 1; i <= num; i++) {
        const cells = document.createElement('div');
        cells.classList.add('cells');
        cells.style.width = '30px';
        cells.style.height = '30px';
        container.append(cells);
        cells.addEventListener('mouseover', () => { 
            if(isDrawing){cells.style.background = "#000000";}
        })}  
    }
    
   
    if(num == 256) {
        deleteCells();
    for(let i = 1; i <= num; i++) {
        const cells = document.createElement('div');
        cells.classList.add('cells');
        container.append(cells);
        cells.addEventListener('mouseover', () => { 
            if(isDrawing){cells.style.background = "#000000";}
        })}  
    }

    else if(num == 64) {
        deleteCells();
    for(let i = 1; i <= num; i++) {
        const cells = document.createElement('div');
        cells.classList.add('cells');
        cells.style.width = '120px';
        cells.style.height = '120px';
        container.append(cells);
        cells.addEventListener('mouseover', () => {
        if(isDrawing){cells.style.backgroundColor = "#000000" }});
}
}
else if(num == 16) {
    deleteCells();
    for(let i = 1; i <= num; i++) {
        const cells = document.createElement('div');
        cells.classList.add('cells');
        cells.style.width = '240px';
        cells.style.height = '240px';
        container.append(cells);
        cells.addEventListener('mouseover', () => {
        if(isDrawing){cells.style.backgroundColor = "#000000";}
    })
}}
}

small.addEventListener('click', () => {
    baseCells(16);
})
eight.addEventListener('click', () => {
    baseCells(64);
})
sixteen.addEventListener('click', () => {
    baseCells(256);
})
large.addEventListener('click', () => {
    baseCells(1024);
})
largest.addEventListener('click', () => {
    baseCells(4096);
})
reset.addEventListener('click', () => {
    deleteCells('cells');
    baseCells(256);
})


function deleteCells() {
    const elements = document.getElementsByClassName('cells');
   while(elements.length > 0) {
    elements[0].parentNode.removeChild(elements[0]);
   }
}


//