/* eslint-env jest */
/* eslint-env enzyme */

// Reducers
import reducer from './reducers'
import * as types from './types'

describe('SchoolSelect, school-select reducer', () => {
  const initialStateTest = {
    schoolName: 0
  }
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      schoolName: 0
    })
  })

  it('should handle SET_SCHOOL', () => {
    let schoolName = 1
    expect(
      reducer(initialStateTest, {
        type: types.SET_SCHOOL,
        payload: schoolName // using es6 shorthand property names <==> { assetTag: assetTag }
      })
    ).toEqual({
      ...initialStateTest,
      schoolName: 1
    })
  })
})
