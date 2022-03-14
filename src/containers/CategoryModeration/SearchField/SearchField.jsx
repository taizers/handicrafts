import React, { useState } from 'react';
import styled from "styled-components";
import Button from '@atlaskit/button/standard-button';
import Textfield from '@atlaskit/textfield';
import {Field} from "@atlaskit/form";

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
    const [label, setLabel] = useState('');
    const [value, setValue] = useState('');

    const onSearchClick = () => {
        search({label, value});
    }

    return (
        <Container>
            <FieldContainer>
                <Field
                    label="Название категории"
                    name="label"
                    defaultValue=""
                >
                    {({ fieldProps }) => (
                        <Textfield
                            aria-label="default text field"
                            onChange={(evt) => (setLabel(evt.currentTarget.value))} />
                    )}
                </Field>
            </FieldContainer>
            <FieldContainer>
                <Field
                    label="Значение категории"
                    name="value"
                    defaultValue=""
                >
                    {({ fieldProps }) => (
                        <Textfield
                            aria-label="default text field"
                            onChange={(evt) => (setValue(evt.currentTarget.value))} />
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