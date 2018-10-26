// import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction'
import * as reducers from './ducks'

const loggerMiddleware = createLogger()
const composeEnhancers = composeWithDevTools({})
export default function configureStore () {
  const rootReducer = combineReducers(reducers)

  return createStore(
    rootReducer,
    /* preloadedState, */
    composeEnhancers(
      applyMiddleware(
        // thunkMiddleware, // lets us dispatch() functions
        loggerMiddleware // logs actions
      )
    )
  )
}
