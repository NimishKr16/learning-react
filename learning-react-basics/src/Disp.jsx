import React from 'react'
import PropTypes from 'prop-types';

const Disp = (props) => {
  return (
    <div>
      <h2>{props.text ?? 'no text given'}</h2>
    </div>
  )
}
Disp.defaultProps = {
  text:'Hello'
}
export default Disp
