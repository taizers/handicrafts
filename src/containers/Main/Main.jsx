import styled from 'styled-components';
import { Route, Routes } from 'react-router-dom';
import { pathToSignIn } from '../../constants';
import Login from '../../components/Login/index';
import Header from '../../components/Header/index'
const Container = styled.div`
  font-size: 16px;
  color: white;
  display: flex;
  position: relative;
  right: 0;
  width: 100%;
  background-color: #3415B0;
  padding: 20px 0;
`

export const Main = () => (
    <Container>
        <Header/>
        <Routes>
          <Route path={pathToSignIn} element={<Login />}/>
        </Routes>
    </Container>
);