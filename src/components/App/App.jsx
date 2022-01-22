import Main from '../../containers/Main';
import Login from '../Login/index';
import { pathToMainPage, pathToSignIn } from '../../constants';
import { Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <Routes>
      <Route path={pathToSignIn} element={<Login />}/>
      <Route path={pathToMainPage} element={<Main />}/>
    </Routes>
  );
}

export default App;
