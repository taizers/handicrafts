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
            {users?.map((item)=> <User key={item.login} user={item} role={role} deleteUser={deleteUser} />)}
          </List>
            <ModalTransition>
                {isVisible && (
                    <Modal onClose={onCloseModal}>
                        <ModalHeader>
                            <ModalTitle>Создать администратора</ModalTitle>
                        </ModalHeader>
                        <ModalBody>
                            <Form
                                onSubmit={onSubmitForm}
                            >
                                {({ formProps }) => (
                                    <form {...formProps}>
                                        <Field label="Email" name="email">
                                            {({ fieldProps }) => (
                                                <Fragment>
                                                    <Textfield
                                                        placeholder="example@example.com"
                                                        {...fieldProps}
                                                    />
                                                    <HelperMessage>
                                                        Логин
                                                    </HelperMessage>
                                                </Fragment>
                                            )}
                                        </Field>
                                        <Field label="Password" name="password">
                                            {({ fieldProps }) => (
                                                <Fragment>
                                                    <Textfield
                                                        placeholder="Пароль"
                                                        type="password"
                                                        {...fieldProps}
                                                    />
                                                    <HelperMessage>
                                                        Пароль
                                                    </HelperMessage>
                                                </Fragment>
                                            )}
                                        </Field>
                                        <Field label="Name" name="name">
                                            {({ fieldProps }) => (
                                                <Fragment>
                                                    <Textfield
                                                        placeholder="Имя"
                                                        {...fieldProps}
                                                    />
                                                    <HelperMessage>
                                                        Ошибка
                                                    </HelperMessage>
                                                </Fragment>
                                            )}
                                        </Field>
                                        <FormFooter>
                                            <Button appearance="subtle" onClick={onCloseModal}>Закрыть</Button>
                                            <Button type="submit" appearance="primary" autoFocus>
                                                Создать
                                            </Button>
                                        </FormFooter>
                                    </form>
                                )}
                            </Form>
                            <ModalFooter>
                                * Обязательный параметр
                            </ModalFooter>
                        </ModalBody>
                    </Modal>
                )}
            </ModalTransition>
    </Container>
  );
}