import styled from 'styled-components';

const Container = styled.div`
    max-width: 60%;
    background-color: white;
    min-height: 400px;
    border-radius: 25px;
    margin: 30px auto;
    padding: 20px 30px;
    color: black;
`

const UserImage = styled.img`
    border-radius: 50%;
    margin: 0 auto;
    height: 20%;
    width: 20%;
    min-height: 100px;
    min-width: 100px;
`

const UserLogin = styled.h3`
    margin: 10px auto;
    display: block;
`

const UserDisplaiedName = styled.p`
    font-size: 16px;
    margin: 5px auto;
    display: block;
`

export const Profile = ({user}) => {
    return (
        <Container>
            <UserImage src={user?.avatar}  height="150" width="150" />
            <UserLogin>Логин: {user?.login}</UserLogin>
            <UserDisplaiedName>Отображаемое имя: {user?.displayedName}</UserDisplaiedName>
            <UserDisplaiedName>Роль: {user?.role}</UserDisplaiedName>
        </Container>
    );
};
