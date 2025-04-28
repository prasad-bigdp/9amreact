import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import Services from './pages/Services'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'
import './App.css'
import Service from './pages/Service'
import Child1 from './pages/Child1'
import Child2 from './pages/child2'
function App ()
{
  const home = React.lazy(() => import('./pages/Home'))
  const About = React.lazy(() => import("./pages/About"))
  

  return (
		<>
			<Header />
			<React.Suspense fallback={<div>loading...............</div>}>
				<Routes>
					<Route
						path='/'
						Component={home}
					/>
					<Route
						path='/home'
						Component={Home}
						children={[
							<Route
								path='/home/child1'
								Component={Child1}></Route>,
							<Route
								path='/home/child2'
								Component={Child2}></Route>,
						]}
					/>
					<Route
						path='/about'
						Component={About}
					/>
					<Route
						path='/services'
						element={<Services />}
					/>
					<Route
						path='/contact'
						Component={Contact}
					/>
					<Route
						path='/service/:id'
						Component={Service}
					/>
					<Route
						path='*'
						Component={NotFound}
					/>
				</Routes>
			</React.Suspense>
			<Footer />
		</>
	)
}

export default App
