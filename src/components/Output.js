import React from 'react';
import PropTypes from 'prop-types';

function Output(props) {
  const { calculation } = props;
  const { total, next, operation } = calculation;
  return (
    <div className="output">
      {`${total || ''} ${operation || ''} ${next || ''}`}
    </div>
  );
}

Output.propTypes = { calculation: PropTypes.func.isRequired };
export default Output;
