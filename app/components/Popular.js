const React = require('react');
const PropTypes = require('prop-types');
const api = require('../utils/api');
const RepoGrid = require('./RepoGrid');

function SelectLanguage({ selectedLanguage, onSelect }) {
  const languages = ['All', 'Javascript', 'Ruby', 'Java', 'CSS', 'Python'];
  return (
    <ul className="languages">
      {languages.map(lang => {
        return (
          <li
            style={lang === selectedLanguage ? { color: 'red' } : null}
            onClick={() => onSelect(lang)}
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
    this.setState(() => ({
      selectedLanguage: lang,
    }));

    api.fetchPopularRepos(this.state.selectedLanguage).then(repos => {
      this.setState(() => ({
        repos: repos,
      }));
    });
  }

  render() {
    const { selectedLanguage, repos } = this.state;

    return (
      <div>
        <SelectLanguage
          selectedLanguage={selectedLanguage}
          onSelect={this.updateLanguage}
        />
        {!repos ? (
          <img src="https://i.gifer.com/1amw.gif" />
        ) : (
          <RepoGrid repos={repos} />
        )}
      </div>
    );
  }
}

module.exports = Popular;
