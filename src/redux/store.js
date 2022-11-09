import { createStore } from 'redux'

import cakeReducer from './users/userReducer'

const store = createStore(cakeReducer)

export default store
