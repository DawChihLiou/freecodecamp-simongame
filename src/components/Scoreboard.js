import React from 'react'
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

export default Scorebord
