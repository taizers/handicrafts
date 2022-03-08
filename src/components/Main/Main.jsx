import styled from 'styled-components';
import { Route, Switch, useRouteMatch, Redirect } from 'react-router-dom';
import { 
  pathToHome,
  pathToMap,
  pathToPosts,
  pathToPost,
  pathToProfile,
  pathToMainPage,
  pathToPostsTypes,
  pathToModeration,
} from '../../constants';
import Home from '../../containers/Home/index';
import Header from '../Header/index';
import PostsForTypes from '../../containers/PostsForTypes/index';
import HandicraftsList from '../../containers/HandicraftsList/index';
import Handicraft from '../../containers/Handicraft/index';
import MapContainer from '../../containers/MapContainer/index';
import Profile from '../Profile/index';
import Moderation from '../Moderation/index';
import AuthorizedRoute from "../../Routes/AuthorizedRoute/index";

const Container = styled.div`
  font-size: 16px;
  color: var(--main-text);
  background-color: #cccccc;
  height: 100vh;
  overflow-y: auto;
`

export const Main = () => {
  let { path, url } = useRouteMatch();

  return <Container>
        <Header/>
        <Switch>
          <Route exact path={pathToMap}><MapContainer /></Route>
          <Route exact path={pathToPostsTypes}><PostsForTypes /></Route>
          <Route exact path={pathToPosts}><HandicraftsList /></Route>
          <Route exact path={pathToPost}><Handicraft /></Route>
          <AuthorizedRoute exact path={pathToModeration}><Moderation /></AuthorizedRoute>
          <AuthorizedRoute exact path={pathToProfile}><Profile /></AuthorizedRoute>
          <Route exact path={pathToHome}><Home /></Route>
          <Redirect exact from='/' to={pathToHome}/>
        </Switch>
    </Container>
};
