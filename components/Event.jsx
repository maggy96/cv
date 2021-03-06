import React from 'react';
import PropTypes from 'proptypes';

const Event = ({
  date,
  description,
  institution,
  location,
  title,
  last,
}) => (
  <div className={`row ${last ? '' : 'pb-5'}`}>
    <div className="col-md-8">
      <p className="mb-0 --blue">
        {title}
        {' '}
        @
        {' '}
        <span className="font-weight-bold text-highlight">{institution}</span>
      </p>
      <p className="right text-muted">{location}</p>
      <p className="float-left text-muted">{description}</p>
    </div>
    <div className="col-md-4">
      <span className="float-right">
        <p>{date}</p>
      </span>
    </div>
    <br />
  </div>
);

Event.propTypes = {
  title: PropTypes.string.isRequired,
  institution: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  last: PropTypes.bool,
};

Event.defaultProps = {
  last: false,
};

export default Event;
