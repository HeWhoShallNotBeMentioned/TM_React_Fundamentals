const React = require('react');
const Popular = require('./Popular');
const ReactRouter = require('react-router-dom');
const Router = ReactRouter.BrowserRouter;
const Route = ReactRouter.Route;
const Switch = ReactRouter.Switch;
const Link = require('react-router-dom').Link;
const Nav = require('./Nav');
const Home = require('./Home');
const Battle = require('./Battle');

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="container">
          <Nav />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/battle" component={Battle} />
            <Route path="/popular" component={Popular} />
            <Route
              render={function() {
                return (
                  <img src="https://s3-ap-southeast-1.amazonaws.com/assets-production.feastbump.com/static/images/Error/404/404-1250px.gif" />
                );
              }}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}

module.exports = App;
