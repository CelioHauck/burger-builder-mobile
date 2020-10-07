import styled from "styled-components/native";

export const Buttons = styled.Text`
  display: block;
  padding: 5px;
  margin: 0 5px;
  width: 80px;
  border: 1px solid #aa6817;
  background-color: ${(props) =>
    props.type == "Less" ? "#D39952" : "#8F5E1E"};
  color: white;

  ${({ disabled }) =>
    disabled &&
    `
    background-color: #AC9980;
    border: 1px solid #7E7365;
    color: #ccc;
  `}
`;

export const Label = styled.Text`
  padding: 10px;
  font-weight: bold;
  width: 80px;
`;

export const BuildControlClasse = styled.View`
  display: flex;
  justify-content: space-between;
  flex-direction: initial;
  align-items: center;
  margin: 5px 0;
`;
