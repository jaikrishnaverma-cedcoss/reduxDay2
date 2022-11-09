
import { ACTION } from "./actionTypes"
// Step 3
export const add = (data) => {
    return {
        type: ACTION.ADD,
        payload: data
    }
}