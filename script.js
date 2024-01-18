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
                cells.classList.toggle('outlineClicked');
            })
            const cells = document.createElement('div');
            cells.classList.add('cells');
            cells.style.width = '13px';
            cells.style.height = '13px';
            container.append(cells);
            cells.addEventListener('mousemove', () => { 
                if(isDrawing && erase.classList.contains('clicked')){
                        cells.style.background = "#d8d8d8";
                    }
                else if (isDrawing) {
                    cells.style.background = 'black';
                    cells.classList.add('colored');
                    }
                reset.addEventListener('click', () => {
                        cells.classList.remove('colored');
                        cells.classList.add('fade');
                        cells.style.background = '#d8d8d8';
                    });
                })}  
    }
    
    if(num == 1024) {
        deleteCells();
        for(let i = 1; i <= num; i++) {
            tracks.addEventListener('click', () => {
                cells.classList.toggle('outlineClicked');
            })
        const cells = document.createElement('div');
        cells.classList.add('cells');
        // cells.style.width = '28px';
        // cells.style.height = '28px';
        container.append(cells);
        cells.addEventListener('mousemove', () => { 
            if(isDrawing && erase.classList.contains('clicked')){
                    cells.style.background = "#d8d8d8";
                }
            else if (isDrawing) {
                cells.style.background = 'black';
                cells.classList.add('colored');
                }
            reset.addEventListener('click', () => {
                cells.classList.remove('colored');
                cells.classList.add('fade');
                cells.style.background = '#d8d8d8';
                });
            })}  
    }
    
   
    if(num == 256) {
        deleteCells();
        for(let i = 1; i <= num; i++) {
            tracks.addEventListener('click', () => {
                cells.classList.toggle('outlineClicked');
            })
        const cells = document.createElement('div');
        cells.classList.add('cells');
        container.append(cells);
        cells.style.width = '58px';
        cells.style.height = '58px';
        cells.addEventListener('mousemove', () => { 
            if(isDrawing){
                if(isDrawing && erase.classList.contains('clicked')){
                    cells.style.background = "#d8d8d8";
                        }
                else if (isDrawing) {
                    cells.style.background = 'black';
                    cells.classList.add('colored');
                }
                }
                reset.addEventListener('click', () => {
                    cells.classList.remove('colored');
                    cells.classList.add('fade');
                    cells.style.background = '#d8d8d8';
                });
        })}  
    }

    else if(num == 64) {
        deleteCells();
        for(let i = 1; i <= num; i++) {
            tracks.addEventListener('click', () => {
                cells.classList.toggle('outlineClicked');
            });
        const cells = document.createElement('div');
        cells.classList.add('cells');
        cells.style.width = '118px';
        cells.style.height = '118px';
        container.append(cells);
        cells.addEventListener('mousemove', () => {
            if(isDrawing && erase.classList.contains('clicked')){
                    cells.style.background = "#d8d8d8";
                }
            else if (isDrawing) {
                cells.style.background = 'black';
                cells.classList.add('colored');
                }
            reset.addEventListener('click', () => {
                cells.classList.remove('colored');
                cells.classList.add('fade');
                cells.style.background = '#d8d8d8';
            });
    });
}
}
else if(num == 16) {
    deleteCells();
    for(let i = 1; i <= num; i++) {
        tracks.addEventListener('click', () => {
            cells.classList.toggle('outlineClicked');
        });
        const cells = document.createElement('div');
        cells.classList.add('cells');
        cells.style.width = '238px';
        cells.style.height = '238px';
        container.append(cells);
        cells.addEventListener('mousemove', () => {
            if(isDrawing && erase.classList.contains('clicked')){
                    cells.style.background = "#d8d8d8";
                }
            else if (isDrawing) {
                cells.style.background = 'black';
                cells.classList.add('colored');
            }
            
            reset.addEventListener('click', () => {
                cells.classList.remove('colored');
                cells.classList.add('fade');
                cells.style.background = '#d8d8d8';
            })
    })
}}

}

small.addEventListener('click', () => {
    eight.classList.remove('clicked');
    sixteen.classList.remove('clicked');
    large.classList.remove('clicked');
    largest.classList.remove('clicked');
    small.classList.add('clicked');
    tracks.classList.remove('clicked');
    deleteCells();
    baseCells(16);
    
});
eight.addEventListener('click', () => {
    eight.classList.add('clicked');
    sixteen.classList.remove('clicked');
    large.classList.remove('clicked');
    largest.classList.remove('clicked');
    small.classList.remove('clicked');
    tracks.classList.remove('clicked');
    deleteCells();
    baseCells(64);
    
});
sixteen.addEventListener('click', () => {
    eight.classList.remove('clicked');
    sixteen.classList.add('clicked');
    large.classList.remove('clicked');
    largest.classList.remove('clicked');
    small.classList.remove('clicked');
    tracks.classList.remove('clicked');
    deleteCells();
    baseCells(256);
    
});
large.addEventListener('click', () => {
    eight.classList.remove('clicked');
    sixteen.classList.remove('clicked');
    large.classList.add('clicked');
    largest.classList.remove('clicked');
    small.classList.remove('clicked');
    tracks.classList.remove('clicked');
    deleteCells();
    baseCells(1024);
    
});
largest.addEventListener('click', () => {
    eight.classList.remove('clicked');
    sixteen.classList.remove('clicked');
    large.classList.remove('clicked');
    largest.classList.add('clicked');
    small.classList.remove('clicked');
    tracks.classList.remove('clicked');
    deleteCells();
    baseCells(4096);
    
});
reset.addEventListener('click', () => {
    tracks.classList.remove('clicked');
    container.classList.add('shake');
    setTimeout(function() {
        container.classList.remove('shake');
    }, 1000);
    setTimeout(function() {
        deleteCells() 
        baseCells(num)
    }, 1000);
});
erase.addEventListener('click', () => {
    erase.classList.toggle('clicked');
});

tracks.addEventListener('click', () => {
    tracks.classList.toggle('clicked');
})

function deleteCells() {
    const elements = document.getElementsByClassName('cells');
    num = elements.length;
   while(elements.length > 0) {
    elements[0].parentNode.removeChild(elements[0]);
   }
};

baseCells(1024);
large.classList.add('clicked');