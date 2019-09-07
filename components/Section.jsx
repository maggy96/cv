import React from 'react';
import PropTypes from 'proptypes';

const Section = ({
  headline, description, number, children,
}) => (
  <div className="container">
    <div className="row">
      <div className="col-2">
        <h1 className="display-2 d-none d-md-block">
          <u>{number}</u>
        </h1>
      </div>
      <div className="col-8">
        <h1 className="display-4 pt-4">{headline}</h1>
        <p className="py-3">{description}</p>
        {children}
      </div>
    </div>
  </div>
);

Section.propTypes = {
  headline: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

Section.defaultProps = {
  children: null,
};

export default Section;
