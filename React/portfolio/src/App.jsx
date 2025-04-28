import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import * as motion from "motion/react-client"

function App() {
	return (
		<Navbar
			expand='lg'
			className='bg-primary'>
			<Container>
				<motion.div
					animate={{ rotate: 360 }}
					transition={{ duration: 1 }}>
					<Navbar.Brand
						href='#home'
						className=' text-3xl text-white'>
						My Portfolio
					</Navbar.Brand>
				</motion.div>

				<Navbar.Toggle aria-controls='basic-navbar-nav' />
				<Navbar.Collapse
					id='basic-navbar-nav'
					className=' flex justify-end'>
					<Nav className=''>
						<Nav.Link
							href='#home'
							className=' text-white'>
							Home
						</Nav.Link>
						<Nav.Link
							href='#link'
							className=' text-white'>
							About
						</Nav.Link>
						<Nav.Link
							href='#home'
							className=' text-white'>
							Skills
						</Nav.Link>
						<Nav.Link
							href='#link'
							className=' text-white'>
							Projects
						</Nav.Link>
						<Nav.Link
							href='#home'
							className=' text-white'>
							Contact
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	)
}

export default App
