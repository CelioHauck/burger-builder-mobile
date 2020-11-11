import React, { FunctionComponent } from "react";

import { ModalStyled } from "./style";
import Backdrop from "../Backdrop";

const Modal = (props) => {
  return (
    <React.Fragment>
      <Backdrop show={props.show} close={props.close} />
      <ModalStyled
        style={{
          transform: props.show
            ? [{ translateY: 0 }]
            : [{ translateX: -10000 }],
        }}
      >
        {props.children}
      </ModalStyled>
    </React.Fragment>
  );
};

export default React.memo(Modal);
