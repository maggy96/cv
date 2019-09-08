import React from 'react';
import PropTypes from 'proptypes';

const Event = ({
  title, institution, description, date,
}) => (
  <div className="row pb-5">
    <div className="col-md-8">
      <p>
        {title}
        {' '}
        @
        {' '}
        <span className="font-weight-bold">{institution}</span>
      </p>
      <p className="float-left text-muted">{description}</p>
    </div>
    <div className="col-md-4">
      <p className="float-right">{date}</p>
    </div>
    <br />
  </div>
);

Event.propTypes = {
  title: PropTypes.string.isRequired,
  institution: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

export default Event;
