const React = require('react');
const ReactDOM = require('react-dom');
require('./index.css'); //this format works with style-loader in Babel
const App = require('./components/App');

ReactDOM.render(<App />, document.getElementById('app'));
