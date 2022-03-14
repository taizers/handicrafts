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
import TrashIcon from "@atlaskit/icon/glyph/trash";

const Container = styled.div`
  width: 100%;
`;

const HeadContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  width: 100%;
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
  align-self: center;
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

  const onDeleteButtonClick = (evt) => {
      console.log(evt);
  }

    const rows = (usersListForTable) => (
        map(usersListForTable, (user, index) => ({
            key: `row-${index}-${user.login}`,
            isHighlighted: false,
            cells: [
                {
                    key: user.login,
                    content: (
                        <LoginWrapper>
                            <Avatar src={user.avatar} name={user.email} size="medium" />
                            <Login to={generatePath(pathToProfile, { id: user.id })}>{user.email}</Login>
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
                {
                    key: user.id,
                    content: (
                        <Button
                            iconBefore={<TrashIcon size="large" appearance="primary"/>}
                            onClick={onDeleteButtonClick}
                        ></Button>
                    ),
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
                <SearchField search={onSearchUsers} />
                <Button
                    iconBefore={<AddIcon size="small"/>}
                    appearance="primary"
                    onClick={onShowModal}
                    style={{
                        alignSelf: 'flex-end',
                    }}
                >
                    Создать Администратора
                </Button>
            </HeadContainer>
            <DynamicTable
                head={head()}
                rows={!isEmpty(usersList) ? rows(usersList) : rows(users)}
                rowsPerPage={10}
                defaultPage={1}
                loadingSpinnerSize="large"
                isRankable
            />
                <CreateModal
                    setVisible={setVisible}
                    isVisible={isVisible}
                    type='user'
                    create={createUser}
                />
    </Container>
  );
}