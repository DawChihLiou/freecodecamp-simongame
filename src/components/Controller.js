import React from 'react'

const Controller = () => (
  <div className="wrap">
    <div className="row">
      <div className="col-xs-4 control clickable ">
        <span className="glyphicon glyphicon-play" aria-hidden="true"></span></div>
      <div className="col-xs-4 control clickable">
        <span className="glyphicon glyphicon-off" aria-hidden="true"></span>
      </div>
      <div className="col-xs-4 control clickable ">
        <span className="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
      </div>
    </div>
  </div>
)

export default Controller
