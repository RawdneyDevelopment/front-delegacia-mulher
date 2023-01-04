import styled from "styled-components";

export const CheckboxWrapper = styled.label`
    
    display: block;
    position: relative;
    width: 21px;
    height: 21px;
    font-size: 1rem;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    cursor: pointer;

    input {
        position: absolute;
        height: 0;
        width: 0;
        opacity: 0;
        cursor: pointer;

        :checked ~ span {
            background-color: var(--main-color);
            border: transparent;
        }

        :checked ~ span::after {
            display: block;
        }

        :focus ~ span {
            outline: solid 3px;
        }

    }

    span {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        border: solid 2px var(--border-dark);
        border-radius: 20%;

        :after {
            display: none;
            content: "";
            position: absolute;
            left: 7px;
            top: 3px;
            width: 8px;
            height: 13px;
            border: solid white;
            border-width: 0 3px 3px 0;
            -webkit-transform: rotate(45deg);
            -ms-transform: rotate(45deg);
            transform: rotate(45deg);
        }
        
    }
`;
