import * as types from './types'

const defaultTheme = {
  primary: '#20a8d8',
  secondary: '#c8ced3',
  success: '#4dbd74',
  info: '#63c2de',
  warning: '#ffc107',
  danger: '#f86c6b',
  light: '#f0f3f5',
  dark: '#2f353a',
  primaryactive: '#1985ac'
}

const initialSchoolState = {
  schoolName: 0,
  theme: defaultTheme
}

const schoolselectReducer = (state = initialSchoolState, action) => {
  console.log('logging action')
  console.log(action)
  switch (action.type) {
    case types.SET_SCHOOL:
      return {
        ...state,
        schoolName: action.payload.schoolName,
        theme: action.payload.theme
      }
    default:
      return state
  }
}

export default schoolselectReducer
