import React, {useEffect, useState, useRef} from 'react';
import styled from 'styled-components';
import User from './User/index';
import Button from "@atlaskit/button";
import AddIcon from '@atlaskit/icon/glyph/add'
import Modal, {
    ModalBody,
    ModalFooter,
    ModalHeader,
    ModalTransition,
} from '@atlaskit/modal-dialog';
import Form, { Field } from '@atlaskit/form';
import Textfield from '@atlaskit/textfield';

import { focusRef } from "./util";

const Container = styled.div`
  
`;

const List = styled.ul`
  
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

  const onCloseModal = () => {
      setVisible(false);
  };

  const onSubmitForm = () => {
      const user = {
          login: login,
          password: password,
          name: name,
      }

      createUser(user);
  }

  return (
    <Container>
          <Button
              iconBefore={<AddIcon size="small"/>}
              onClick={onShowModal}
          >
              Создать Администратора
          </Button>
          <List>
            {users.map((item)=> <User key={item.login} user={item} role={role} deleteUser={deleteUser} />)}
          </List>
        {isVisible &&
            <Modal>
                <ModalHeader>
                    Создать Администратора
                </ModalHeader>
                <ModalBody>
                    <Field label="Email" name="email" defaultValue="">
                        {({ fieldProps }) => (
                            <Textfield
                                ref={focusRef}
                                autoComplete="off"
                                placeholder="example@example.com"
                                {...fieldProps}
                            />
                        )}
                    </Field>
                </ModalBody>
                <ModalFooter>
                    <Button appearance="subtle" onClick={onCloseModal}>Закрыть</Button>
                    <Button appearance="primary" onClick={onSubmitForm} autoFocus>
                        Создать
                    </Button>
                </ModalFooter>
            </Modal>
        }
    </Container>
  );
}