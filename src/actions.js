export const SET_PAD_CLICKABILITY = 'SET_PAD_CLICKABILITY'
export const SET_ONOFF            = 'SET_ONOFF'
export const SET_START            = 'SET_START'
export const SET_STRICT           = 'SET_STRICT'
export const SET_IS_GOING_NEXT    = 'SET_IS_GOING_NEXT'
export const SET_DISPLAY          = 'SET_DISPLAY'
export const PLAY_COMBO           = 'PLAY_COMBO'
export const PUSH_COMBO           = 'PUSH_COMBO'
export const PUSH_PLAYER_COMBO    = 'PUSH_PLAYER_COMBO'

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

export const playCombo = (isPlayingCombo) => ({
  type: PLAY_COMBO,
  isPlayingCombo
})

export const pushCombo = (number) => ({
  type: PUSH_COMBO,
  number
})

export const pushPlayerCombo (number) => ({
  type: PUSH_PLAYER_COMBO,
  number
})
