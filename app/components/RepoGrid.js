const React = require('react');
const PropTypes = require('prop-types');

function RepoGrid({ repos }) {
  return (
    <ul className="popular-list">
      {repos.map(({ name, stargazers_count, owner, html_url }, index) => (
        <li key={name} className="popular-item">
          <div className="popular-rank">#{index + 1}</div>
          <ul className="space-list-items">
            <li>
              <img
                className="avatar"
                src={owner.avatar_url}
                alt={'Avatar for ' + owner.login}
              />
            </li>
            <li>
              <a href={html_url}>{name}</a>
            </li>
            <li>@{owner.login}</li>
            <li>{stargazers_count} stars</li>
          </ul>
        </li>
      ))}
    </ul>
  );
}

RepoGrid.propTypes = {
  repos: PropTypes.array.isRequired,
};

module.exports = RepoGrid;
