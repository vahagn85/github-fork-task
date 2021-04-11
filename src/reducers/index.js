import {combineReducers} from 'redux'
import forks from './forks'
import repo from './repo'


export default combineReducers({
   forks,
    repo
})
