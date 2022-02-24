import React, {useEffect, useState, Fragment} from 'react';
import styled from 'styled-components';
import User from './User/index';
import Button from "@atlaskit/button";
import AddIcon from '@atlaskit/icon/glyph/add'
import Modal, {
    ModalBody,
    ModalFooter,
    ModalHeader,
    ModalTransition,
    ModalTitle,
} from '@atlaskit/modal-dialog';
import Form, { Field, HelperMessage, FormFooter } from '@atlaskit/form';
import Textfield from '@atlaskit/textfield';
import CreateModal from "../PostsModeration/CreateModal";

const Container = styled.div`
  padding: 20px;
`;

const List = styled.ul`
  margin-top: 30px;
`;

export const UsersModeration = ({ getUsers, users, deleteUser, role, isVisible, setVisible, createUser }) => {
    const [login, setLogin] = useState();
    const [password, setPassword] = useState();
    const [name, setName] = useState();


  useEffect(()=>{
    getUsers();
  }, []);


  const onShowModal = () => {
      setVisible(true);
  };

  return (
    <Container>
              <Button
                  iconBefore={<AddIcon size="small"/>}
                  onClick={onShowModal}
              >
                  Создать Администратора
              </Button>
              <List>
                {users?.map((item)=> <User key={item.login} user={item} role={role} deleteUser={deleteUser} />)}
              </List>
                <CreateModal setVisible={setVisible} isVisible={isVisible} type='user'/>
    </Container>
  );
}