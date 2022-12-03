let board = document.querySelector('#board');
let color = 'black';

for (let i = 0; i < 4096; i++) {
    let tile = document.createElement('div');
    tile.addEventListener('mouseover', changecol);
    tile.style.backgroundColor = 'white';

    board.insertAdjacentElement('beforeend', tile);
}

function changecol(){
    this.style.backgroundColor = color;
}

function changetheme(selection){
    color = selection;
}

function reset() {
    let board = document.querySelector('#board');
    let tiles = board.querySelectorAll('div');
    tiles.forEach((div) => div.style.backgroundColor = 'white');
}