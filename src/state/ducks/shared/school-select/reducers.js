import * as types from './types'

const initialSchoolState = {
  schoolName: 0
}

const schoolselectReducer = (state = initialSchoolState, action) => {
  console.log('logging action')
  console.log(action)
  switch (action.type) {
    case types.SET_SCHOOL:
      return {
        ...state,
        schoolName: action.payload
      }
    default:
      return state
  }
}

export default schoolselectReducer
