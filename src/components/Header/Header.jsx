import styled from 'styled-components';
import { Link, useRouteMatch } from 'react-router-dom';
import { 
    pathToSignIn,
    pathToSignUp,
    pathToProfile,
    pathToHandicrafts,
    pathToMap,
    pathToHome,
} from '../../constants';
import { useState } from 'react';
import { styledButton } from '../../styles/button';
import Icons from '../Icons/Icons';

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

const SignInButton = styled(styledButton)`
    margin-left: 100px;
    margin-right: 110px;
    min-width: 0;
    border-radius: 25%;

    &:hover {
        color: var(--main-blue);
        background-color: var(--white);
    }
`

const UserFeaturesList = styled.ul`
    position: absolute;
    right: 40px;
    top: 80px;
`

const UserFeaturesItem = styled.li`
    padding: 5px 10px;
    background-color: white;
    color: #437DD4;
    text-align: center;

    &:hover {
        background-color: #6A94D4;
        color: white;
    }
`

const UserFeaturesLink = styled(Link)`

`

const returnUserFeatures = (signedIn) => {
    if (signedIn) {
        return (
            <UserFeaturesList>
                <UserFeaturesItem>
                    <UserFeaturesLink to={pathToProfile}>
                        Профиль
                    </UserFeaturesLink>
                </UserFeaturesItem>
                <UserFeaturesItem>
                    <UserFeaturesLink to="">
                        Зарегистрироваться
                    </UserFeaturesLink>
                </UserFeaturesItem>
            </UserFeaturesList>
        );
    } else {
        return (
            <UserFeaturesList>
                <UserFeaturesItem>
                    <UserFeaturesLink to={pathToSignIn}>
                        Войти
                    </UserFeaturesLink>
                </UserFeaturesItem>
                <UserFeaturesItem>
                    <UserFeaturesLink to={pathToSignUp}>
                        Зарегистрироваться
                    </UserFeaturesLink>
                </UserFeaturesItem>
            </UserFeaturesList>
        );
    }
};

export const Header = () => {
    const [isActivUserFeatures, setActivFeatures] = useState(false);

    let { path, url } = useRouteMatch();

    return (
        <Container>
            <MainMenuList>
                <ListItem to={url + pathToHome}>
                    Главная
                </ListItem>
                <ListItem to={url + pathToHandicrafts}>
                    Ремёсла
                </ListItem>
                <ListItem to=''>
                    Изделия
                </ListItem>
                <ListItem to={url + pathToMap}>
                    Карта
                </ListItem>
            </MainMenuList>
            
            <SignInButton type='button' onClick={()=>(setActivFeatures(!isActivUserFeatures))}>
                <Icons name='non-auth-user' size='32' />
            </SignInButton>
            {isActivUserFeatures &&  returnUserFeatures(true)}
        </Container>
    );
};