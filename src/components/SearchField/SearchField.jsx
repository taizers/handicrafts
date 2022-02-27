import React, { useState } from 'react';
import styled from "styled-components";
import Button from '@atlaskit/button/standard-button';
import Textfield from '@atlaskit/textfield';
import {Field} from "@atlaskit/form";
import Select from '@atlaskit/select';

const Container = styled.div`
    display: flex;
  width: 80%;
`
const FieldContainer = styled.div`
    margin-right: 20px;
`

const SelectContainer = styled(FieldContainer)`
    min-width: 150px;
`

export const SearchField = ({ search }) => {
    const [login, setlogin] = useState('');
    const [role, setRole] = useState('');
    const [name, setName] = useState('');

    const onSearchClick = () => {
        search({login, role, name});
    }

    return (
        <Container>
            <FieldContainer>
                <Field
                    label="Логин"
                    name="login"
                    defaultValue=""
                >
                    {({ fieldProps }) => (
                        <Textfield
                            aria-label="default text field"
                            onChange={(evt) => (setlogin(evt.currentTarget.value))} />
                    )}
                </Field>
            </FieldContainer>
            <FieldContainer>
                <Field
                    label="Имя"
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
                    label="Роль"
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
            >Найти</Button>
        </Container>
    );
}