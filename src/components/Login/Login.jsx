import styled from 'styled-components';
import CryptoJS from 'crypto-js';
import Input from '../Input/Input';
import { styledButton } from '../../styles/button';

const Container = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
`

const LoginForm = styled.form`
    width: 400px;
    height: 500px;
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

const LoginInput = styled(Input)`
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

const LoginButton = styled(styledButton)`
  margin-top: 40px;
`

export const Login = ({signIn}) => {
  const onSubmitLogin = (evt) => {
    evt.preventDefault();

    const data = {
      login: evt.target.elements.email.value,
      password: CryptoJS.MD5(evt.target.elements.password.value).toString(),
    };
    signIn(data);
    console.log(data);

  }

  return (
    <Container>
      <LoginForm onSubmit={onSubmitLogin}>
        <LoginInput labelValue="Логин" name="email" type="email" value="login" />
        <LoginInput labelValue="Пароль" name="password" type="password" value="login" />
        <LoginButton>Войти</LoginButton>
      </LoginForm>
    </Container>
  );
}
