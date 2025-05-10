import React from 'react'
import Modal from "@mui/material/Modal"
import { useState } from 'react'
function ProductCard ({ title, image, cat, price, description })
{
  const [open, setOpen] = useState(false)
	const handleOpen = () => setOpen(true)
	const handleClose = () => setOpen(false)
  return (
		<div className=' flex flex-col p-5 rounded-2xl shadow transition-all hover:shadow-blue-400 hover:scale-105'>
			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby='modal-modal-title'
				aria-describedby='modal-modal-description'>
				<div className=' absolute top-52 left-52 bg-white w-8/12 h-4/12 p-5 rounded-2xl transition-all'>
					<button
						className=' text-red-400'
						onClick={handleClose}>
						X
					</button>
					<p>{description}</p>
				</div>
			</Modal>
			<img
				src={image}
				alt={title}
				className=' h-70 object-fit'
			/>
			<h2 className=' text-2xl font-bold'>{title}</h2>
			<p>Category:{cat}</p>
			<p>Price : ₹{price}</p>
			<button
				
				className=' bg-green-300 py-4'>
				<a href='https://rzp.io/rzp/nZzkN6v'>add cart</a>
			</button>
		</div>
	)
}

export default ProductCard
