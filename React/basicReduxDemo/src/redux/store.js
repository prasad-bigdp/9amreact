import { createStore } from "redux";
import { counterReducer } from "./reducer";
const myStore = createStore(counterReducer)
export default myStore