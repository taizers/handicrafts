import React, { useEffect } from 'react';
import styled from 'styled-components';
import Avatar from '@atlaskit/avatar';
import Button from "@atlaskit/button";
import CrossCircleIcon from '@atlaskit/icon/glyph/cross-circle'

const Container = styled.li`
  display: flex;
  align-items: center;
  margin: 15px 0;
`;

const TextContainer = styled.div`
  margin-left: 10px;
`;

const Login = styled.h3`
  margin-bottom: 5px;
`;

const DisplayedName = styled.p`
  
`;


export const User = ({ user, role, deleteUser }) => {
    const onDeleteUser = () => {
        deleteUser(user.id);
    }


    return (
        <Container>
            <Avatar
                appearance="circle"
                src={user.avatar}
                size="medium"
                name="John Doe"
            />
            <TextContainer>
                <Login>{user.login}</Login>
                <DisplayedName>{user.name}</DisplayedName>
            </TextContainer>
            {role === 'owner' && <Button
                iconAfter={<CrossCircleIcon size="medium"/>}
                onClick={onDeleteUser}
            />}
        </Container>
    );
}