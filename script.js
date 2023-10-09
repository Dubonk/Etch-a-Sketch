const container = document.querySelector('#container');
const large = document.querySelector('#large');
const largest = document.querySelector('#largest');
const sixteen = document.querySelector('#sixteen');
const eight = document.querySelector('#eight');
const small = document.querySelector('#small');
const reset = document.querySelector('#reset');
const tracks = document.querySelector('#tracks');
const cells = document.createElement('div');
const erase = document.querySelector('#erase');
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
        tracks.addEventListener('click', () => {
        cells.classList.toggle('outlineClicked');})
        const cells = document.createElement('div');
        cells.classList.add('cells');
        cells.style.width = '13px';
        cells.style.height = '13px';
        container.append(cells);
        cells.addEventListener('mousemove', () => { 
            if(isDrawing && erase.classList.contains('clicked')){cells.style.background = "#d8d8d8";}
            else if (isDrawing) {
                cells.style.background = "black";
            }
        })   }  
    }
    
    if(num == 1024) {
        deleteCells();
    for(let i = 1; i <= num; i++) {
        tracks.addEventListener('click', () => {
        cells.classList.toggle('outlineClicked');})
        const cells = document.createElement('div');
        cells.classList.add('cells');
        cells.style.width = '28px';
        cells.style.height = '28px';
        container.append(cells);
        cells.addEventListener('mousemove', () => { 
            if(isDrawing && erase.classList.contains('clicked')){cells.style.background = "#d8d8d8";}
            else if (isDrawing) {
                cells.style.background = "black";
            }
        })}  
    }
    
   
    if(num == 256) {
        deleteCells();
    for(let i = 1; i <= num; i++) {
        tracks.addEventListener('click', () => {
        cells.classList.toggle('outlineClicked');})
        const cells = document.createElement('div');
        cells.classList.add('cells');
        container.append(cells);
        cells.addEventListener('mousemove', () => { 
            if(isDrawing){
                if(isDrawing && erase.classList.contains('clicked')){cells.style.background = "#d8d8d8";}
                else if (isDrawing) {
                    cells.style.background = "black";}
                }
        })}  
    }

    else if(num == 64) {
        deleteCells();
    for(let i = 1; i <= num; i++) {
        tracks.addEventListener('click', () => {
        cells.classList.toggle('outlineClicked');})
        const cells = document.createElement('div');
        cells.classList.add('cells');
        cells.style.width = '118px';
        cells.style.height = '118px';
        container.append(cells);
        cells.addEventListener('mousemove', () => {
            if(isDrawing && erase.classList.contains('clicked')){cells.style.background = "#d8d8d8";}
            else if (isDrawing) {
                cells.style.background = "black";
            }
    });
}
}
else if(num == 16) {
    deleteCells();
    for(let i = 1; i <= num; i++) {
        tracks.addEventListener('click', () => {
        cells.classList.toggle('outlineClicked');})
        const cells = document.createElement('div');
        cells.classList.add('cells');
        cells.style.width = '238px';
        cells.style.height = '238px';
        container.append(cells);
        cells.addEventListener('mousemove', () => {
        if(isDrawing){
            if(isDrawing && erase.classList.contains('clicked')){cells.style.background = "#d8d8d8";}
            else if (isDrawing) {
                cells.style.background = "black";}
            }
    })
}}

}

small.addEventListener('click', () => {
    deleteCells();
    baseCells(16);
});
eight.addEventListener('click', () => {
    deleteCells();
    baseCells(64);
});
sixteen.addEventListener('click', () => {
    deleteCells();
    baseCells(256);
});
large.addEventListener('click', () => {
    deleteCells();
    baseCells(1024);
});
largest.addEventListener('click', () => {
    deleteCells();
    baseCells(4096);
});
reset.addEventListener('click', () => {
    deleteCells();
    baseCells(256);
});
erase.addEventListener('click', () => {
    erase.classList.toggle('clicked');
});

function deleteCells() {
    const elements = document.getElementsByClassName('cells');
   while(elements.length > 0) {
    elements[0].parentNode.removeChild(elements[0]);
   }
};

baseCells(256);