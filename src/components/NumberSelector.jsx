// import { useState } from "react";
import styled from "styled-components";

export default function NumberSelecter(props) {
  const { selectedNum, setSelectedNum, err, setErr } = props;
  const diceNumber = [1, 2, 3, 4, 5, 6];

  // const [selectedNum, setSelectedNum] = useState();

  // console.log(selectedNum);

  const numberSelecterHandler = (value) => {
    setSelectedNum(value);
    setErr("");
  };
  return (
    <NumberSelectorContainer>
      <p className="err">{err}</p>
      <div className="flex">
        {diceNumber.map((value, index) => (
          <Box
            isSelected={value == selectedNum}
            onClick={()=>numberSelecterHandler(value)}
            key={index}
          >
            {value}
          </Box>
        ))}
      </div>
      <p>Select Number</p>
    </NumberSelectorContainer>
  );
}

const NumberSelectorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  .err {
    color: red;
    font-weight: 400;
  }
  .flex {
    display: flex;
    gap: 24px;
  }
  p {
    font-size: 24px;
    font-weight: 500;
  }
`;

const Box = styled.div`
  width: 72px;
  height: 72px;
  border: 2px solid #000;
  display: grid;
  place-items: center;
  font-size: 24px;
  font-weight: 700;
  background-color: ${(props) => (props.isSelected ? "black" : "white")};
  color: ${(props) => (!props.isSelected ? "black" : "white")};
  cursor: pointer;
`;
