import * as types from './types'

export const setSchool = schoolName => ({
  type: types.SET_SCHOOL,
  payload: schoolName
})
