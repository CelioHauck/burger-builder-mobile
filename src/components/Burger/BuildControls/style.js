import styled from 'styled-components/native';

export const BuildControlsClasse = styled.View`
    width: 100%;
    background-color: #CF8F2F;
    display: flex;
    flex-flow: column;
    align-items: center;
    box-shadow: 0 2px 1px #ccc;
    margin: auto;
    padding: 10px 0;
`;

export const OrderButton = styled.Text`
    background-color: #DAD735;
    cursor: pointer;
    border: 1px solid #966909;
    color: #966909;
    font-family: inherit;
    font-size: 1.2em;
    padding: 15px 30px;
    box-shadow: 2px 2px 2px #966909;


&:disabled {
    background-color: #C7C6C6;
    cursor: not-allowed;
    border: 1px solid #ccc;
    color: #888888;
}

&:not(:disabled) {
    animation: enable 0.3s linear;
}
`;

