import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { pathToSignIn } from '../../constants';

const Container = styled.div`
  font-size: 16px;
  color: white;
  display: flex;
  position: relative;
  right: 0;
  width: 100%;
  background-color: #3415B0;
  padding: 20px 0;
`

const MainMenuList = styled.ul`
  font-size: 16px;
  padding-left: 0;
  min-width: 50%;
  color: white;
  list-style: none;
  display: flex;
  justify-content: space-between;
  margin-left: auto;
`

const ListItem = styled(Link)`
  font-size: 16px;
  font-weight: 500;
  color: white;
  align-self: center;

  &:hover {
      color: red;
      text-decoration: underline;
  }
`

const SignInButton = styled(ListItem)`
  font-weight: 700;
  margin-right: 40px;
  margin-left: 100px;
  padding: 10px 20px;
  border-color: white;
  border-width: 1px;
  border-style: solid;
  border-radius: 30%;

  &:hover {
      border-color: red;
      text-decoration: none;
  }
`

export const Header = () => (
    <Container>
        <MainMenuList>
            <ListItem to=''>
                Ремёсла
            </ListItem>
            <ListItem to=''>
                Изделия
            </ListItem>
            <ListItem to=''>
                Карта
            </ListItem>
            <SignInButton to={pathToSignIn}>
                Войти
            </SignInButton>
        </MainMenuList>
    </Container>
);