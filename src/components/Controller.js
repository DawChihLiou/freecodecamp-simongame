import React, { PropTypes } from 'react'
import className from 'classnames'

const Controller = ({ onoff, start, strict, onClick }) => {
  var baseStyle   = { 'col-xs-4': true, 'control': true, 'clickable': true }
  var startStyle  = className(Object.assign({}, baseStyle, { 'active': start && onoff, 'clickable': onoff }))
  var switchStyle = className(Object.assign({}, baseStyle, { 'active': onoff }))
  var strictStyle = className(Object.assign({}, baseStyle, { 'active': strict && onoff, 'clickable': onoff }))

  return (
    <div className="wrap" onClick={ onClick }>
      <div className="row">
        <div id="start" className={ startStyle }>
          <span id="start" className="glyphicon glyphicon-play" aria-hidden="true"></span></div>
        <div id="onoff" className={ switchStyle }>
          <span id="onoff" className="glyphicon glyphicon-off" aria-hidden="true"></span>
        </div>
        <div id="strict" className={ strictStyle }>
          <span id="strict" className="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
        </div>
      </div>
    </div>
  )
}

Controller.propTypes = {
  onoff   : PropTypes.bool.isRequired,
  start   : PropTypes.bool.isRequired,
  strict  : PropTypes.bool.isRequired,
  onClick : PropTypes.func.isRequired
}

export default Controller
