import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { StateContext } from '../context/StateContext'
import Home from './Home'
import Login from './Login'
import Register from './Register'

const Pages = () => {
	return (
		<StateContext>
			<Routes>
				<Route
					path='/'
					exact
					element={<Register />}
				/>
				<Route
					path='/login'
					element={<Login />}
				/>
				<Route
					path='/home'
					element={<Home />}
				/>
			</Routes>
		</StateContext>
	)
}

export default Pages
