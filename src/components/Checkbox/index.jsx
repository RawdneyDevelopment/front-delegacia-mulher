import React from "react";
import { CheckboxWrapper } from "./styles";

const Checkbox = (props) => {
    
    return (
        <CheckboxWrapper>
            <input type="checkbox" id={props.id} name={props.id}/>
            <span></span>
        </CheckboxWrapper>
    );
};

export default Checkbox;
