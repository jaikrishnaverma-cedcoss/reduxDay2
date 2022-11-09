import { ACTION } from "./actionTypes"
const initialState = {
    data: []
}

const cakeReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTION.ADD: {
            return {
                ...state, data: [...state.data, { ...action.payload }]
            }
        }
        case ACTION.DELETE: {
            state.data.splice(action.payload, 1)
            return {
                ...state, data: [...state.data]
            }
        }
        case ACTION.EDIT: {
            state.data[action.payload.index] = { ...action.payload.newdata }
            return {
                ...state, data: [...state.data]
            }
        }
        default: return state
    }
}
export default cakeReducer