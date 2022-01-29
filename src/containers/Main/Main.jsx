import styled from 'styled-components';
import { Route, Switch, useRouteMatch, Redirect } from 'react-router-dom';
import { 
  pathToHome,
  pathToMap,
  pathToHandicrafts,
  pathToHandicraftItem,
  pathToProfile,
  pathToMainPage,
  pathToModeration,
} from '../../constants';
import Home from '../../components/Home/index';
import Header from '../../components/Header/index'
import HandicraftsList from '../HandicraftsList/index';
import Handicraft from '../../components/Handicraft/index';
import Map from '../../components/Map/index';
import Profile from '../../components/Profile/index';
import Moderation from '../../components/Moderation/index';
import AuthorizedRoute from '../../Routes/AuthorizedRoute/index';

const Container = styled.div`
  font-size: 16px;
  color: white;
  background-color: #3415B0;
`

export const Main = () => {
  let { path, url } = useRouteMatch();

  return <Container>
        <Header/>
        <Switch>
          <Redirect exact from={pathToMainPage} to={path + pathToHome} />
          <Route path={path + pathToHome}><Home /></Route>
          <Route path={path + pathToMap}><Map /></Route>
          <Route exact path={path + pathToHandicrafts}><HandicraftsList /></Route>
          <Route exact path={path + pathToHandicraftItem}><Handicraft /></Route>
          <Route exact path={path + pathToModeration}><Moderation /></Route>
          <AuthorizedRoute patch={path + pathToProfile}  component={Profile} exact />
        </Switch>
    </Container>
};