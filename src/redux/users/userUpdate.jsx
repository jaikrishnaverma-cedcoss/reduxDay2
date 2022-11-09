
import { ACTION } from "./actionTypes"
// Step 3
export const updatUser = (data) => {
    return {
        type: ACTION.EDIT,
        payload: data
    }
}