import React from 'react';
import PropTypes from 'proptypes';

const Skill = ({ children }) => (
  <span className="badge badge-pill badge-light m-1 p-2">{children}</span>
);

Skill.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Skill;
