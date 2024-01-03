import React, { useState } from "react";
import "./Board.css";
import Square from "../square/Square";

function Board() {
  const [xIsNext, setXIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));

  const squareClickHandler = (i) => {
    const newSquareValue = squares.slice();
    if (newSquareValue[i]) {
      return;
    }
    if (xIsNext) {
      newSquareValue[i] = "X";
    } else {
      newSquareValue[i] = "O";
    }
    setSquares(newSquareValue);
    setXIsNext(!xIsNext);
  };

  return (
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
  );
}

export default Board;
