const React = require('react');
const ReactDOM = require('react-dom');
require('./index.css'); //this format works with style-loader in Babel

class App extends React.Component {
  render() {
    return <div>Hello Fuckface</div>;
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
