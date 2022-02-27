import React, {useEffect, useState, Fragment} from 'react';
import styled from 'styled-components';
import User from './User/index';
import Button from "@atlaskit/button";
import AddIcon from '@atlaskit/icon/glyph/add';
import {toLower, isEmpty, values, filter, indexOf} from 'lodash';

import CreateModal from "../PostsModeration/CreateModal";
import SearchField from "../SearchField/index";

const Container = styled.div`
  padding: 20px;
  width: 100%;
`;

const List = styled.ul`
  margin-top: 30px;
`;

const HeadContainer = styled.div`
  display: flex;
`;

export const UsersModeration = ({ getUsers, users, deleteUser, role, isVisible, setVisible, createUser }) => {
    const [login, setLogin] = useState();
    const [password, setPassword] = useState();
    const [name, setName] = useState();
    const [usersList, setUsersList] = useState();


  useEffect(()=>{
    getUsers();
  }, []);


  const onShowModal = () => {
      setVisible(true);
  };

  const onSearchUsers = (query) => {

      const arr = filter(users, user => {
          if (
              ((query.login !== "") ? indexOf(toLower(user.login), toLower(query.login)) !== -1 : true ) &&
              ((query.role !== "") ? user.role  === query.role : true ) &&
              ((query.name !== "") ? indexOf(toLower(user.name), toLower(query.name)) !== -1 : true )
          ) {
              return user;
          }
      });

      setUsersList(arr);
  };

  const getUsersList = users => users?.map((item)=> <User key={item.login} user={item} role={role} deleteUser={deleteUser} />)

  return (
    <Container>
            <HeadContainer>
                <Button
                    iconBefore={<AddIcon size="small"/>}
                    appearance="primary"
                    onClick={onShowModal}
                    style={{
                        alignSelf: 'flex-end',
                        marginRight: '20px',

                    }}
                >
                    Создать Администратора
                </Button>
                <SearchField search={onSearchUsers} />
            </HeadContainer>

              <List>
                {!isEmpty(usersList) ? getUsersList(usersList) : getUsersList(users)}
              </List>
                <CreateModal setVisible={setVisible} isVisible={isVisible} type='user' createUser={createUser}/>
    </Container>
  );
}