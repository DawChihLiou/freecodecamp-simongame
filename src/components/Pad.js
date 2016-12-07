import React, { PropTypes } from 'react'
import classNames from 'classnames'

const Pad = ({ clickable, onClick }) => {
  var padStyle = classNames({
    'col-xs-6': true,
    'pad': true,
    'clickable': clickable
  })

  return (
    <div
      className="wrap"
      onClick={ clickable ? onClick : undefined }
    >
      <div className="row">
        <div id="p-0" className={ padStyle }></div>
        <div id="p-1" className={ padStyle }></div>
      </div>
      <div className="row">
        <div id="p-2" className={ padStyle }></div>
        <div id="p-3" className={ padStyle }></div>
      </div>
    </div>
  )
}

Pad.propTypes = {
  clickable   : PropTypes.bool.isRequired,
  onClick : PropTypes.func.isRequired
}

export default Pad
