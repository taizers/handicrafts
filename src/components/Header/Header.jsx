import styled from 'styled-components';
import React from 'react';
import {generatePath, Link, useRouteMatch} from 'react-router-dom';
import { 
    pathToSignIn,
    pathToSignUp,
    pathToProfile,
    pathToMap,
    pathToHome,
    pathToModeration,
    pathToPosts,
} from '../../constants';
import Avatar from '@atlaskit/avatar';
import DropdownMenu, { DropdownItem, DropdownItemGroup } from '@atlaskit/dropdown-menu';
import {POSTS_TYPES} from "../../constants";

const HeaderItem = styled.header`
  font-size: 16px;
  padding: 20px 0;
`
const Container = styled.div`
  display: flex;
  
  @media (max-width: 768px) {
    flex-direction: column;
    margin:0 auto;
  }
`

const MainMenuList = styled.ul`
  font-size: 16px;
  display: flex;
  align-items: center;
  margin-left: -40px;
  margin-right: auto;

  @media (max-width: 768px) {
    flex-direction: column;
    margin:0 auto;
  }
`

const ListLink = styled(Link)`
  font-size: 16px;
  font-weight: 500;
  color: black;
  margin-left: 40px;

  &:hover {
    text-decoration: underline;
  }
`

const ListLinks = styled.a`
  font-size: 16px;
  font-weight: 500;
  color: black;
  margin-left: 40px;
  position: relative;

  &:hover {
    text-decoration: underline;
  }
  
  &::after {
    content: '>';
    rigth: 10px;
    transform: rotate(90deg);
  }
`

const MenuLink = styled(ListLink)`
    color: black;
    margin-left: 0;
`

const ListItem = styled.li`
`

const ListMenu = styled.p`
    
`

const ListGroupItem = styled.li`
  font-size: 16px;
  font-weight: 500;
  align-self: center;
  margin-left: 40px;
`

export const Header = ({signedIn}) => {
    let { path, url } = useRouteMatch();

    return (
        <HeaderItem>
            <Container className="container">
                <MainMenuList>
                    <ListItem>
                        <ListLink to={url + pathToHome}>Главная</ListLink>
                    </ListItem>
                    <ListItem>
                        <DropdownMenu
                            style={{
                                zIndex: 501,
                            }}
                            placement="bottom"
                            trigger={({ triggerRef, isSelected, testId, ...providedProps }) => (
                                <ListLinks
                                    {...providedProps}
                                    ref={triggerRef}
                                >
                                    Посты
                                </ListLinks>
                            )}
                        >
                            <DropdownItemGroup>
                                {POSTS_TYPES.map((item)=>(<DropdownItem key={item.name}><MenuLink key={item.name + 'link'} to={generatePath(pathToPosts, {type: item.type})}>{item.name}</MenuLink></DropdownItem>))}
                            </DropdownItemGroup>
                        </DropdownMenu>
                    </ListItem>
                    <ListItem>
                        <ListLink to={url + pathToMap}>Карта</ListLink>
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
            </Container>
        </HeaderItem>
    );
};