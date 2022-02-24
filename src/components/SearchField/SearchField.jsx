import React, { useState } from 'react';
import styled from "styled-components";
import Button from '@atlaskit/button/standard-button';
import Textfield from '@atlaskit/textfield';

const Container = styled.div`
    display: flex;
    width: 100%;
  
  &:first-child {
        
  }
`

export const SearchField = ({ search }) => {
    const [searchText, setSearchText] = useState('');

    const onSearchClick = () => {
        search(searchText);
    }

    return (
        <Container>
            <Textfield style={{margin: "0 20px"}} name="search" aria-label="default text field" onChange={(evt) => setSearchText(evt.currentTarget.value)} />
            <Button appearance="primary" onClick={onSearchClick}>Найти</Button>
        </Container>
    );
}