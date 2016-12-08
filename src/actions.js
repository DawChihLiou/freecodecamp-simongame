export const SET_PAD_CLICKABILITY = 'SET_PAD_CLICKABILITY'
export const SET_ONOFF            = 'SET_ONOFF'
export const SET_START            = 'SET_START'
export const SET_STRICT           = 'SET_STRICT'
export const SET_IS_GOING_NEXT    = 'SET_IS_GOING_NEXT'
export const SET_DISPLAY          = 'SET_DISPLAY'
export const PLAY_GAME_SEQUENCE   = 'PLAY_GAME_SEQUENCE'
export const PUSH_GAME_SEQUENCE   = 'PUSH_GAME_SEQUENCE'
export const RESET_GAME_SEQUENCE  = 'RESET_GAME_SEQUENCE'
export const PUSH_PLAYER_SEQUENCE = 'PUSH_PLAYER_SEQUENCE'
export const RESET_PLAYER_SEQUENCE= 'RESET_PLAYER_SEQUENCE'
export const SET_P0_SHINE         = 'SET_P0_SHINE'
export const SET_P1_SHINE         = 'SET_P1_SHINE'
export const SET_P2_SHINE         = 'SET_P2_SHINE'
export const SET_P3_SHINE         = 'SET_P3_SHINE'
export const RESET                = 'RESET'

export const setPadClickability = (clickable) => ({
  type: SET_PAD_CLICKABILITY,
  clickable
})

export const setOnoff = (onoff) => ({
  type: SET_ONOFF,
  onoff
})

export const setStart = (start) => ({
  type: SET_START,
  start
})

export const setStrict = (strict) => ({
  type: SET_STRICT,
  strict
})

export const setIsGoingNext = (isGoingNext) => ({
  type: SET_IS_GOING_NEXT,
  isGoingNext
})

export const setDisplay = (display) => ({
  type: SET_DISPLAY,
  display
})

export const playSequence = (isPlayingSequence) => ({
  type: PLAY_GAME_SEQUENCE,
  isPlayingSequence
})

export const pushGameSequence = (number) => ({
  type: PUSH_GAME_SEQUENCE,
  number
})

export const pushPlayerSequence = (number) => ({
  type: PUSH_PLAYER_SEQUENCE,
  number
})

export const setP0Shine = (shine) => ({
  type: SET_P0_SHINE,
  shine
})

export const setP1Shine = (shine) => ({
  type: SET_P1_SHINE,
  shine
})

export const setP2Shine = (shine) => ({
  type: SET_P2_SHINE,
  shine
})

export const setP3Shine = (shine) => ({
  type: SET_P3_SHINE,
  shine
})

export const resetPlayerSequence = () => ({
  type: RESET_PLAYER_SEQUENCE
})

export const resetGameSequence = () => ({
  type: RESET_GAME_SEQUENCE
})

export const reset = () => ({
  type: RESET
})
