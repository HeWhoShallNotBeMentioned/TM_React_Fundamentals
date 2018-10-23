const React = require('react');
const PropTypes = require('prop-types');
const api = require('../utils/api');
const RepoGrid = require('./RepoGrid');

function SelectLanguage(props) {
  const languages = ['All', 'Javascript', 'Ruby', 'Java', 'CSS', 'Python'];
  return (
    <ul className="languages">
      {languages.map(function(lang) {
        return (
          <li
            style={lang === props.selectedLanguage ? { color: 'red' } : null}
            onClick={props.onSelect.bind(null, lang)}
            key={lang}
          >
            {lang}
          </li>
        );
      })}
    </ul>
  );
}

SelectLanguage.propTypes = {
  selectedLanguage: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired,
};

class Popular extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedLanguage: 'All',
      repos: null,
    };
    //makes sure that 'this' in update language is tied to the component
    //'this' down in return is a different function, not the componet
    this.updateLanguage = this.updateLanguage.bind(this);
  }

  componentDidMount() {
    this.updateLanguage(this.state.selectedLanguage);
  }

  updateLanguage(lang) {
    this.setState(function() {
      return {
        selectedLanguage: lang,
      };
    });

    api.fetchPopularRepos(this.state.selectedLanguage).then(
      function(repos) {
        this.setState(function() {
          return {
            repos: repos,
          };
        });
      }.bind(this)
    );
  }

  render() {
    return (
      <div>
        <SelectLanguage
          selectedLanguage={this.state.selectedLanguage}
          onSelect={this.updateLanguage}
        />
        {!this.state.repos ? (
          <img src="https://i.gifer.com/1amw.gif" />
        ) : (
          <RepoGrid repos={this.state.repos} />
        )}
      </div>
    );
  }
}

module.exports = Popular;
