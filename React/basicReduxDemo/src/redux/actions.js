const increment = () =>
{
    return {
        type: "Incr",
        payload:5
    }
}
const decrement = () =>
{
    return {
			type: "Decr",
			payload: 5
		}
}
const Reset = () => {
	return {
		type: "Reset",
		payload: 0
	}
}
export {increment,decrement,Reset}