import styled from 'styled-components';
import { Route, Switch, useRouteMatch, Redirect } from 'react-router-dom';
import { 
  pathToHome,
  pathToMap,
  pathToPosts,
  pathToPost,
  pathToProfile,
  pathToMainPage,
  pathToModeration,
} from '../../constants';
import Home from '../../components/Home/index';
import Header from '../../components/Header/index'
import HandicraftsList from '../HandicraftsList/index';
import Handicraft from '../../components/Handicraft/index';
import MapContainer from '../../components/MapContainer/index';
import Profile from '../../components/Profile/index';
import Moderation from '../../components/Moderation/index';
import AuthorizedRoute from '../../Routes/AuthorizedRoute/index';

const Container = styled.div`
  font-size: 16px;
  color: var(--main-text);
  background-color: var(--bg-gray);
  height: 100vh;
  overflow-y: auto;
`

export const Main = () => {
  let { path, url } = useRouteMatch();

  return <Container>
        <Header/>
        <Switch>
          <Redirect exact from={pathToMainPage} to={path + pathToHome} />
          <Route path={path + pathToHome}><Home /></Route>
          <Route path={path + pathToMap}><MapContainer /></Route>
          <Route exact path={pathToPosts}><HandicraftsList /></Route>
          <Route exact path={pathToPost}><Handicraft /></Route>
          <Route exact path={path + pathToModeration}><Moderation /></Route>
          <AuthorizedRoute patch={path + pathToProfile}  component={Profile} exact />
        </Switch>
    </Container>
};