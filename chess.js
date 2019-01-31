function createBoard(boardId = 'board', squareSize = 50) {
  if (!document.getElementById(boardId)) {
    const newBoard = document.createElement('div');
    let newRow;
    let newSquare;

    newBoard.classList.add('jsc-board');
    newBoard.id = boardId;
    for (let i = 8; i > 0; i--) {
      newRow = document.createElement('div');
      newRow.classList.add('jsc-row');
      for (let j = 0; j < 8; j++) {
        newSquare = document.createElement('div');
        newSquare.classList.add('jsc-square',
            'jsc-' + ((i + j) % 2 === 0 ? 'black' : 'white'),
            `jsc-${boardId}-${'abcdefgh'[j]}${i}`);
        newSquare.style.width = `${squareSize}px`;
        newSquare.style.height = `${squareSize}px`;
        addColNotation(newSquare, squareSize, i, j);
        addRowNotation(newSquare, squareSize, i, j);
        newRow.appendChild(newSquare);
      }
      newBoard.appendChild(newRow);
      newBoard.style.width = `${squareSize * 8}px`;
      newBoard.style.height = `${squareSize * 8}px`;
    }
    document.body.appendChild(newBoard);
  } else {
    console.log(`Id ${boardId} is already taken`);
  }
}

function addRowNotation(square, squareSize, row, column) {
  if (column === 0) {
    const notation = document.createElement('div');
    notation.classList.add('jsc-notation', 'jsc-notation-row');
    notation.appendChild(document.createTextNode(`${row}`));
    notation.style.fontSize = `${squareSize / 4}px`;
    square.appendChild(notation);
  }
}

function addColNotation(square, squareSize, row, column) {
  if (row === 1) {
    const notation = document.createElement('div');
    notation.classList.add('jsc-notation', 'jsc-notation-col');
    notation.appendChild(document.createTextNode(`${'abcdefgh'[column]}`));
    notation.style.fontSize = `${squareSize / 4}px`;
    square.appendChild(notation);
  }
}

createBoard('board', 80);
