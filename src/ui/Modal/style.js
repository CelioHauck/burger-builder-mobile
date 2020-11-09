import styled from "styled-components/native";

export const ModalStyled = styled.View`
  position: absolute;
  z-index: 500;
  background-color: white;
  width: 70%;
  border: 1px solid #ccc;
  box-shadow: 1px 1px 1px black;
  padding: 16px;
  left: 15%;
  top: 30%;

  @media (min-width: 600px) {
    width: 500px;
    left: calc(50% - 250px);
  }
`;

// box-sizing: border-box;
// transition: all 0.3s ease-out;

// transform: ${(props) => (props.show ? "translateY(50)" : "translateY(0)")};
// opacity: ${(props) => (props.primary ? "1" : "0")};
