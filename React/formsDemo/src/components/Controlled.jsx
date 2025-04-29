import React, { useState } from 'react'
  import { ToastContainer, toast } from "react-toastify"
import { motion } from "motion/react"
function Controlled ()
{
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errors,setErrors]=useState({})
    const handleSubmit = (e) =>
    {
        e.preventDefault(); // used to stop form to submit directly
        if (name.trim() == '')
        {
            setErrors({ ...errors, nameError: "please Enter name" })
            toast("Error")
        }
        else if (!email.match("/[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+.[A-Za-z]{2,}/"))
        {
             setErrors({ ...errors, emailError: "please Enter Proper Email" })
							toast("Error")
        }
        else if (password.length < 8)
        {
            
             setErrors({ ...errors, passwordError: "please Enter minimum 8 characters" })
							toast("Error")   
            }
        else
        {
					setErrors({})
            toast("form submitted successfully")
            // fetch(`url`, {
            //     method: 'POST',
            //     body: {
            //         name: name,
            //         email: email,
            //         password: password
            //     }
            //   })
					console.log(name, email, password)
					setName("")
					setEmail("")
					setPassword("")
				}
    }
  return (
		<div>
			<motion.form
				initial={{ scale: 0 }}
				animate={{ scale: 1 }}
				onSubmit={handleSubmit}
				className=' flex flex-col gap-4 bg-gray-600 p-10 rounded-2xl shadow shadow-blue-400'>
				<ToastContainer />
				<div>
					<input
						type='text'
						placeholder='Enter name'
						value={name}
						onChange={(e) => setName(e.target.value)}
						className=' text-2xl p-2 border border-gray-400 focus:border-blue-600 rounded-2xl bg-white'
					/>
					{errors.nameError && (
						<p className=' text-xl text-red-400'>{errors.nameError}</p>
					)}
				</div>
				<div>
					<input
						type='email'
						placeholder='Enter email'
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						className=' text-2xl p-2 border border-gray-400 focus:border-blue-600 rounded-2xl bg-white'
					/>
					{errors.emailError && (
						<p className=' text-xl text-red-400'>{errors.emailError}</p>
					)}
				</div>
				<div>
					<input
						type='password'
						placeholder='Enter Password'
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						className=' text-2xl p-2 border border-gray-400 focus:border-blue-600 rounded-2xl bg-white'
					/>
					{errors.passwordError && (
						<p className=' text-xl text-red-400'>{errors.passwordError}</p>
					)}
				</div>
				<button className=' bg-orange-400 text-2xl text-white text-center font-bold hover:scale-105 w-full rounded-2xl py-2'>
					submit
				</button>
			</motion.form>
		</div>
	)
}

export default Controlled
