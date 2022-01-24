import styled from 'styled-components';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import { 
  pathToHome,
  pathToMap,
  pathToHandicrafts,
  pathToMainPage,
} from '../../constants';
import Home from '../../components/Home/index';
import Header from '../../components/Header/index'
import Handicrafts from '../../components/Handicrafts';

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

export const Main = () => {
  let { path, url } = useRouteMatch();
  return <Container>
        <Header/>
        <Switch>
          <Route path={path + pathToHome}><Home /></Route>
          <Route exact path={path + pathToMap}><Home /></Route>
          <Route exact path={path + pathToHandicrafts}><Handicrafts /></Route>
        </Switch>
    </Container>
};