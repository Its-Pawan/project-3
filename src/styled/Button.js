import styled from "styled-components";

export const Button = styled.button`
  padding: 10px 18px;
  background: #000;
  min-width: 220px;
  border: 1px solid transparent;
  color: white;
  border-radius: 5px;
  font-size: 16px;
  transition: background 0.3s ease;
  text-transform: uppercase;
  &:hover {
    border: 1px solid #000;
    background-color: #fff;
    color: #000;
    cursor: pointer;
  }
`;



export const OutlineButton = styled(Button)`
    border: 1px solid #000;
    background-color: #fff;
    color: #000;
  &:hover {
    border: 1px solid transparent;
    background-color: #000;
    color: #fff;
    cursor: pointer;
  }
`;