import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
	const navigate = useNavigate()

	useEffect(() => {
		const checkToken = () => {
			const userToken = localStorage.getItem('token')
			if (!userToken || userToken === 'undefined') {
				return navigate('/login')
			}
		}

		checkToken()
	}, [])
	return <div className='text-slate-100'>Home</div>
}

export default Home
