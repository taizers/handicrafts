import Modal, {ModalBody, ModalFooter, ModalHeader, ModalTitle, ModalTransition} from "@atlaskit/modal-dialog";
import Form, {Field, FormFooter, HelperMessage, ErrorMessage} from "@atlaskit/form";
import React, {Fragment} from "react";
import Textfield from "@atlaskit/textfield";
import Button from "@atlaskit/button";

const data = {
    user: {
        title: "создать Администратора",
        fields: [
            {
                label: 'Email',
                name: 'email',
                placeholder: 'example@example.com',
                errorMessage: 'error',
            },
            {
                label: 'Password',
                name: 'password',
                placeholder: 'password',
                errorMessage: 'error',
                type: 'password'
            },
            {
                label: 'Name',
                name: 'name',
                placeholder: 'Имя',
                errorMessage: 'error',
            },
        ],
    },
    post: {
        title: "создать Пост",
        fields: [
            {
                label: 'Заголовок',
                name: 'title',
                errorMessage: 'error',
            },
            {
                label: 'Подзаголовок',
                name: 'subTitle',
                errorMessage: 'error',
            },
            {
                label: 'Текст',
                name: 'text',
                errorMessage: 'error',
            },
            {
                label: 'Тип',
                name: 'type',
                errorMessage: 'error',
            },
        ],
    },
};

export const CreateModal = ({ setVisible, createUser, type, isVisible, createPost }) => {
    const modalvalues = data[type];

    const onCloseModal = () => {
        setVisible(false);
    };

    const onSubmitForm = () => {
        const user = {

        };
        const post = {

        };
        if (type === 'post') {
            createPost(post)
        } else
            if (type === 'user') {
                createUser(user);
            }

    }

   return (
       <ModalTransition>
           {isVisible && (
               <Modal onClose={onCloseModal}>
                   <ModalHeader>
                       <ModalTitle>{modalvalues.title}</ModalTitle>
                   </ModalHeader>
                   <ModalBody>
                       <Form
                           onSubmit={onSubmitForm}
                       >
                           {({ formProps }) => (
                               <form {...formProps}>
                                   {modalvalues.fields.map((field)=>(
                                       <Field key={field.label} label={field.label} name={field.name}>
                                           {({ fieldProps }) => (
                                               <Fragment>
                                                   <Textfield
                                                       placeholder={field.placeholder ? field.placeholder : ''}
                                                       type={field.type ? field.type : ''}
                                                       {...fieldProps}
                                                   />
                                                   <ErrorMessage>{field.errorMessage}</ErrorMessage>
                                               </Fragment>
                                           )}
                                       </Field>
                                   ))}
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
   );
 }