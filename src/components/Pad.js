import React, { PropTypes } from 'react'
import classNames from 'classnames'

const Pad = ({ clickable, p0Shine, p1Shine, p2Shine, p3Shine, onClick }) => {
  var padStyle = {
    'col-xs-6': true,
    'pad': true,
    'clickable': clickable
  }
  var p0Style = classNames(Object.assign({}, padStyle, { 'shine': p0Shine }))
  var p1Style = classNames(Object.assign({}, padStyle, { 'shine': p1Shine }))
  var p2Style = classNames(Object.assign({}, padStyle, { 'shine': p2Shine }))
  var p3Style = classNames(Object.assign({}, padStyle, { 'shine': p3Shine }))

  return (
    <div
      className="wrap"
      onClick={ clickable ? onClick : undefined }
    >
      <div className="row">
        <div id="p-0" className={ p0Style }></div>
        <div id="p-1" className={ p1Style }></div>
      </div>
      <div className="row">
        <div id="p-2" className={ p2Style }></div>
        <div id="p-3" className={ p3Style }></div>
      </div>
    </div>
  )
}

Pad.propTypes = {
  clickable : PropTypes.bool.isRequired,
  p0Shine   : PropTypes.bool.isRequired,
  p1Shine   : PropTypes.bool.isRequired,
  p2Shine   : PropTypes.bool.isRequired,
  p3Shine   : PropTypes.bool.isRequired,
  onClick   : PropTypes.func.isRequired
}

export default Pad
