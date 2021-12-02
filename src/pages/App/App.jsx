import React, { useState } from 'react'
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'
import NavBar from '../../components/NavBar/NavBar'
import Signup from '../Signup/Signup'
import Login from '../Login/Login'
import Landing from '../Landing/Landing'
import Users from '../Users/Users'
import * as authService from '../../services/authService'
import "./App.css"
import AllTickets from '../../components/AllTickets/AllTickets-component'
import MyWork from '../../components/Mywork/Mywork-component'

const App = () => {
	const [user, setUser] = useState(authService.getUser())
	const navigate = useNavigate()

	const [navComponents,setNavComponents] = useState([

		{name:'HOME', url:'/home'},
		{name:'SEARCH',url:'/search'},
		{name:'TICKETS',url:'/tickets'},
		{name:'MY WORK',url:'/mywork'}
		

	])

	const handleLogout = () => {
		authService.logout()
		setUser(null)
		navigate('/')
	}

	const handleSignupOrLogin = () => {
		setUser(authService.getUser())
	}

	return (
		<>
			<NavBar navComponents={navComponents} user={user} handleLogout={handleLogout} />
			<Routes>
				<Route path='/' element={<Landing user={user} />} />
				<Route path='/signup' element={<Signup handleSignupOrLogin={handleSignupOrLogin} />} />
				<Route path='/login' element={<Login handleSignupOrLogin={handleSignupOrLogin} />} />
				<Route path='/users' element={user ? <Users /> : <Navigate to='/login' />} />
			  <Route path ="/tickets" element={<AllTickets/>}/>
			  <Route path ="/mywork" element={<MyWork/>} />
				
			</Routes>
		</>
	);
}
 
export default App;