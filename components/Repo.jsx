import React from 'react';
import Octicon, { getIconByName } from '@primer/octicons-react';
import PropTypes from 'proptypes';

const Repo = ({
  name, description, stars, url,
}) => (
  <li className="list-group-item d-flex justify-content-between align-items-center">
    <span>
      <Octicon icon={getIconByName('repo')} />
      {' '}
      <a href={url}>{name}</a>
      {' '}
      {description}
    </span>
    <span>
      {stars}
      {' '}
      <Octicon icon={getIconByName('star')} />
    </span>
  </li>
);

Repo.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  stars: PropTypes.number.isRequired,
};

export default Repo;
