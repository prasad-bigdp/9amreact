import React from 'react'
import Parent from './components/Parent'
import './App.css'
import { createContext } from 'react'
import { useState } from 'react'
export const themeContext = createContext();
function App ()
{
  const [theme,setTheme]=useState('light')
  return (
		<themeContext.Provider value={theme}>
			<div
				style={{
					height: "400px",
					width: "400px",
					border: "2px solid red",
					padding: "50px",
				}}>
				<Parent />
				<button onClick={(e) => setTheme(e.target.textContent)}>
					{theme == "light" ? "dark" : "light"}
				</button>
				{theme}
			</div>
		</themeContext.Provider>
	)
}

export default App
