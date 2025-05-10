import Button from "react-bootstrap/Button"
import Modal from "react-bootstrap/Modal"
import Form from "react-bootstrap/Form"
import { useState } from "react";

function Modals({show,setShow,postData}) {
    const handleClose = () => setShow(false);
    const [email, setEmail] = useState('');
    const [name,setName]=useState('')
	return (
		<>
			<Modal
				show={show}
				onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>Add a new user</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form>
						<Form.Group
							className='mb-3'
							controlId='formBasicPassword'>
							<Form.Label>Username</Form.Label>
							<Form.Control
								type='text'
								placeholder='enter Username'
								onChange={(e) => setName(e.target.value)}
							/>
						</Form.Group>
						<Form.Group
							className='mb-3'
							controlId='formBasicEmail'>
							<Form.Label>Email address</Form.Label>
							<Form.Control
								type='email'
								placeholder='Enter email'
								onChange={(e) => setEmail(e.target.value)}
							/>
						</Form.Group>

						<Button
							variant='primary'
                            type='submit' onClick={(e) =>
                            {
                                e.preventDefault()
                                postData(email, name)
                            }
                            }>
							Submit
						</Button>
					</Form>
				</Modal.Body>
			</Modal>
		</>
	)
}

export default Modals
