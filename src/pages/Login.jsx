import React, { useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {
	const navigate = useNavigate()

	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const handleSubmit = (e) => {
		e.preventDefault()
		let data = new FormData()
		data.append('email', email)
		data.append('password', password)

		let config = {
			method: 'post',
			maxBodyLength: Infinity,
			url: 'https://frontendreq.pondokprogrammer.com/api/login',
			headers: {},
			data: data,
		}

		axios
			.request(config)
			.then((response) => {
				console.log(JSON.stringify(response.data))
				navigate('/home')
				localStorage.setItem('token', response.data.token)
			})
			.catch(function (error) {
				console.log(error)
			})
	}

	return (
		<form onSubmit={handleSubmit}>
			<div className='mb-6'>
				<label
					htmlFor='email'
					className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
					Your email
				</label>
				<input
					type='email'
					id='email'
					className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
					placeholder='name@flowbite.com'
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					required
				/>
			</div>
			<div className='mb-6'>
				<label
					htmlFor='password'
					className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
					Your password
				</label>
				<input
					type='password'
					id='password'
					className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					required
				/>
			</div>
			<div className='pb-4'>
				<Link to='/'>
					<p className='text-white underline'>Do not have an account?</p>
				</Link>
			</div>
			<button
				type='submit'
				className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
				Submit
			</button>
		</form>
	)
}

export default Login
