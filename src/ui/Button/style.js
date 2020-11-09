import styled from "styled-components/native";
import { ButtonType } from "../../utils/enum/button.enum";

export const DecisionButton = styled.Text`
  background-color: transparent;
  border: none;
  color: ${(props) =>
    props.type === ButtonType.success ? "#5c9210" : "#944317"};
  padding: 10px;
  margin: 10px;
  font-weight: bold;

  &:first-child {
    margin-left: 0;
    padding-left: 0;
  }
`;
