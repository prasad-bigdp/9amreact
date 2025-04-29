import React, { useRef } from 'react'
  import { ToastContainer, toast } from "react-toastify"
	import { motion } from "motion/react"
function Uncontrolled ()
{
    const nameRef = useRef('');
    const emailRef = useRef('');
    const passwordRef = useRef('')
    const handleSubmit = (e) =>
    {
        e.preventDefault();
        nameRef.current.style.backgroundColor="red"
       console.log(nameRef.current.value,emailRef.current.value,passwordRef.current.value)
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
						ref={nameRef}
						className=' text-2xl p-2 border border-gray-400 focus:border-blue-600 rounded-2xl bg-white'
					/>
				</div>
				<div>
					<input
						type='email'
						placeholder='Enter email'
						ref={emailRef}
						className=' text-2xl p-2 border border-gray-400 focus:border-blue-600 rounded-2xl bg-white'
					/>
				</div>
				<div>
					<input
						type='password'
						placeholder='Enter Password'
						ref={passwordRef}
						className=' text-2xl p-2 border border-gray-400 focus:border-blue-600 rounded-2xl bg-white'
					/>
				</div>
				<button className=' bg-orange-400 text-2xl text-white text-center font-bold hover:scale-105 w-full rounded-2xl py-2'>
					submit
				</button>
			</motion.form>
		</div>
	)
}

export default Uncontrolled
