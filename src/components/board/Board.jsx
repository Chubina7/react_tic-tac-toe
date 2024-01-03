import React, { useState } from "react";
import "./Board.css";
import Square from "../square/Square";
import Modal from "../modal/Modal";
import Btn from "../btn/Btn";

function Board() {
  const [xIsNext, setXIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));

  // to start new game using reload
  const startNewGameHandler = () => {
    window.location.reload();
  };

  // actions when each of 9 squares is clicked
  const squareClickHandler = (i) => {
    // to make copy of the board values
    const newSquareValue = squares.slice();

    if (
      newSquareValue[i] /* not to overwrite the value */ ||
      calculateWinner(squares) /* to calculate the winner */
    ) {
      return;
    }

    // to check whoose turn is
    if (xIsNext) {
      newSquareValue[i] = "X";
    } else {
      newSquareValue[i] = "O";
    }

    setSquares(newSquareValue); /* to set value when clicked */
    setXIsNext(!xIsNext); /* to change the user */
  };

  // status bar changer
  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = (
      <Modal
        statusMessage={`"${winner}" ` + "won the game"}
        onRestart={startNewGameHandler}
      />
    );
  } else {
    status = (
      <h1 className="next-player-is">It is "{xIsNext ? "X" : "O"}" Turn</h1>
    );
  }

  return (
    <>
      <div className="board">
        <div className="row">
          <Square
            value={squares[0]}
            onSquareClick={() => {
              squareClickHandler(0);
            }}
          />
          <Square
            value={squares[1]}
            onSquareClick={() => {
              squareClickHandler(1);
            }}
          />
          <Square
            value={squares[2]}
            onSquareClick={() => {
              squareClickHandler(2);
            }}
          />
        </div>
        <div className="row">
          <Square
            value={squares[3]}
            onSquareClick={() => {
              squareClickHandler(3);
            }}
          />
          <Square
            value={squares[4]}
            onSquareClick={() => {
              squareClickHandler(4);
            }}
          />
          <Square
            value={squares[5]}
            onSquareClick={() => {
              squareClickHandler(5);
            }}
          />
        </div>
        <div className="row">
          <Square
            value={squares[6]}
            onSquareClick={() => {
              squareClickHandler(6);
            }}
          />
          <Square
            value={squares[7]}
            onSquareClick={() => {
              squareClickHandler(7);
            }}
          />
          <Square
            value={squares[8]}
            onSquareClick={() => {
              squareClickHandler(8);
            }}
          />
        </div>
      </div>

      <div className="status-bar">
        <div>{status}</div>
        <div className="btn-container">
          <Btn
            title="Restart Game"
            onClick={startNewGameHandler}
          />
          <Btn
            title="Back to previous move"
            onClick={startNewGameHandler}
            btnStatus="inactive"
          />
        </div>
      </div>
    </>
  );
}

export default Board;

function calculateWinner(squares) {
  // all winning combinations
  const possibleWinners = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  // checking all the combinations
  for (let i = 0; i < possibleWinners.length; i++) {
    const [a, b, c] = possibleWinners[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }

  return null;
}
