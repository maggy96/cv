import React from 'react';
import PropTypes from 'proptypes';
import './Section.scss';

const Section = ({
  headline, description, number, children,
}) => (
  <div className="container py-5 section">
    <div className="row">
      <div className="col-sm-10 offset-sm-1 offset-md-2 col-md-8">
        <h1 className="display-3 py-4">{headline}</h1>
        {children}
      </div>
    </div>
  </div>
);

Section.propTypes = {
  headline: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

Section.defaultProps = {
  children: null,
};

export default Section;
