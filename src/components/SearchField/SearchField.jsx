import React, { useState } from 'react';
import styled from "styled-components";
import Button from '@atlaskit/button/standard-button';
import Textfield from '@atlaskit/textfield';

const Container = styled.div`
    display: flex;
  width: 80%;
`

export const SearchField = ({ search }) => {
    const [searchText, setSearchText] = useState('');

    const onSearchClick = () => {
        search(searchText);
    }

    return (
        <Container>
            <Textfield
                style={{
                    marginRight: '20px',
                }}
                name="search"
                aria-label="default text field"
                onChange={(evt) => setSearchText(evt.currentTarget.value)} />
            <Button
                appearance="primary"
                onClick={onSearchClick}
                style={{
                    marginLeft: '20px',
                    alignSelf: 'center',
                }}
            >Найти</Button>
        </Container>
    );
}