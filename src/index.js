import React from 'react'
import ReactDOM from 'react-dom'
import { Provider as ReduxProvider } from 'react-redux'

import './index.css'
import App from './App'
import configureStore from './state/store'
// import registerServiceWorker from './registerServiceWorker'

// for debugging
if (typeof window !== 'undefined') {
  window.React = React
}
const reduxStore = configureStore()

const RootHtml = () => (
  <ReduxProvider store={reduxStore}>
    <App />
  </ReduxProvider>
)

ReactDOM.render(<RootHtml />, document.getElementById('root'))
// disable Serviceworker
// registerServiceWorker();
// Reference
// https://medium.freecodecamp.org/scaling-your-redux-app-with-ducks-6115955638be
