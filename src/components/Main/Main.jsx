import styled from 'styled-components';
import { Route, Switch, Redirect, generatePath, useRouteMatch, useLocation } from 'react-router-dom';
import { 
  pathToHome,
  pathToMap,
  pathToPosts,
  pathToPost,
  pathToProfile,
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
import Weather from './Weather/index';
import LastPosts from './LastPosts/index';
import LanguageSwitсher from './LanguageSwitсher/index';
import { useEffect } from "react";
import { includes } from 'lodash';


const Container = styled.div`
  font-size: 16px;
  color: var(--main-text);
  background-color: #e1edf4;
  height: 100vh;
  overflow-y: auto;
`

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;

  @media (max-width: 768px) {
    flex-direction: column;
    margin: 0 15px;
  }
`
const WrapperForWidgets = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 20px;
`

const WrapperForLeftWidgets = styled(WrapperForWidgets)`
  
`
const WrapperForRightWidgets = styled(WrapperForWidgets)`
  
`

export const Main = ({ getPosts, getUserLocation, userLocation, latestsPosts, featureActions }) => {
  let location = useLocation();

  useEffect(() => {
    getLocation();
    getPosts();
  }, []);

  const updatePosition = (position) => {
    if (position) {
      getUserLocation([position.coords.latitude, position.coords.longitude]);
    }
  }

  const getLocation = ()  => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(updatePosition);
    } else
      getUserLocation([ 53.6884, 23.8258 ]);
  };

  return <Container>
        <Header/>
        <Wrapper>
          {!includes(location.pathname, 'moderation') && !includes(location.pathname, 'profile') && <WrapperForLeftWidgets>
            <LanguageSwitсher/>
            <LastPosts key="latestPosts" posts={latestsPosts} path={pathToPostsTypes} title="recently_added"/>
          </WrapperForLeftWidgets>}
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
          {!includes(location.pathname, 'moderation') && !includes(location.pathname, 'profile') && <WrapperForRightWidgets>
            {userLocation && <Weather location={userLocation}/>}
            <LastPosts key="featureEvents" posts={featureActions} path={generatePath(pathToPosts, {type: 'feature'})}
                       title="future_events"/>
          </WrapperForRightWidgets>}
        </Wrapper>
    </Container>
};
