// import { useState } from "react";
import styled from "styled-components";
export default function RollDice(props) {
    const {currentDice,roleDice} = props
  
    // const [currentDice, setCurrentDice] = useState(loadDice);

  //   const randomNum = (min, max) => {
  //     // console.log(Math.floor(Math.random() * max + min));
  //     return Math.floor(Math.random() * max + min);
  //   };

//   const roleDice = () => {
//     // const randomNumber = randomNum(1, 6);
//     const randomNumber = Math.floor(Math.random() * 6 + 1);
//     setCurrentDice((prev) => randomNumber);
//   };

  //   console.log(currentDice);
  return (
    <DiceContainer>
      <div className="dice" onClick={roleDice}>
        <img src={`./images/dice/dice_${currentDice}.png`} alt="dice" />
      </div>
      <p>Click on Dice to roll</p>
    </DiceContainer>
  );
}

const DiceContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 48px;
  .dice {
    cursor: pointer;
  }
  p {
    font-size: 24px;
  }
`;
