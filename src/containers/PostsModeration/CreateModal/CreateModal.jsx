import Modal, {ModalBody, ModalFooter, ModalHeader, ModalTitle, ModalTransition} from "@atlaskit/modal-dialog";
import Form, {Field, FormFooter, HelperMessage, ErrorMessage} from "@atlaskit/form";
import React, {Fragment, useState} from "react";
import Textfield from "@atlaskit/textfield";
import Button from "@atlaskit/button";
import TextArea from '@atlaskit/textarea';
import Select from '@atlaskit/select';
import { DatePicker } from '@atlaskit/datetime-picker';
import Loader from '../../../components/Loader/index';

import Map from './Map/index';
import GetFile from "../GetFile/index";
import {FormattedMessage} from "react-intl";

const data = {
    user: {
        title: <FormattedMessage id={'button_create_admin'} />,
        fields: [
            {
                label: <FormattedMessage id={'label_email'} />,
                name: 'email',
                required: true,
                placeholder: 'example@example.com',
                errorMessage: 'error',
            },
            {
                label: <FormattedMessage id={'label_password'} />,
                name: 'password',
                required: true,
                placeholder: 'password',
                errorMessage: 'error',
                type: 'password'
            },
            {
                label: <FormattedMessage id={'label_password_repeat'} />,
                name: 'password_confirmation',
                required: true,
                placeholder: 'password',
                errorMessage: 'error',
                type: 'password'
            },
            {
                label: <FormattedMessage id={'label_name'} />,
                name: 'name',
                required: true,
                placeholder: 'Имя',
                errorMessage: 'error',
            },
        ],
    },
    post: {
        title: <FormattedMessage id={'button_create_post'} />,
        fields: [
            {
                label: <FormattedMessage id={'label_title'} />,
                name: 'title',
                required: true,
                errorMessage: 'error',
            },
            {
                label: <FormattedMessage id={'label_subtitle'} />,
                name: 'subtitle',
                errorMessage: 'error',
            },
            {
                label: <FormattedMessage id={'label_usefully_links'} />,
                name: 'links',
                errorMessage: 'error',
                helperMessage: 'введите ссылки через пробел'
            },
        ],
    },
    category: {
        title: <FormattedMessage id={'modal_types_title'} />,
        fields: [
            {
                label: <FormattedMessage id={'label_category_label'} />,
                name: 'label',
                required: true,
                errorMessage: 'error',
            },
            {
                label: <FormattedMessage id={'label_link_on_EN'} />,
                name: 'value',
                required: true,
                errorMessage: 'error',
            },
        ],
    },
    profile: {
        title: <FormattedMessage id={'modal_profile_title'} />,
        fields: [
            {
                label: <FormattedMessage id={'label_name'} />,
                name: 'name',
                errorMessage: 'error',
            },
            {
                label: <FormattedMessage id={'label_password'} />,
                name: 'password',
                errorMessage: 'error',
            },
            {
                label: <FormattedMessage id={'label_password_repeat'} />,
                name: 'password_confirmation',
                errorMessage: 'error',
            },
        ],
    },
};

export const CreateModal = ({
                                setVisible,
                                type,
                                isVisible,
                                create,
                                isLoading,
                                types,
                                submitButtonLabel = 'button_create',
                                closeButtonLabel = 'button_close',
}) => {
    const [files, setFiles] = useState([]);
    const [currentPosition, setCurrentPosition] = useState();
    const modalvalues = data[type];
    console.log(files);
    const onCloseModal = () => {
        setVisible(false);
    };

    const onSubmitForm = (data) => {
        let creatingItem = null;

        switch (type) {
            case 'post':
                const { title, subtitle, content, date, type, links } = data;
                console.log([files.map((item)=> item.file)]);
                const images = files.map((item)=> item.file);
                creatingItem = {
                    title,
                    subtitle,
                    content,
                    date: type?.value === 'feature' ? date : '',
                    links: links?.split(' '),
                    type_id: type?.id,
                    longitude: !!currentPosition && currentPosition[0].toString(),
                    latitude: !!currentPosition && currentPosition[1].toString(),
                    images,
                };
                break;
            case 'user': {
                {
                    const {email, name, password, password_confirmation} = data;
                    if (password === password_confirmation) {
                        creatingItem = {
                            email,
                            name,
                            password,
                            password_confirmation,
                            role: 'owner',
                        };
                    }
                }
            }
                break;
            case 'category':
                const { label, value } = data;

                creatingItem = {
                    label,
                    value,
                    image: files[0].file,
                };
                break;
            case 'profile':
                const { name, password, password_confirmation } = data;
                if (password === password_confirmation) {
                    creatingItem = {
                        user: {
                                name,
                                password,
                                password_confirmation,
                        },
                        avatar: files[0].file,
                    };
                }
                break;
        }

        console.log(creatingItem);
        create(creatingItem);
    }

    const getCreateUserFields = () => {
        return <ModalBody>
            {modalvalues.fields.map((field)=>(
                <Field key={field.label} label={field.label} name={field.name}>
                    {({ fieldProps }) => (
                        <Fragment>
                            <Textfield
                                placeholder={field.placeholder ? field.placeholder : ''}
                                type={field.type ? field.type : ''}
                                name={field.name}
                                aria-required={field.required || false}
                                {...fieldProps}
                            />
                            <ErrorMessage>{field.errorMessage}</ErrorMessage>
                            {field.helperMessage && <HelperMessage>{field.helperMessage}</HelperMessage>}
                        </Fragment>
                    )}
                </Field>
            ))}
            {type === 'category' && <GetFile files={files} setFiles={setFiles} isMultiply={false} />}
        </ModalBody>
    }

    const getCreatePostFields = () => {
        return <ModalBody>
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
            <Field style={{marginBottom: '10px'}} label={<FormattedMessage id={'label_post_text'} />} name="content">
                {({ fieldProps }) => (
                    <Fragment>
                        <TextArea
                            placeholder=<FormattedMessage id={'enter_post_text'} />
                            aria-required={true}
                            {...fieldProps}
                        />
                    </Fragment>
                )}
            </Field>
            <Map currentPosition={currentPosition} setCurrentPosition={setCurrentPosition} />
            <Field style={{marginTop: '10px'}} label={<FormattedMessage id={'label_post_type'} />} name="type" onChange={evt => console.log(evt)} >
                {({ fieldProps }) => (
                    <Select
                        inputId="type"
                        options={types}
                        placeholder="Выберете тип поста"
                        {...fieldProps}
                    />
                )}
            </Field>

            <Field label={<FormattedMessage id={'select_date'}/>} name="date" isRequired={true}>
                {({fieldProps}) => (
                    <DatePicker {...fieldProps} />
                )}
            </Field>

            <GetFile files={files} setFiles={setFiles} isMultiply />
        </ModalBody>
    }
    const getChangeProfileFields = () => {
        return <ModalBody>
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
            <GetFile files={files} setFiles={setFiles} isMultiply={false} />
        </ModalBody>
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
                                   {(type === 'user' || type === 'category') && getCreateUserFields()}
                                   {(type === 'post') && getCreatePostFields()}
                                   {(type === 'profile') && getChangeProfileFields()}
                                   <ModalFooter>
                                       <p style={{marginRight: 'auto'}}>* - Обязательный параметр</p>
                                       <Button appearance="subtle" onClick={onCloseModal}>
                                           <FormattedMessage id={closeButtonLabel} />
                                       </Button>
                                       <Button type="submit" appearance="primary" autoFocus>
                                           <FormattedMessage id={submitButtonLabel} />
                                       </Button>
                                   </ModalFooter>

                               </form>

                       )}
                    </Form>

               </Modal>

           )}
           {console.log(isLoading)}
           {isLoading && <Loader isLoading={isLoading}/>}
       </ModalTransition>
   );
 }