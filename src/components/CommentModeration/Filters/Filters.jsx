import styled from 'styled-components';
import React, {Fragment, useState} from 'react';
import { isEmpty, values } from "lodash";

import Button from '@atlaskit/button/standard-button';
import Form, { Field, FormFooter } from '@atlaskit/form';

import Textfield from '@atlaskit/textfield';

const Container = styled.div`
    display: flex;
    width: 100%;
  margin-bottom: 20px;
`

const FieldContainer = styled.div`
  margin-right: 20px;
`


export const Filters = ({ search }) => {
    const [userLogin, setLogin] = useState("");
    const [postTitle, setPost] = useState("");
    const [text, setText] = useState("");

    const onSearchClick = () => {
        const query = {userLogin, postTitle, text};

        search(query);
    }

    return (
        <Container>
            <FieldContainer>
                <Field
                    label="Логин"
                    name="login"
                    defaultValue=""
                    style={{
                        marginRight: '20px',
                    }}
                >
                    {({ fieldProps }) => (
                        <Textfield
                            aria-label="default text field"
                            onChange={(evt) => setLogin(evt.currentTarget.value)} />
                    )}
                </Field>
            </FieldContainer>
            <FieldContainer>
                <Field
                    label="Пост"
                    name="post"
                    defaultValue=""
                >
                    {({ fieldProps }) => (
                        <Textfield
                            style={{
                                paddingRight: '20px',
                            }}
                            aria-label="default text field"
                            onChange={(evt) => setPost(evt.currentTarget.value)} />
                    )}
                </Field>
            </FieldContainer>
            <FieldContainer>
                <Field
                    label="Комментарий"
                    name="comment"
                    defaultValue=""
                    style={{
                        marginRight: '20px',
                    }}
                >
                    {({ fieldProps }) => (
                        <Textfield
                            aria-label="default text field"
                            onChange={(evt) => setText(evt.currentTarget.value)} />
                    )}
                </Field>
            </FieldContainer>

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