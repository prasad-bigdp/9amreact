const initialState2 = {
    count:0
}
const counterReducer = (state=initialState2,action) =>
{
    switch (action.type)
    {
        case "Incr": return {count:state.count+action.payload}
        case "Decr":return { count: state.count - action.payload }
        case "Reset":return { count: action.payload }
        default: return state
    }
}
import { createSlice } from "@reduxjs/toolkit"

const initialState = {
	value: 0,
}

export const counterSlice = createSlice({
	name: "counter",
	initialState,
	reducers: {
		increment: (state) => {
			// Redux Toolkit allows us to write "mutating" logic in reducers. It
			// doesn't actually mutate the state because it uses the Immer library,
			// which detects changes to a "draft state" and produces a brand new
			// immutable state based off those changes
			state.value += 1
		},
		decrement: (state) => {
			state.value -= 1
		},
		incrementByAmount: (state, action) => {
			state.value += action.payload
        },
	},
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions
export { counterReducer }
export default counterSlice.reducer

