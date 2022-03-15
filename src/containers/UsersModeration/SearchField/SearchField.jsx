import React, { useState } from 'react';
import styled from "styled-components";
import Button from '@atlaskit/button/standard-button';
import Textfield from '@atlaskit/textfield';
import {Field} from "@atlaskit/form";
import Select from '@atlaskit/select';
import {FormattedMessage} from "react-intl";

const Container = styled.div`
    display: flex;
      width: 100%;
      margin-bottom: 20px;
`
const FieldContainer = styled.div`
    margin-right: 20px;
    width: 100%;
`

const SelectContainer = styled(FieldContainer)`
    min-width: 150px;
`

export const SearchField = ({ search }) => {
    const [login, setLogin] = useState('');
    const [role, setRole] = useState('');
    const [name, setName] = useState('');

    const onSearchClick = () => {
        search({login, role, name});
    }

    return (
        <Container>
            <FieldContainer>
                <Field
                    label={<FormattedMessage id='label_email'/>}
                    name="login"
                    defaultValue=""
                >
                    {({ fieldProps }) => (
                        <Textfield
                            aria-label="default text field"
                            onChange={(evt) => (setLogin(evt.currentTarget.value))} />
                    )}
                </Field>
            </FieldContainer>
            <FieldContainer>
                <Field
                    label={<FormattedMessage id='label_name'/>}
                    name="name"
                    defaultValue=""
                >
                    {({ fieldProps }) => (
                        <Textfield
                            aria-label="default text field"
                            onChange={(evt) => (setName(evt.currentTarget.value))} />
                    )}
                </Field>
            </FieldContainer>
            <SelectContainer>
                <Field
                    label={<FormattedMessage id='label_role'/>}
                    name="role"
                    defaultValue=""
                >
                    {({ fieldProps }) => (
                        <Select
                            inputId="role"
                            options={[
                                { label: 'Все', value: '' },
                                { label: 'Пользователь', value: 'user' },
                                { label: 'Админ', value: 'admin' },
                                { label: 'Владелец', value: 'owner' },
                            ]}
                            placeholder="Все"
                            isSearchable={false}
                            onChange={(evt) => setRole(evt.value)}
                        />
                    )}
                </Field>
            </SelectContainer>
            <Button
                appearance="primary"
                onClick={onSearchClick}
                style={{
                    marginLeft: '20px',
                    alignSelf: 'flex-end',
                }}
            ><FormattedMessage id='button_search'/></Button>
        </Container>
    );
}