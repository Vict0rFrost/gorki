import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import Signin from './Components/Signin/Signin';
import Signup from './Components/Signup/Signup';
import Profile from './Components/Profile/Profile';
import Main from './Components/Main/Main';

function App() {
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
          
          <Route exact path="/profile"> 
            <Profile />
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
