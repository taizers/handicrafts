import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import Button from "@atlaskit/button";
import AddIcon from '@atlaskit/icon/glyph/add';
import {toLower, isEmpty, filter, map} from 'lodash';
import DynamicTable from '@atlaskit/dynamic-table';

import CreateModal from "../PostsModeration/CreateModal";
import SearchField from "./SearchField/index";
import {generatePath, Link} from "react-router-dom";
import Avatar from '@atlaskit/avatar';
import {pathToProfile} from "../../constants";
import Loader from '../../components/Loader';
import TrashIcon from "@atlaskit/icon/glyph/trash";
import {FormattedMessage} from "react-intl";
import { API_AVATAR_IMAGE_URL } from '../../constants';

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
                content: <FormattedMessage id='label_email' />,
                isSortable: true,
                width: 25,
            },
            {
                key: "name",
                content: <FormattedMessage id='label_name' />,
                isSortable: true,
                width: 25,
            },
            {
                key: "role",
                content: <FormattedMessage id='label_role' />,
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



export const UsersModeration = ({ getUsers, users, deleteUser, role, isVisible, isLoading, setVisible, createUser }) => {
    const [usersList, setUsersList] = useState();

    const getButton = (id, userRole) => {

        if (userRole !== 'owner' || userRole === 'user' || (role === 'owner' && userRole === 'admin')) {
            return <Button
            iconBefore={<TrashIcon size="large" appearance="primary"/>}
            onClick={() => deleteUser(id)}
            ></Button>
        }
    }

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
                            <Avatar src={`${API_AVATAR_IMAGE_URL}${user.avatar}`} name={user.email} size="medium" />
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
                    content: getButton(user.id, user.role),
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
              ((query.login !== "") ? toLower(user.email).indexOf(toLower(query.login)) !== -1 : true ) &&
              ((query.role !== "") ? user.role  === query.role : true ) &&
              ((query.name !== "") ? toLower(user.name).indexOf(toLower(query.name)) !== -1 : true )
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
                {role === 'owner' && <Button
                    iconBefore={<AddIcon size="small"/>}
                    appearance="primary"
                    onClick={onShowModal}
                    style={{
                        alignSelf: 'flex-end',
                    }}
                >
                    <FormattedMessage id='button_create_admin' />
                </Button>}
            </HeadContainer>
            <DynamicTable
                head={head()}
                rows={!isEmpty(usersList) ? rows(usersList) : rows(users)}
                rowsPerPage={10}
                defaultPage={1}
                loadingSpinnerSize="large"
                isRankable
            />
            {isVisible && <CreateModal
                setVisible={setVisible}
                type='user'
                create={createUser}
            />}
            <Loader visible={isLoading}/>
    </Container>
  );
}
