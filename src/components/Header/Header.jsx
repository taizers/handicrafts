import styled from 'styled-components';
import React from 'react';
import { generatePath, Link, useRouteMatch } from 'react-router-dom';
import Avatar from '@atlaskit/avatar';
import { FormattedMessage } from 'react-intl'
import DropdownMenu, { DropdownItem, DropdownItemGroup } from '@atlaskit/dropdown-menu';

import {
    pathToSignIn,
    pathToSignUp,
    pathToProfile,
    pathToMap,
    pathToHome,
    pathToModeration,
    pathToPostsTypes,
} from '../../constants';

const HeaderItem = styled.header`
  font-size: 18px;
  background-color: #6666ff;
  padding: 10px 0;
  margin-bottom: 30px;
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
  font-weight: 600;
  color: #cccccc;
  margin-left: 40px;
  text-transform: uppercase;
  padding: 5px 10px;
  
  &:hover {
    border: solid white 1px;
  }
  @media (max-width: 768px) {
    margin-left: 0;
  }

`

const ListItem = styled.li`
  @media (max-width: 768px) {
    margin: 10px 0;
  }
`

const DropdownMenuItem = styled.div`
  @media (max-width: 768px) {
    align-self: center;
  }
`

export const Header = ({ user }) => {
    return (
        <HeaderItem>
            <Container className="container">
                <MainMenuList>
                    <ListItem>
                        <ListLink to={pathToHome}><FormattedMessage id='nav_link_home' /></ListLink>
                    </ListItem>
                    <ListItem>
                        <ListLink to={pathToPostsTypes}><FormattedMessage id='nav_link_categories' /></ListLink>
                    </ListItem>
                    <ListItem>
                        <ListLink to={pathToMap}><FormattedMessage id='nav_link_map' /></ListLink>
                    </ListItem>
                </MainMenuList>
                <DropdownMenuItem>
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
                </DropdownMenuItem>
            </Container>
        </HeaderItem>
    );
};
