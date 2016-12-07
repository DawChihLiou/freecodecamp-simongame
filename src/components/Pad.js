import React, { PropTypes } from 'react'
import classNames from 'classnames'

const Pad = ({ clickable=true, onMouseDown=(e)=>{console.log('down ', e.target.id)}, onMouseUp=(e)=>{console.log('up ',e.target.id)} }) => {
  var padStyle = classNames({
    'col-xs-6': true,
    'pad': true,
    'clickable': clickable
  })

  return (
    <div
      className="wrap"
      onMouseDown={ clickable ? onMouseDown : undefined }
      onMouseUp={ clickable ? onMouseUp : undefined }
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

Pad.protoTypes = {
  clickable   : PropTypes.bool.isRequired,
  onMouseDown : PropTypes.func.isRequired,
  onMouseUp   : PropTypes.func.isRequired
}

export default Pad
