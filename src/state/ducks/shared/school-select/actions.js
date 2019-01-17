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

const school1Theme = {
  primary: '#5e2572',
  secondary: '#d9dbdc',
  success: '#00c689',
  info: '#4d13d1',
  warning: '#ffc100',
  danger: '#fc7242',
  light: '#f8f9fa',
  dark: '#4f4a60',
  primaryactive: '#461c55'
}

const school2Theme = {
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

const school3Theme = {
  primary: '#ff685c',
  secondary: '#c8ced3',
  success: '#5ed84f',
  info: '#28afd0',
  warning: '#fdb901',
  danger: '#ec2d38',
  light: '#f0f3f5',
  dark: '#0f0506',
  primaryactive: '#ec5447'
}

export const setSchool = schoolName => {
  let theme

  switch (schoolName) {
    case 1:
      theme = school1Theme
      break
    case 2:
      theme = school2Theme
      break
    case 3:
      theme = school3Theme
      break
    default:
      theme = defaultTheme
  }

  return {
    type: types.SET_SCHOOL,
    payload: { schoolName: schoolName, theme: theme }
  }
}
