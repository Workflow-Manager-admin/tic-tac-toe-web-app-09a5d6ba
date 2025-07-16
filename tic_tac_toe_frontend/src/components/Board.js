import React from 'react';

// PUBLIC_INTERFACE
const Board = ({ squares, onClick }) => {
  /**
   * Renders the Tic Tac Toe game board
   * @param {Array} squares - Array of 9 elements representing the board state
   * @param {Function} onClick - Handler function for cell clicks
   */
  return (
    <div className="board">
      {squares.map((square, index) => (
        <button
          key={index}
          className="square"
          onClick={() => onClick(index)}
          disabled={square}
        >
          {square}
        </button>
      ))}
    </div>
  );
};

export default Board;
