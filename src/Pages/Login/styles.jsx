import styled from "styled-components";

export const LoginBackground = styled.div`
    background-image: url(/public/assets/BGFemaleIconPattern.png);
    background-color: #663399;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
`;
export const Box = styled.div`
    background-color: var(--bg-color);
    width: 400px;
    padding: 30px;
    border-radius: 10px;
    box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.05);
`;
export const Header = styled.div`
    margin-bottom: 45px;
`;

export const Title = styled.h1 `
    font-size: 1.5rem;
    font-weight: bold;

`;
export const SubTitle = styled.p`
    margin-top: 9px;
    font-size: 0.9em;
`;

export const LoginForm = styled.form`
    width: 100%;
`;
export const InputWrapper = styled.div`
    width: 100%;

    label {
        display: block;
        color: var(--title-color);
    }
`;
export const Input = styled.div`
    position: relative;
    display: flex;
    height: 50px;
    align-items: center;
    margin-top: 5px;
    margin-bottom: 20px;
    

    svg {
        position: absolute;
        margin: 0 13px;
        fill: var(--text-color);
    }

    input {
        flex: 1;
        background-color: transparent;
        width: 100%;
        height: 100%;
        padding-left: 50px;
        padding-right: ${(props) => 
        props.hasRightIcon === 'true' ? '50px' : '13px'};
        font-size: 1rem;
        color: var(--title-color);
        border: solid 2px var(--border);
        border-radius: 5px;
        outline: none;
        transition: all 0.1s ease-in-out;

        :focus{
            border-color: var(--main-color);
        }
    }
`;

export const LoginButton = styled.button`
    background-image: linear-gradient(102.56deg, var(--main-color) 30.31%, var(--support-color) 56.47%);
    background-color: var(--main-color);
    width: 100%;
    padding: 17px;
    margin-top: 20px;
    font-weight: bold;
    color: var(--text-color-ligher);
    border-radius: 5px;
    border: none;
    cursor: pointer;

    transition: all 0.4s;
    
    &:focus {
        outline-width: 2px;
    }

    &:hover {
        background-image: linear-gradient(102.56deg, #e95be4 30.31%, #c759f3 56.47%);
        background-color: #cc60c8;
        box-shadow: 0px 3px 10px 0 rgb(182 103 231 / 50%);
    }
`;

export const PassVisibilityBtn = styled.button`
    position: absolute;
    right: 0;
    background-color: transparent;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 35px;
    height: 35px;
    margin-right: 7px;
    border-radius: 3px;
    cursor: pointer;

    :hover svg {
        fill: var(--title-color);
    }
    
    svg {
        margin: 0;
    }
`;

export const CheckboxWrapper = styled.div`
    display: flex;
    align-items: center;
    div {
        label {
            padding-left: 10px;
            color: var(--title-color);
            font-size: 0.95rem;
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
            cursor: pointer;
        }
    }
    

`;