import React from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'

const NavBar = ({ user, handleLogout,navComponents }) => {
	return (
		<div className="navbars">
			{user ? (
				<nav>
					<div className="container-on-steroid" >
						<ul className="nav-div" >
							<li className="nav-span-cont">
								<span  className="nav-span-welcome">Hi, {user.name}</span>
								
							</li>
						</ul>
						<ul className="nav-components">
							<li className="nav-components-li">
								<Link  to='/' > <span  className="nav-span">{navComponents[0].name}</span></Link>
							</li>
							<li className="nav-components-li">
								<Link to='/mywork' > <span className="nav-span">{navComponents[3].name}</span></Link>
							</li>
							<li className="nav-components-li">
                <Link to="/users"><span className="nav-span">All Users</span></Link>
              </li>
							<li className="nav-components-li"> 
								<Link to='/Search' > <span className="nav-span">{navComponents[1].name}</span></Link>
							</li>
							<li className="nav-components-li">
								<Link to='/tickets'> <span className="nav-span">{navComponents[2].name}</span></Link>
							</li>
							<li className="nav-components-li">
								<Link to='/addTicket' > <span className="nav-span">{navComponents[4].name}</span></Link>
							</li>
							<li className="auth-style">
								<Link className="nav-components-li" id="auth-style" to='' onClick={handleLogout}>Log out</Link>
							</li>
						</ul>
					</div>
				</nav>
			) : (
				<nav className="not-logged-nav">
					<div>
						<ul className="not-logged-ul">
							<li className="auth-style">
								<Link to="/login"><span className="not-logged-span">Log In</span></Link>
							</li>
							<li className="auth-style">
								<Link to="/signup"><span className="not-logged-span">Sign Up</span></Link>
							</li>
						</ul>
						
					</div>
				</nav>
			)}
		</div>
	)
}

export default NavBar
