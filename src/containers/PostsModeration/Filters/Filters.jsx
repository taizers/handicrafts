import styled from 'styled-components';
import React, {Fragment, useState} from 'react';
import { isEmpty, values } from "lodash";
import { DatePicker } from '@atlaskit/datetime-picker';
import { parseISO } from 'date-fns'

import Button from '@atlaskit/button/standard-button';
import Form, { Field, FormFooter } from '@atlaskit/form';

import Textfield from '@atlaskit/textfield';
import {FormattedMessage} from "react-intl";

const Container = styled.div`
    display: flex;
  justify-content: space-between;
    width: 100%;
`

const FieldContainer = styled.div`
  margin-right: 20px;
  width: 60%;
`

const DateFieldContainer = styled(FieldContainer)`
  width: 40%;
`


export const Filters = ({ search }) => {
    const [date, setDate] = useState("");
    const [title, setPost] = useState("");

    const onSearchClick = () => {
        const query = {date, title};

        search(query);
    }

    return (
        <Container>
            <FieldContainer>
                <Field
                    label={<FormattedMessage id='label_title'/>}
                    name="title"
                    defaultValue=""
                >
                    {({ fieldProps }) => (
                        <Textfield
                            aria-label="default text field"
                            onChange={(evt) => (setPost(evt.currentTarget.value))} />
                    )}
                </Field>
            </FieldContainer>

            <DateFieldContainer>
                <Field
                    name="date"
                    label={<FormattedMessage id='label_date'/>}
                    isRequired={false}
                    defaultValue=""
                >
                    {({ fieldProps }) => (
                        <>
                            <DatePicker
                                dateFormat="YYYY-MM-DD"
                                placeholder="..."
                                locale={'ru-RU'}
                                parseInputValue={(date) => parseISO(date)}
                                onChange={(evt) => setDate(evt)} />

                        </>
                    )}
                </Field>
            </DateFieldContainer>

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