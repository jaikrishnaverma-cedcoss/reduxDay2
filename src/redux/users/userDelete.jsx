
import { ACTION } from "./actionTypes"
// Step 3
export const deletor = (data) => {
    return {
        type: ACTION.DELETE,
        payload: data
    }
}