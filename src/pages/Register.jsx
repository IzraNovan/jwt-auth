import React, { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Register = () => {
	// buat state sesuai di dokumentasi
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [password_confirmation, setPassword_confirmation] = useState('')

	const handleSubmit = (e) => {
		e.preventDefault()
		// sisain variabel data aja
		var data = new FormData()
		// value samain sama state
		data.append('name', name)
		data.append('email', email)
		data.append('password', password)
		data.append('password_confirmation', password_confirmation)

		var config = {
			method: 'post',
			maxBodyLength: Infinity,
			url: 'https://frontendreq.pondokprogrammer.com/api/register',
			// isi header dihapus
			headers: {},
			data: data,
		}

		axios(config)
			.then(function (response) {
				// kasih pesan buat cek
				console.log('Berhasil')
				// di register gak perlu localStorage.setItem
				console.log(JSON.stringify(response.data))
			})
			.catch(function (error) {
				console.log('Gagal')
				console.log(error)
			})
	}

	return (
		<form onSubmit={handleSubmit}>
			<div className='mb-6'>
				<label
					htmlFor='name'
					className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
					Your name
				</label>
				<input
					type='text'
					id='name'
					className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light'
					placeholder='name'
					value={name}
					onChange={(e) => setName(e.target.value)}
					required
				/>
			</div>
			<div className='mb-6'>
				<label
					htmlFor='email'
					className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
					Your email
				</label>
				<input
					type='email'
					id='email'
					className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light'
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
					className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light'
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					required
				/>
			</div>
			<div className='mb-6'>
				<label
					htmlFor='repeat-password'
					className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
					Repeat password
				</label>
				<input
					type='password'
					id='repeat-password'
					className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light'
					value={password_confirmation}
					onChange={(e) => setPassword_confirmation(e.target.value)}
					required
				/>
			</div>
			<div className='pb-4'>
				<Link to='/login'>
					<p className='text-white underline'>Already have and account?</p>
				</Link>
			</div>
			<button
				type='submit'
				className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
				Register new account
			</button>
		</form>
	)
}

export default Register
