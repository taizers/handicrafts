import styled from 'styled-components';
import { Link, useRouteMatch } from 'react-router-dom';
import { 
    pathToSignIn,
    pathToSignUp,
    pathToProfile,
    pathToHandicrafts,
    pathToMap,
    pathToHome,
    pathToModeration,
} from '../../constants';
import { useState } from 'react';
import { styledButton } from '../../styles/button';
import Icons from '../Icons/Icons';
import Avatar from '@atlaskit/avatar';
import DropdownMenu, { DropdownItem, DropdownItemGroup } from '@atlaskit/dropdown-menu';

const HeaderItem = styled.header`
  font-size: 16px;
  color: white;
  display: flex;
  background-color: #3415B0;
  padding: 20px 0;

  @media (max-width: 768px) {
    flex-direction: column;
    margin:0 auto;
  }
`
const Container = styled.div`
`

const MainMenuList = styled.ul`
  font-size: 16px;
  color: white;
  display: flex;
  margin-left: -40px;
  margin-right: auto;

  @media (max-width: 768px) {
    flex-direction: column;
    margin:0 auto;
  }
`

const ListItem = styled(Link)`
  font-size: 16px;
  font-weight: 500;
  color: white;
  align-self: center;
  margin-left: 40px;

  &:hover {
      color: red;
      text-decoration: underline;
  }
`

export const Header = ({signedIn}) => {
    let { path, url } = useRouteMatch();

    return (
        <Container className="container">
            <HeaderItem>
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
                <DropdownMenu
                    placement="bottom"
                    trigger={({ triggerRef, ...props }) => (
                        <Avatar
                            {...props}
                            ref={triggerRef}
                            appearance="circle"
                            src={signedIn && "https://pbs.twimg.com/profile_images/803832195970433027/aaoG6PJI_400x400.jpg"}
                            size="large"
                            name="John Doe"
                        />
                    )}
                    >
                    <DropdownItemGroup>
                        {signedIn && <DropdownItem><Link to={url + pathToProfile}>Профиль</Link></DropdownItem>}
                        {signedIn && <DropdownItem><Link to={url + pathToModeration}>Модерация</Link></DropdownItem>}
                        {signedIn && <DropdownItem><Link to="">Создать</Link></DropdownItem>}
                        {signedIn && <DropdownItem><Link to="/hc">Выход</Link></DropdownItem>}
                        {!signedIn && <DropdownItem><Link to={pathToSignIn}>Войти</Link></DropdownItem>}
                        {!signedIn && <DropdownItem><Link to={pathToSignUp}>Зарегестрироваться</Link></DropdownItem>}
                    </DropdownItemGroup>
                </DropdownMenu>    
            </HeaderItem>
        </Container>
    );
};