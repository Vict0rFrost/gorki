import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import Signin from './Components/Signin/Signin';
import Signup from './Components/Signup/Signup';
import Profile from './Components/Profile/Profile';
import Main from './Components/Main/Main';
import YaMap from './Components/Map/Map';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userInSession } from './redux/actionCreators/authCreator';

function App() {
  const dispatch = useDispatch();
  const userSession = useSelector((store) => store.userSession.userSession);

  useEffect(() => {
    dispatch(userInSession());
  }, [dispatch]);

  return (
    <Router>
      <Header />
      <div className="main">
        <Switch>

          <Route exact path="/signin">
            <Signin />
          </Route>

          <Route exact path="/signup">
            <Signup />
          </Route>
          
          {userSession && userSession ? (
            <Route exact path="/profile/:userId">
              <Profile />
            </Route>
          ) : null}

          <Route exact path="/map">
            <YaMap />
          </Route>

          <Route exact path="/"> 
            <Main />
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;
