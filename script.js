const container = document.querySelector('#container');
const sixteen = document.querySelector('#sixteen');
const eight = document.querySelector('#eight');
const small = document.querySelector('#small');
const reset = document.querySelector('#reset');
const cells = document.createElement('div');

    
function baseCells(num) {
    deleteCells();
    if(num == 256) {

    for(let i = 1; i <= num; i++) {
        const cells = document.createElement('div');
        cells.classList.add('cells');
        container.append(cells);
        cells.addEventListener('mouseover', () => {
        cells.style.backgroundColor = "#e27d60";
        })
} 
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
        cells.style.backgroundColor = "#D9AFD9";
        //cells.style.backgroundImage = 'linear-gradient(0deg, #D9AFD9 0%, #97D9E1 100%)';

    })
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
        cells.style.backgroundColor = "#41b3a3";
    })
}
}

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
