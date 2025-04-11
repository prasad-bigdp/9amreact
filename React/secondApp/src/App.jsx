function App ()
{  
	const name = "Jack";
	const styles = {
		h1: {
			backgroundColor: "black",
			color: "white",
		},
		button: {
			borderRadius: "20px",
			padding: "10px",
			backgroundColor: "black",
			color: "white",
		},
		specialButton: {
			 fontSize:'48px'
		}
	}
	return (
		<div className="main">
			<img
				src='https://static.wikia.nocookie.net/powerrangers/images/5/59/DekaRed_Profile.png'
				alt='Red Ranger'
			/>
			<h1 style={styles.h1}>Hello all, I'm {name}</h1>
			<button style={{ ...styles.button, ...styles.specialButton } }>click me</button>
		</div>
	)
}
export default App