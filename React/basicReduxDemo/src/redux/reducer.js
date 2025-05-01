const initialState = {
    count:0
}
const counterReducer = (state=initialState,action) =>
{
    switch (action.type)
    {
        case "Incr": return {count:state.count+action.payload}
        case "Decr":return { count: state.count - action.payload }
        case "Reset":return { count: action.payload }
        default: return state
    }
}
export {counterReducer}