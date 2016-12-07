import React, { PropTypes } from 'react'
import className from 'classnames'

const Controller = ({ onoff=false, start=true, strict=false, onClick = (e) => {console.log(e.target.id)} }) => {
  var baseStyle   = { 'col-xs-4': true, 'control': true, 'clickable': true }
  var startStyle  = className(Object.assign({}, baseStyle, { 'active': start }))
  var switchStyle = className(Object.assign({}, baseStyle, { 'active': onoff }))
  var strictStyle = className(Object.assign({}, baseStyle, { 'active': strict }))

  return (
    <div className="wrap" onClick={ onClick }>
      <div className="row">
        <div id="start" className={ startStyle }>
          <span id="start" className="glyphicon glyphicon-play" aria-hidden="true"></span></div>
        <div id="switch" className={ switchStyle }>
          <span id="switch" className="glyphicon glyphicon-off" aria-hidden="true"></span>
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
