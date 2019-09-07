import React from 'react';
import Octicon, { getIconByName } from '@primer/octicons-react';
import PropTypes from 'proptypes';

const Repo = ({
  name, description, stars, url,
}) => (
  <li className="row">
    <div className="col-sm-4">
      <Octicon icon={getIconByName('repo')} />
      {' '}
      <a href={url}>{name}</a>
    </div>
    <div className="col-sm-6">
      {description}
    </div>
    <div className="col-sm-2">
      {stars}
      {' '}
      <Octicon icon={getIconByName('star')} />
    </div>
  </li>
);

Repo.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  stars: PropTypes.number.isRequired,
};

export default Repo;
