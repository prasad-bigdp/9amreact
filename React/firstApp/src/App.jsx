import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
		<>
			<h1>Hello Everyone, 👋🏻 (windows + .)</h1>
			<div className='main'>
				<img
					src='https://ih1.redbubble.net/image.3873294155.0292/raf,750x1000,075,t,FFFFFF:97ab1c12de.jpg'
          alt='shinchan'
          height='400'
        />
        <p>This is my first Project in react using vite</p>
			</div>
		</>
	)
}

export default App
