import React, { useState,useEffect } from 'react'
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'
import NavBar from '../../components/NavBar/NavBar'
import Signup from '../Signup/Signup'
import Login from '../Login/Login'
import Landing from '../Landing/Landing'
import AllTickets from '../AllTickets/AllTickets'
import Users from '../Users/Users'
import * as authService from '../../services/authService'
import "./App.css"
import AllTicketsComp from '../../components/AllTickets/AllTickets-component'
import MyWork from '../../components/Mywork/Mywork-component'
import AddTicket from '../AddTicket/AddTicket'
import { createTicket,getTickets } from '../../services/ticketService'

const App = () => {
	const [user, setUser] = useState(authService.getUser())
	const [tickets, setTickets] = useState([])
	const [allTickets,setAllTickets] = useState([])
	const navigate = useNavigate()

	const [navComponents,setNavComponents] = useState([
		{name:'HOME', url:'/home'},
		{name:'SEARCH',url:'/search'},
		{name:'TICKETS',url:'/tickets'},
		{name:'MY WORK',url:'/mywork'},
		{name:"New Ticket",url:'/addTicket'}
	])
useEffect(()=>{
	getTickets()
	.then((result)=>setAllTickets(result))
},[])


	const handleSubmitTicket = formData => {
		console.log(formData)
		console.log('test2')
		createTicket(formData)
		.then(newTicketData => {
			setTickets([...tickets, newTicketData])
		})
	}



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
			  <Route path ="/tickets" element={<AllTickets ticket={allTickets}/>}/>
			  <Route path ="/mywork" element={<MyWork/>} />
				<Route path='/addTicket' element={<AddTicket handleSubmitTicket={handleSubmitTicket} user={user}/>} />
			</Routes>
		</>
	);
}

export default App;