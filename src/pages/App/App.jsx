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
import AddTicket from '../AddTicket/AddTicket'
import { createTicket,getTickets, updateTicket,deleteTicket, addComment } from '../../services/ticketService'
import TicketView from '../TicketView/TicketView'
import EditTicket from '../EditTicket/EditTicket'
import MyWork from '../MyWork/MyWork'
import SearchTicket from '../SearchTicket/SearchTicket'
import { getProfile, getAllProfiles, addTeam } from '../../services/profileService'
import UserView from '../UserView/UserView'

const App = () => {
	const [user, setUser] = useState(authService.getUser())
	const [profile, setProfile] = useState()
	const [tickets, setTickets] = useState([])
	const [allTickets,setAllTickets] = useState([])
	const [allProfiles, setAllProfiles] = useState([])

	const navigate = useNavigate()

	const [navComponents,setNavComponents] = useState([
		{name:'HOME', url:'/home'},
		{name:'SEARCH',url:'/search'},
		{name:'TICKETS',url:'/tickets'},
		{name:'MY WORK',url:'/myWork'},
		{name:"New Ticket",url:'/addTicket'}
	])
	
	useEffect(()=>{
		getTickets()
		.then((result)=>setAllTickets(result))
	},[tickets])

	useEffect(() => {
		getAllProfiles()
		.then((result) => setAllProfiles(result))
	},[])

	useEffect(() => {
		getProfile(user)
		.then((profile) => setProfile(profile))
	},[user])

	const handleSubmitTicket = formData => {
		createTicket(formData)
		.then(newTicketData => {
			setTickets([...tickets, newTicketData])
		})
	}

	const handleDeleteTicket = (ticket)=>{
		deleteTicket(ticket)
		const remainingTicket = allTickets.filter((delTicket)=>{
			return delTicket._id!== ticket
		})
		setAllTickets(remainingTicket)
		navigate('/tickets')
	}

	const handleLogout = () => {
		authService.logout()
		setUser(null)
		navigate('/')
	}

	const handleSignupOrLogin = () => {
		setUser(authService.getUser())
	}

	const handleUpdateTicket = (TicketInfo) => {
		updateTicket(TicketInfo)
		.then(updatedTicketInfo => {
			const newTicketArray = tickets.map(ticket => 
				ticket._id === updatedTicketInfo._id ? updatedTicketInfo : ticket)
			setTickets(newTicketArray)
		})
	}

	const handleAddComment = commentFormData => {
		addComment(commentFormData)
		.then(updatedTicketInfo => {
			const newTicketArray = tickets.map(ticket => 
				ticket._id === updatedTicketInfo._id ? updatedTicketInfo : ticket)
			setTickets(newTicketArray)
			navigate("/ticketDetails", {state: updatedTicketInfo})
		})
	}

	const handleAddTeam = teamData => {
		// call to backend with (teamData) being passed
		addTeam(teamData)
		// then take the response, which should be teams data
		.then(updatedProfile => {
			const newProfileArray = allProfiles.map(profile => 
				profile._id === updatedProfile._id ? updatedProfile : profile)
				setAllProfiles(newProfileArray)
		})
		// all profiles are being passed in via props, so should have teams available off of them
	}

	return (
		<>
			<NavBar navComponents={navComponents} user={user} handleLogout={handleLogout} />
			<Routes>
				<Route path='/' element={<Landing user={user} allProfiles={allProfiles} allTickets={allTickets} />} />
				<Route path='/signup' element={<Signup handleSignupOrLogin={handleSignupOrLogin} />} />
				<Route path='/login' element={<Login handleSignupOrLogin={handleSignupOrLogin} />} />
				<Route path='/users' element={user ? <Users user={user} allProfiles={allProfiles} handleAddTeam={handleAddTeam} /> : <Navigate to='/login' />} />
				<Route path ="/tickets" element={<AllTickets ticket={allTickets}/>}/>
				<Route path='/myWork' element={<MyWork profile={profile} />} />
				<Route path='/addTicket' element={<AddTicket handleSubmitTicket={handleSubmitTicket} profile={profile} allProfiles={allProfiles}/>} />
				<Route path='/ticketDetails' element={<TicketView user={user} handleDeleteTicket={handleDeleteTicket} handleAddComment= {handleAddComment} />} />
				<Route path="/editTicket" element={<EditTicket handleUpdateTicket={handleUpdateTicket} allProfiles={allProfiles} user={user} profile={profile}/>} />
				<Route path="/Search" element={<SearchTicket allTickets={allTickets}/>}/>
				<Route path="/viewUser" element={<UserView allProfiles={allProfiles}/>}/>
				{/* <Route path="/map" element = {<Map/>}/> */}
			</Routes>
		</>
	);
}

export default App;