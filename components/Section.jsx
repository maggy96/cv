import React from 'react';
import PropTypes from 'proptypes';
import './Section.scss';

const Section = ({
  headline, description, number, children,
}) => (
  <div className="container py-5 section">
    <div className="row">
      <div className="col-sm-1 col-md-2">
        <h1 className="display-2 d-none d-lg-block">
          {number}
        </h1>
      </div>
      <div className="col-sm-10 col-md-8">
        <h1 className="display-4 pt-4">{headline}</h1>
        <p className="py-3">{description}</p>
        {children}
      </div>
    </div>
  </div>
);

Section.propTypes = {
  headline: PropTypes.string.isRequired,
  description: PropTypes.string,
  number: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

Section.defaultProps = {
  children: null,
  description: null,
};

export default Section;
