import Modal, {ModalBody, ModalFooter, ModalHeader, ModalTitle, ModalTransition} from "@atlaskit/modal-dialog";
import Form, { Field, HelperMessage } from "@atlaskit/form";
import React, {Fragment, useState} from "react";
import Textfield from "@atlaskit/textfield";
import Button from "@atlaskit/button";
import TextArea from '@atlaskit/textarea';
import Select from '@atlaskit/select';
import { DatePicker } from '@atlaskit/datetime-picker';
import { isEmpty } from 'lodash';
import toast from 'react-hot-toast';
import styled from 'styled-components';
import moment from 'moment';

import Map from './Map/index';
import GetFile from "../GetFile/index";
import {FormattedMessage} from "react-intl";

const ContainerText = styled.div`
    margin-bottom: 30px;
`
const ContainerDate = styled.div`
    margin-bottom: 30px;
`

const data = {
    user: {
        title: 'button_create_admin',
        fields: [
            {
                label: 'label_email',
                name: 'email',
                required: true,
                errorMessage: 'error',
            },
            {
                label: 'label_password',
                name: 'password',
                required: true,
                errorMessage: 'error',
                type: 'password'
            },
            {
                label: 'label_password_repeat',
                name: 'password_confirmation',
                required: true,
                errorMessage: 'error',
                type: 'password'
            },
            {
                label: 'label_name',
                name: 'name',
                required: true,
                errorMessage: 'error',
            },
        ],
    },
    post: {
        title: 'button_create_post',
        fields: [
            {
                label: 'label_title',
                name: 'title',
                required: true,
                errorMessage: 'error',
            },
            {
                label: 'label_subtitle',
                name: 'subtitle',
                errorMessage: 'error',
            },
            {
                label: 'label_usefully_links',
                name: 'links',
                errorMessage: 'error',
                helperMessage: 'enter_links'
            },
        ],
    },
    category: {
        title: 'modal_types_title',
        fields: [
            {
                label: 'label_category_label',
                name: 'label',
                required: true,
                errorMessage: 'error',
            },
            {
                label: 'label_link_on_EN',
                name: 'value',
                required: true,
                errorMessage: 'error',
            },
        ],
    },
    profile: {
        title: 'modal_profile_title',
        fields: [
            {
                label: 'label_name',
                name: 'name',
                errorMessage: 'error',
            },
            {
                label: 'label_old_password',
                name: 'old_password',
                errorMessage: 'error',
                type: 'password'
            },
            {
                label: 'label_new_password',
                name: 'new_password',
                errorMessage: 'error',
                type: 'password'
            },
            {
                label: 'label_new_password_repeat',
                name: 'new_password_confirmation',
                errorMessage: 'error',
                type: 'password'
            },
        ],
    },
};

export const CreateModal = ({
                                setVisible,
                                type,
                                create,
                                types,
                                submitButtonLabel = 'button_create',
                                closeButtonLabel = 'button_close',
                                locale = 'ru-RU',
}) => {
    const [files, setFiles] = useState([]);
    const [currentPosition, setCurrentPosition] = useState();
    const [dateVisible, setDateVisible] = useState();
    const [date, setDate] = useState();
    const [category, setCategory] = useState();
    const modalvalues = data[type];

    const dateNow = Date.now();

    const onCloseModal = () => {
        setVisible(false);
    };

    const onSubmitForm = (data) => {
        let creatingItem = null;

        switch (type) {
            case 'post':
                const { title, subtitle, content, date, type, links } = data;

                const images = files.map((item)=> item.file);
                creatingItem = {
                    title,
                    content,
                    type_id: type?.id,
                    longitude: !!currentPosition && currentPosition[1].toString(),
                    latitude: !!currentPosition && currentPosition[0].toString(),
                    images,
                };
                if (subtitle) {
                    creatingItem = {
                        ...creatingItem,
                        subtitle,
                    }
                }
                if (date) {
                    creatingItem = {
                        ...creatingItem,
                        date
                    }
                }
                if (!isEmpty(links)) {
                    creatingItem = {
                        ...creatingItem,
                        links: links?.split(' '),
                    }
                }
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
                            role: 'admin',
                        };
                    } else {
                        toast.error(<FormattedMessage id='toast.password_not_equal' />);
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
                const { name, old_password, new_password, new_password_confirmation } = data;
                creatingItem = { user: {} };
                if (old_password && new_password === new_password_confirmation) {
                    creatingItem = {
                        user: {
                                old_password,
                                new_password,
                                new_password_confirmation,
                        },
                    };
                } else {
                    toast.error(<FormattedMessage id='toast.password_not_equal' />);
                }
                if (files[0]?.file !== undefined) {
                    creatingItem = {
                        ...creatingItem,
                        avatar: files[0].file,
                    };
                }
                if (name) {
                    creatingItem = {
                        ...creatingItem,
                        user: {
                            ...creatingItem.user,
                            name,
                    },
                    };
                }
                break;
            default: 
                break
        }
        
        creatingItem && create(creatingItem);
    }

    const getCreateUserFields = () => {
        return <ModalBody>
            {modalvalues.fields.map((field)=>(
                <Field key={field.label} isRequired={field.required || false} label={<FormattedMessage id={field.label} />} name={field.name}>
                    {({ fieldProps }) => (
                        <Fragment>
                            <Textfield
                                placeholder={field.placeholder ? field.placeholder : ''}
                                type={field.type ? field.type : ''}
                                name={field.name}
                                aria-required={field.required || false}
                                {...fieldProps}
                            />
                            {field?.helperMessage && <HelperMessage><FormattedMessage id={field?.helperMessage} /></HelperMessage>}
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
                <Field key={field.label} isRequired={field.required || false} label={<FormattedMessage id={field.label} />} name={field.name}>
                    {({ fieldProps }) => (
                        <Fragment>
                            <Textfield
                                placeholder={field.placeholder ? field.placeholder : ''}
                                type={field.type ? field.type : ''}

                                {...fieldProps}
                            />
                        </Fragment>

                    )}
                </Field>))}

                <Field 
                style={{marginTop: '10px'}} 
                label={<FormattedMessage id='label_post_type' />} 
                name="type"
                defaultValue={null}
                isRequired
                validate={(value) =>  { setCategory(value); value?.value === 'feature' ? setDateVisible(true):setDateVisible(false)}} 
            >
                {({ fieldProps }) => (
                    <Fragment>
                        <Select
                            inputId="type"
                            options={types}
                            placeholder="Выберете тип поста"
                            {...fieldProps}
                        />
                    </Fragment>
                )}
            </Field>

            {dateVisible && <Field isRequired validate={(value) =>  setDate(value)}   label={<FormattedMessage id='select_date' />} name="date" >
                {({fieldProps}) => (
                    <ContainerDate>
                        <DatePicker loclae={locale} minDate={moment(dateNow, "MM-DD-YYYY")} onChange={(evt) => console.log(evt)} {...fieldProps} />
                    </ContainerDate>
                )}
            </Field>}
            <Field 
                label={<FormattedMessage id={'label_post_text'} />} 
                isRequired
                name="content"
            >
                {({ fieldProps, error }) => (
                    <ContainerText>
                        <TextArea
                            aria-required={true}
                            {...fieldProps}
                        />
                    </ContainerText>
                )}
            </Field>
            <GetFile files={files} setFiles={setFiles} isMultiply />
            <Map currentPosition={currentPosition} setCurrentPosition={setCurrentPosition} />
        </ModalBody>
    }
    const getChangeProfileFields = () => {
        return <ModalBody>
            {modalvalues.fields.map((field)=>(
                <Field key={field.label} label={<FormattedMessage id={field.label} />} name={field.name}>
                    {({ fieldProps }) => (
                        <Fragment>
                            <Textfield
                                placeholder={field.placeholder ? field.placeholder : ''}
                                type={field.type ? field.type : ''}
                                {...fieldProps}
                            />
                        </Fragment>

                    )}
                </Field>))}
            <GetFile files={files} setFiles={setFiles} isMultiply={false} />
        </ModalBody>
    }

    return (
       <ModalTransition>
               <Modal onClose={onCloseModal}>
                   <Form onSubmit={(data) => onSubmitForm(data)}>
                       {({ formProps }) => (
                               <form id="createModal" {...formProps}>
                                   <ModalHeader>
                                       <ModalTitle><FormattedMessage id={modalvalues.title} /></ModalTitle>
                                   </ModalHeader>
                                   {(type === 'user' || type === 'category') && getCreateUserFields()}
                                   {(type === 'post') && getCreatePostFields()}
                                   {(type === 'profile') && getChangeProfileFields()}
                                   <ModalFooter>
                                       <p style={{marginRight: 'auto'}}><FormattedMessage id='required_field' /></p>
                                       <Button appearance="subtle" onClick={onCloseModal}>
                                           <FormattedMessage id={closeButtonLabel} />
                                       </Button>
                                       <Button isDisabled={(type === 'post' && (isEmpty(files) || isEmpty(currentPosition) || (dateVisible && isEmpty(date)) || isEmpty(category))) || (type === 'category' && isEmpty(files)) } type="submit" appearance="primary" autoFocus>
                                           <FormattedMessage id={submitButtonLabel} />
                                       </Button>
                                   </ModalFooter>
                               </form>
                       )}
                    </Form>
               </Modal>
       </ModalTransition>
   );
 }
