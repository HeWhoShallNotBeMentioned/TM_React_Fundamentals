const React = require('react');

class Popular extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selectedLanguage: 'All' };
    //makes sure that 'this' in update language is tied to the component
    //'this' down in return is a different function, not the componet
    this.updateLanguage = this.updateLanguage.bind(this);
  }

  updateLanguage(lang) {
    this.setState(function() {
      return {
        selectedLanguage: lang,
      };
    });
  }
  render() {
    const languages = ['All', 'Javascript', 'Ruby', 'Java', 'CSS', 'Python'];
    return (
      <ul className="languages">
        {languages.map(function(lang) {
          return (
            <li
              style={
                lang === this.state.selectedLanguage ? { color: 'red' } : null
              }
              onClick={this.updateLanguage.bind(null, lang)}
              key={lang}
            >
              {lang}
            </li>
          );
        }, this)}
      </ul>
    );
  }
}

module.exports = Popular;
