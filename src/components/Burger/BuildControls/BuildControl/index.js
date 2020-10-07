import React from 'react';


import { BuildControlClasse, Label, Buttons} from './style.js';

const BuildControl = (props) =>{
    console.log(props);
    return (
        <BuildControlClasse>
            <Label>{props.label}</Label>
            <Buttons className="Less" disabled={props.disabled} onClick={props.remove}>Less</Buttons>
            <Buttons className="More" onClick={props.added}>More</Buttons>
        </BuildControlClasse>
    );
}

export default BuildControl;