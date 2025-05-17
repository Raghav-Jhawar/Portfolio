import { useState } from "react";
import Board from "./Board";
import './TicTacToe.css'

function Square({ value, onSquareClick }) {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}

export default Square;