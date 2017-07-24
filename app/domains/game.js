import { flick } from '../actions/game'
import {
  createRandomMatrix,
  verifyCompletion,
  computeNewMatrix
} from '../helpers'

const Game = {
  getInitialState() {
    return {
      hasWon: false,
      lights: createRandomMatrix(5, 'EASY'),
      mode: 'EASY',
      moves: 0,
      showInfo: false,
      showSettings: false
    }
  },

  compute(state, payload) {
    const { x, y } = payload
    const computedMatrix = computeNewMatrix(state.lights, { y, x })

    // computedMatrix.map(x => console.info('row:', x.toString()))
    console.info('flick :: x:', x, 'y:', y)

    return {
      ...state,
      hasWon: verifyCompletion(computedMatrix),
      lights: computedMatrix,
      moves: state.moves + 1
    }
  },

  register() {
    return {
      [flick]: this.compute
    }
  }
}

export default Game
