import React from 'react'
import classNames from 'classnames'

const Scorebord = ({ isGoingNext=false, score=3 }) => {
  var scoreStyle = classNames({
    'animated'    : true,
    'fadeInDown'  : !isGoingNext,
    'fadeOutDown' : isGoingNext,
    'margin-no'   : true
  })

  return (
    <div className="score-board">
      <h1 className={ scoreStyle }>{ score }</h1>
    </div>
  )
}

export default Scorebord
