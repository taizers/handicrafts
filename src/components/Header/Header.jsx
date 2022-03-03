import styled from 'styled-components';
import React from 'react';
import { generatePath, Link, useRouteMatch } from 'react-router-dom';
import {
    pathToSignIn,
    pathToSignUp,
    pathToProfile,
    pathToMap,
    pathToHome,
    pathToModeration,
    pathToPostsTypes,
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

const ListItem = styled.li`
`

export const Header = ({ user }) => {
    return (
        <HeaderItem>
            <Container className="container">
                <MainMenuList>
                    <ListItem>
                        <ListLink to={pathToHome}>Главная</ListLink>
                    </ListItem>
                    <ListItem>
                        <ListLink to={pathToPostsTypes}>Ремёсла</ListLink>
                    </ListItem>
                    <ListItem>
                        <ListLink to={pathToMap}>Карта</ListLink>
                    </ListItem>
                </MainMenuList>
                <DropdownMenu
                    placement="bottom"
                    trigger={({ triggerRef, ...props }) => (
                        <Avatar
                            {...props}
                            ref={triggerRef}
                            appearance="circle"
                            src={user?.avatar}
                            size="large"
                            name="John Doe"
                        />
                    )}
                    >
                    <DropdownItemGroup>
                        {user && <DropdownItem><Link to={''/*generatePath(pathToProfile, {id: userId})*/}>Профиль</Link></DropdownItem>}
                        {user && (user.role === 'admin' || user.role === 'owner') && <DropdownItem><Link to={pathToModeration}>Модерация</Link></DropdownItem>}
                        {user && <DropdownItem><Link to={pathToHome}>Выход</Link></DropdownItem>}
                        {!user && <DropdownItem><Link to={pathToSignIn}>Войти</Link></DropdownItem>}
                        {!user && <DropdownItem><Link to={pathToSignUp}>Зарегестрироваться</Link></DropdownItem>}
                    </DropdownItemGroup>
                </DropdownMenu>    
            </Container>
        </HeaderItem>
    );
};
