import styled from "styled-components/native";

export const Burger = styled.View`
  width: 100%;
  height: 55%;
  margin: auto;
  overflow: visible;
  text-align: center;
  font-weight: bold;
  font-size: 19.2px;
  justify-content: center;

  @media (min-width: 500px) and (min-height: 400px) {
    width: 350px;
    height: 300px;
  }

  @media (min-width: 500px) and (min-height: 401px) {
    width: 450px;
    height: 400px;
  }

  @media (min-width: 1000px) and (min-height: 700px) {
    width: 700px;
    height: 600px;
  }
`;
