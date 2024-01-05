import styled from "styled-components";
import TotalScore from "./TotalScore";
import NumberSelector from "./NumberSelector";
import RollDice from "./RollDice";
import { useState } from "react";
import { Button } from "../styled/Button";
import { OutlineButton } from "../styled/Button";
import Rules from "./Rules";

export default function GamePlay() {
  const loadDice = Math.floor(Math.random() * 6 + 1);
  const [selectedNum, setSelectedNum] = useState();
  const [currentDice, setCurrentDice] = useState(loadDice);

  const [score, setScore] = useState(0);

  const [err, setErr] = useState("");

  const [showRules, setShowRules] = useState(false);

  const randomNumber = Math.floor(Math.random() * 6 + 1);

  const roleDice = () => {
    if (!selectedNum) {
      setErr("You have not selected any number!");
      return;
    }
    setErr("");

    setCurrentDice((prev) => randomNumber);

    if (selectedNum === randomNumber) {
      setScore((prev) => prev + randomNumber);
    } else {
      setScore((prev) => prev - 2);
    }

    setSelectedNum(undefined);
  };

  const resetScore = () => {
    setScore(0);
  };


  return (
    <MainContainer>
      <div className="top_section">
        <TotalScore score={score} />
        <NumberSelector
          err={err}
          setErr={setErr}
          selectedNum={selectedNum}
          setSelectedNum={setSelectedNum}
        />
      </div>
      <RollDice currentDice={currentDice} roleDice={roleDice} />
      <div className="btns">
        <OutlineButton onClick={resetScore}>Reset</OutlineButton>
        <Button onClick={()=>setShowRules((prev)=> !prev)}> {showRules ? "Hide" : "Show"} Rules</Button>
      </div>

      {showRules && <Rules />}
    </MainContainer>
  );
}

const MainContainer = styled.main`
  padding-top: 70px;
  .top_section {
    display: flex;
    justify-content: space-around;
    align-items: end;
  }
  .btns {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    margin-top: 40px;
  }
`;
