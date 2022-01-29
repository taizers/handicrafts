import styled from 'styled-components';
import Input from '../Input/Input';
import { styledButton } from '../../styles/button';
import CryptoJS from 'crypto-js';

const Container = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
`

const SignUpForm = styled.form`
    width: 400px;
    height: calc(100vh - 200px);
    display: flex;
    flex-direction: column;
    padding: 20px 30px;
    position: absolute;
    margin: auto;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: var(--white);
    border-radius: 20px;
    justify-content: center;
    align-items: center;
    overflow-y: auto;
    scrollbar-width: none;

    &::-webkit-scrollbar {
    display: none;
}
`

const SignUpInput = styled(Input)`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    margin: 0 auto;
    margin-top: 10px;
    max-width: 70%;

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      display: none;
      -webkit-appearance: none;
      margin: 0; 
    }
`

const SignUpButton = styled(styledButton)`
  margin-top: 40px;
`

export const SignUp = ({ signUp }) => {
  const onSubmitSignIn = (evt) => {
    evt.preventDefault();

    if (evt.target.elements.firstPassword.value === evt.target.elements.secondPassword.value ) {
      const data = {
        login: evt.target.elements.email.value,
        password: CryptoJS.MD5(evt.target.elements.firstPassword.value).toString(),
        role: 'user',
      };
      signUp(data);
      console.log(data);
    }
    
    
  }

  return (
    <Container>
      <SignUpForm onSubmit={onSubmitSignIn}>
        <SignUpInput labelValue="Логин" name="email" type="email" onChangeValue=''/>
        <SignUpInput labelValue="Пароль" name="firstPassword" type="password" onChangeValue=''/>
        <SignUpInput labelValue="Повторите пароль" name="secondPassword" type="password" onChangeValue=''/>
        <SignUpButton>Зарегистрироваться</SignUpButton>
      </SignUpForm>
    </Container>
  );
}
