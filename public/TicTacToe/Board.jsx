import { useState } from "react";
import Square from "./Square";
import './TicTacToe.css';

function Board() {
  const [isNext, setIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isWinner, setIsWinner] = useState(false);
  const [result, setResult] = useState("");


  function checkWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
  
    for (const [a, b, c] of lines) {
      if (squares[a] && squares[a] === squares[b] && squares[b] === squares[c]) {
        return squares[a];
      }
    }
  
    return null;
  }

  function startNewGame(){
    setSquares(Array(9).fill(null));
    setIsWinner(false);
    console.clear();
  }
  

  function handleClick(i) {
    const nextSquares = squares.slice();

    if(checkWinner(squares)){  // no need to trigger the function when winner is already decided
      return;
    }

    if(nextSquares.includes(null)){
      if(nextSquares[i] === null){
        nextSquares[i] = isNext ? "X" : "O";
        // Conditions check for winner
        const winner = checkWinner(nextSquares);
        if (winner !== null) {
          setIsWinner(true);
          setResult(`${winner}`);
        }
       
      }else{
          const remainingNulls = nextSquares.filter(square => square === null).length;
          if (remainingNulls === 0) {
          // Board is full after this move and no winner
          setTimeout(() => {
            alert("It's a draw! Click OK to start a new game.");
            startNewGame();
          }, 100);
        }
        else{
          alert("square is already having the value");
          return;
        }
      }
      setIsNext(!isNext);
      setSquares(nextSquares);
    }else{
      setTimeout(() => {
        alert("Board is full. Click OK to start new game")
        setSquares(Array(9).fill(null))
      }, 100)
    }
  }

  // Here we want to log the moves so that we can check the history of the moves played by the players

  return (
    <div className="board">
      {isWinner ?  <div className="winner-banner"> 🎉 Winner: {result} 🎉 </div> : <p className="turn">Player Turn : {isNext ? "X" : "O"}</p>}

      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>

      <div>
        <p>This div is for handling the state</p>
      </div>

      {isWinner ? <div> <button onClick={startNewGame} className="button">Start new game</button> </div> : <p></p>}
    </div>
  );
}

export default Board;