import React, { useEffect } from "react";
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import Avatar from '@atlaskit/avatar';
import Button from '@atlaskit/button'
import { FormattedMessage } from "react-intl";

import CreateModal from "../../containers/PostsModeration/CreateModal/index";

const Container = styled.div` 
    width: 100%;
    background-color: white;
    display: flex;
      flex-direction: column;
      align-items: center;
    max-height: 400px;
    border-radius: 25px;
    margin: 30px auto;
    padding: 20px 30px;
    color: black;
`

const UserLogin = styled.h3`
    margin: 10px auto;
    display: block;
`

const UserDisplayedName = styled.p`
    font-size: 16px;
    margin: 5px auto;
    display: block;
`

const TextContainer = styled.div`
  margin-bottom: 20px;
`

export const Profile = ({ user, getUserProfile, token, changeProfile, isVisible, setVisible }) => {
    let { id } = useParams();

    useEffect(()=> {
        getUserProfile(id, token);
    }, []);

    const onClick = () => {
        setVisible(true);
    }

    return (
        <Container>
            <Avatar src={user?.avatar} size="xxlarge" />
            <TextContainer>
                <UserLogin><FormattedMessage id={'label_email'}/>: {user?.email}</UserLogin>
                <UserDisplayedName>{<FormattedMessage id={'label_name'}/>}: {user?.name}</UserDisplayedName>
                <UserDisplayedName>{<FormattedMessage id={'label_role'}/>}: {user?.role}</UserDisplayedName>
            </TextContainer>
            <Button appearance='primary' onClick={onClick}>{<FormattedMessage id={'button_change'}/>}</Button>
            {isVisible && <CreateModal submitButtonLabel='button_change' setVisible={setVisible} isVisible={isVisible} create={changeProfile} type='profile' />}
        </Container>
    );
};
