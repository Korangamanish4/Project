import React, { useEffect, useState } from "react";
import "./About.css";

const About = () => {
  const [turn, setTurn] = useState("X");
  const [array1, setArray1] = useState(Array(9).fill(""));
  const [winner, setWinner] = useState();

  const checkWinner = (array) => {
    const combos = {
      across: [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
      ],
      down: [
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
      ],
      diagonal: [
        [0, 4, 8],
        [2, 4, 6],
      ],
    };

    for (let combo in combos) {
      combos[combo].forEach((item) => {
        if(array[item[0]] === '' ||
        array[item[1]] === '' ||
        array[item[2]] === ''){
         // do nothing
        }
        else if (array[item[0]] === array[item[1]] && array[item[1]] === array[item[2]]) {
          setWinner(array[item[0]])
        }
      });
    }
  };

  const handleClick = (num) => {
    if (array1[num] !== "") {
      alert("Already Clicked");
      return;
    }
    const array2 = { ...array1 };

    if (turn === "X") {
      array2[num] = "X";
      setTurn("O");
    } else {
      array2[num] = "O";
      setTurn("X");
    }
    checkWinner(array2)
    setArray1(array2); 
  };

  const Cell = ({ num }) => {
    return (
      <td className="box" onClick={() => handleClick(num)}>
        {array1[num]}
      </td>
    );
  };

  return (
    <div className="container">
      <table>
        {winner && (
          <>
           <h5>{winner} won the Game</h5>
           <button onClick={() => window.location.reload()}>Play Again</button>
           </>
        )}
        <th>Turn: {turn}</th>
        <tbody>
          <tr>
            <Cell num={0} />
            <Cell num={1} />
            <Cell num={2} />
          </tr>
          <tr>
            <Cell num={3} />
            <Cell num={4} />
            <Cell num={5} />
          </tr>
          <tr>
            <Cell num={6} />
            <Cell num={7} />
            <Cell num={8} />
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default About;
