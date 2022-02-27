import Modal, {ModalBody, ModalFooter, ModalHeader, ModalTitle, ModalTransition} from "@atlaskit/modal-dialog";
import Form, {Field, FormFooter, HelperMessage, ErrorMessage} from "@atlaskit/form";
import React, {Fragment, useState} from "react";
import Textfield from "@atlaskit/textfield";
import Button from "@atlaskit/button";
import TextArea from '@atlaskit/textarea';
import Select from '@atlaskit/select';
import GetFile from "../GetFile/index";
import { POSTS_TYPES } from '../../../constants';

const data = {
    user: {
        title: "Создать Администратора",
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
        title: "Создать пост",
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
        ],
    },
};

export const CreateModal = ({ setVisible, createUser, type, isVisible, createPost }) => {
    const [files, setFiles] = useState([]);
    const modalvalues = data[type];

    const onCloseModal = () => {
        setVisible(false);
    };

    const onSubmitForm = (data) => {
        if (type === 'post') {
            createPost(data)
        }
        if (type === 'user') {
            createUser(data);
        }

    }

   return (
       <ModalTransition>
           {isVisible && (
               <Modal onClose={onCloseModal}>
                   <Form onSubmit={(data) => onSubmitForm(data)}>
                       {({ formProps }) => (
                           <form id="createModal" {...formProps}>
                               <ModalHeader>
                                   <ModalTitle>{modalvalues.title}</ModalTitle>
                               </ModalHeader>
                               {(type === 'user') && <ModalBody>
                                   {modalvalues.fields.map((field)=>(
                                       <Field key={field.label} label={field.label} name={field.name}>
                                           {({ fieldProps }) => (
                                               <Fragment>
                                                   <Textfield
                                                       placeholder={field.placeholder ? field.placeholder : ''}
                                                       type={field.type ? field.type : ''}
                                                       name={field.name}
                                                       {...fieldProps}
                                                   />
                                                   <ErrorMessage>{field.errorMessage}</ErrorMessage>
                                               </Fragment>
                                           )}
                                       </Field>
                                   ))}
                               </ModalBody>}

                               {(type === 'post') && <ModalBody>
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
                                       </Field>))}
                                       <Field label="Текст поста" name="text">
                                           {({ fieldProps }) => (
                                           <Fragment>
                                               <TextArea
                                                   placeholder="Введите текст поста"
                                                    {...fieldProps}
                                               />
                                           </Fragment>
                                            )}
                                       </Field>
                                       <Field label="Тип поста" name="type">
                                           {({ fieldProps }) => (
                                           <Select
                                               inputId="type"
                                               options={POSTS_TYPES}
                                               placeholder="Выберете тип поста"
                                               {...fieldProps}
                                           />
                                           )}
                                       </Field>
                                   <GetFile files={files} setFiles={setFiles} />
                               </ModalBody>}

                               <ModalFooter>
                                   <p style={{marginRight: 'auto'}}>* - Обязательный параметр</p>
                                   <Button appearance="subtle" onClick={onCloseModal}>Закрыть</Button>
                                   <Button type="submit" appearance="primary" autoFocus>
                                       Создать
                                   </Button>
                               </ModalFooter>
                           </form>
                       )}
                   </Form>
               </Modal>
           )}
       </ModalTransition>
   );
 }