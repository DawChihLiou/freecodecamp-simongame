import React, { PropTypes } from 'react'
import classNames from 'classnames'

const Scorebord = ({ isGoingNext=false, display='7' }) => {
  var scoreStyle = classNames({
    'animated'    : true,
    'fadeInDown'  : !isGoingNext,
    'fadeOutDown' : isGoingNext,
    'margin-no'   : true
  })

  return (
    <div className="score-board">
      <h1 className={ scoreStyle }>{ display }</h1>
    </div>
  )
}

Scorebord.propTypes = {
  isGoingNext : PropTypes.bool.isRequired,
  display     : PropTypes.string.isRequired
}

export default Scorebord
