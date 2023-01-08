import {React, useState} from "react";
import { LoginBackground, Box, Header, Title, SubTitle, LoginForm, InputWrapper, Input, LoginButton, PassVisibilityBtn, CheckboxWrapper } from "./styles";
import Checkbox from "../../components/Checkbox";
import { Router } from 'react-router-dom';

const Login = () => {
    
    const [ type, setType ] = useState('password');
    const [ icon, setIcon ] = useState("invisible");

    const handleToggle = (e) => {
        e.preventDefault();
        if(type==='password') {
            setIcon("visible");
            setType('text');
        }
        else{
            setIcon("invisible");
            setType('password');
        };
    };

    function PasswordVisibility(props) {
      return(
            <PassVisibilityBtn ariaLabel="Mostrar/Esconder Senha" role="button" onClick={handleToggle}>
            
            {props.icon === 'invisible' ? 
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 6.00001C15.79 6.00001 19.17 8.13001 20.82 11.5C20.23 12.72 19.4 13.77 18.41 14.62L19.82 16.03C21.21 14.8 22.31 13.26 23 11.5C21.27 7.11001 17 4.00001 12 4.00001C10.73 4.00001 9.51 4.20001 8.36 4.57001L10.01 6.22001C10.66 6.09001 11.32 6.00001 12 6.00001ZM10.93 7.14001L13 9.21001C13.57 9.46001 14.03 9.92001 14.28 10.49L16.35 12.56C16.43 12.22 16.49 11.86 16.49 11.49C16.5 9.01001 14.48 7.00001 12 7.00001C11.63 7.00001 11.28 7.05001 10.93 7.14001ZM2.01 3.87001L4.69 6.55001C3.06 7.83001 1.77 9.53001 1 11.5C2.73 15.89 7 19 12 19C13.52 19 14.98 18.71 16.32 18.18L19.74 21.6L21.15 20.19L3.42 2.45001L2.01 3.87001ZM9.51 11.37L12.12 13.98C12.08 13.99 12.04 14 12 14C10.62 14 9.5 12.88 9.5 11.5C9.5 11.45 9.51 11.42 9.51 11.37V11.37ZM6.11 7.97001L7.86 9.72001C7.63 10.27 7.5 10.87 7.5 11.5C7.5 13.98 9.52 16 12 16C12.63 16 13.23 15.87 13.77 15.64L14.75 16.62C13.87 16.86 12.95 17 12 17C8.21 17 4.83 14.87 3.18 11.5C3.88 10.07 4.9 8.89001 6.11 7.97001Z"/>
                </svg>
                : 
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 6C15.79 6 19.17 8.13 20.82 11.5C19.17 14.87 15.79 17 12 17C8.21 17 4.83 14.87 3.18 11.5C4.83 8.13 8.21 6 12 6ZM12 4C7 4 2.73 7.11 1 11.5C2.73 15.89 7 19 12 19C17 19 21.27 15.89 23 11.5C21.27 7.11 17 4 12 4ZM12 9C13.38 9 14.5 10.12 14.5 11.5C14.5 12.88 13.38 14 12 14C10.62 14 9.5 12.88 9.5 11.5C9.5 10.12 10.62 9 12 9ZM12 7C9.52 7 7.5 9.02 7.5 11.5C7.5 13.98 9.52 16 12 16C14.48 16 16.5 13.98 16.5 11.5C16.5 9.02 14.48 7 12 7Z"/>
                </svg>
            }
            </PassVisibilityBtn>
        );
    };

    const LoginClick =(e) => {
        e.preventDefault();
    };
        

    return(

        <LoginBackground className="loginbgpos-anim">
            <Box>
                <Header>
                    <Title>Bem-vindo de volta!</Title>
                    <SubTitle>Insira suas informações para iniciar sua sessão.</SubTitle>
                </Header>
                <LoginForm>
                    <InputWrapper>
                        <label>Email</label>
                        <Input>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path d="M22 6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6ZM20 6L12 11L4 6H20ZM20 18H4V8L12 13L20 8V18Z"/>
                            </svg>
                            <input type="email"/>
                        </Input>
                    </InputWrapper>
                    <InputWrapper>
                        <label>Senha</label>
                        <Input hasRightIcon='true'>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M21 10H12.65C11.83 7.67 9.61 6 7 6C3.69 6 1 8.69 1 12C1 15.31 3.69 18 7 18C9.61 18 11.83 16.33 12.65 14H13L15 16L17 14L19 16L23 11.96L21 10ZM7 15C5.35 15 4 13.65 4 12C4 10.35 5.35 9 7 9C8.65 9 10 10.35 10 12C10 13.65 8.65 15 7 15Z"/>
                        </svg>
                                <input type={type}/>
                               <PasswordVisibility icon={icon}/>
                        </Input> 
                    </InputWrapper>
                    <CheckboxWrapper>
                        <Checkbox id="rememberMe"/>
                        <div>
                            <label htmlFor="rememberMe">Lembre-me</label>
                        </div>
                    </CheckboxWrapper>
                    <LoginButton onClick={LoginClick}>Entrar</LoginButton>
                </LoginForm>
            </Box>
        </LoginBackground>
    );
};

export default Login;