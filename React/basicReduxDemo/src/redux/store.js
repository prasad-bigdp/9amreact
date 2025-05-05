import { createStore } from "redux";
import { counterReducer } from "./reducer";
import { configureStore } from "@reduxjs/toolkit"
import counterReducer2 from "./reducer"

export const rtstore = configureStore({
	reducer: { counter: counterReducer2 },
})
const myStore = createStore(counterReducer)
export default myStore