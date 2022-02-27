import React, {useEffect, useState, Fragment} from 'react';
import styled from 'styled-components';
import Button from "@atlaskit/button";
import AddIcon from '@atlaskit/icon/glyph/add';
import {toLower, isEmpty, values, filter, indexOf, map} from 'lodash';
import DynamicTable from '@atlaskit/dynamic-table';

import CreateModal from "../PostsModeration/CreateModal";
import SearchField from "./SearchField/index";
import {generatePath, Link} from "react-router-dom";
import Avatar from '@atlaskit/avatar';
import {pathToProfile} from "../../constants";

const Container = styled.div`
  padding: 20px;
  width: 100%;
`;

const HeadContainer = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

const head = () => (
    {
        cells: [
            {
                key: "login",
                content: "Логин",
                isSortable: true,
                width: 25,
            },
            {
                key: "name",
                content: "Имя",
                isSortable: true,
                width: 25,
            },
            {
                key: "role",
                content: "Роль",
                isSortable: true,
                width: 25,
            },
        ]
    });

const Login = styled(Link)`
  margin-bottom: 10px;
  font-size: 18px;
  color: blue;
`;

const LoginWrapper = styled.div`
  display: flex;
`;

export const UsersModeration = ({ getUsers, users, deleteUser, role, isVisible, setVisible, createUser }) => {
    const [usersList, setUsersList] = useState();


  useEffect(()=>{
    getUsers();
  }, []);

    const rows = (usersListForTable) => (
        map(usersListForTable, (user, index) => ({
            key: `row-${index}-${user.login}`,
            isHighlighted: false,
            cells: [
                {
                    key: user.login,
                    content: (
                        <LoginWrapper>
                            <Avatar src={user.avatar} name={user.login} size="medium" />
                            <Login to={generatePath(pathToProfile, { id: user.id })}>{user.login}</Login>
                        </LoginWrapper>
                    ),
                },
                {
                    key: user.name,
                    content: user.name,
                },
                {
                    key: user.role,
                    content: user.role,
                },
            ],
        }))
    );

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
            <DynamicTable
                head={head()}
                rows={!isEmpty(usersList) ? rows(usersList) : rows(users)}
                rowsPerPage={10}
                defaultPage={1}
                loadingSpinnerSize="large"
                isRankable
            />
                <CreateModal setVisible={setVisible} isVisible={isVisible} type='user' createUser={createUser}/>
    </Container>
  );
}