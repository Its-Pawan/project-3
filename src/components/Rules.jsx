import React from "react";
import styled from "styled-components";

export default function Rules() {
  return (
    <RulesContainer>
      <h2>How to play dice game</h2>
      <div className="text">
        <p>Select any number</p>
        <p>Click on dice image</p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati
          nisi quidem totam!{" "}
        </p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
      </div>
    </RulesContainer>
  );
}

const RulesContainer = styled.div`
  background-color: #fbf1f1;
  max-width: 800px;
  margin: 0 auto;
  margin-top: 40px;
  margin-bottom: 40px;
  border-radius: 10px;
  padding: 20px;
  h2 {
    font-size: 24px;
  }
  .text {
    margin-top: 24px;
  }
`;
