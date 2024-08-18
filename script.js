const container = document.querySelector('.grid');

for (let i = 0; i <256 ; i++){
        const gridItem = document.createElement('div');
        gridItem.classList.add('cell');

        const gridSquare = document.createElement('div');
        gridSquare.classList.add('grid-square');

       gridItem.appendChild(gridSquare);
       container.appendChild(gridItem);
    }
