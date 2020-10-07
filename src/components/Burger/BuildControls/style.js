import styled from "styled-components/native";

export const BuildControlsClasse = styled.View`
  width: 100%;
  background-color: #cf8f2f;
  display: flex;
  flex-flow: column;
  align-items: center;
  box-shadow: 0 2px 1px #ccc;
  margin: auto;
  padding: 10px 0;
`;

export const OrderButton = styled.Text`
  background-color: #dad735;
  border: 1px solid #966909;
  color: #966909;
  font-family: inherit;
  font-size: 19.2px;
  padding: 15px 30px;
  box-shadow: 2px 2px 2px #966909;

  ${({ disabled }) =>
    disabled &&
    `
    background-color: #C7C6C6;
    border: 1px solid #ccc;
    color: #888888;
  `}
`;
