import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from './Nav';
import Home from './Home';
import Battle from './Battle';
import Popular from './Popular';
import Results from './Results';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="container">
          <Nav />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/battle" component={Battle} />
            <Route path="/battle/results" component={Results} />
            <Route path="/popular" component={Popular} />
            <Route
              render={() => (
                <img src="https://s3-ap-southeast-1.amazonaws.com/assets-production.feastbump.com/static/images/Error/404/404-1250px.gif" />
              )}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
