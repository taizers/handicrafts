import styled from 'styled-components';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import { 
  pathToHome,
  pathToMap,
  pathToHandicrafts,
  pathToHandicraftItem,
} from '../../constants';
import Home from '../../components/Home/index';
import Header from '../../components/Header/index'
import HandicraftsList from '../HandicraftsList/index';
import Handicraft from '../../components/Handicraft/index';

const Container = styled.div`
  font-size: 16px;
  color: white;
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
          <Route path={path + pathToMap}><Home /></Route>
          <Route exact path={path + pathToHandicrafts}><HandicraftsList /></Route>
          <Route path={path + pathToHandicraftItem}><Handicraft /></Route>
        </Switch>
    </Container>
};