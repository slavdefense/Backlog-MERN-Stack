import React from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'

const NavBar = ({ user, handleLogout,navComponents }) => {
	return (
		<div className="navbar">
			{user ? (
				<nav>
					<div >
						<ul className="nav-div" >
							<li>
								<span>Welcome, {user.name}</span>
							</li>
						</ul>
						<ul className="container nav-components">
							<li className="nav-components-li">
								<Link to='/' > <span>{navComponents[0].name}</span></Link>
							</li>
							<li className="nav-components-li">
								<Link to='/mywork' > <span>{navComponents[3].name}</span></Link>
							</li>
							<li className="nav-components-li">
                <Link to="/users"><span>All Users</span></Link>
              </li>
							<li className="nav-components-li"> 
								<Link to='/Search' > <span>{navComponents[1].name}</span></Link>
							</li>
							<li className="nav-components-li">
								<Link to='/tickets'> <span>{navComponents[2].name}</span></Link>
							</li>
							<li className="nav-components-li">
								<Link to='/addTicket' > <span>{navComponents[4].name}</span></Link>
							</li>
							<li className="auth-style">
								<Link className="nav-components-li" id="auth-style" to='' onClick={handleLogout}>Log out</Link>
							</li>
						</ul>
					</div>
				</nav>
			) : (
				<nav>
					<div>
						<ul>
							<li className="auth-style">
								<Link to="/login">Log In</Link>
							</li>
							<li className="auth-style">
								<Link to="/signup">Sign Up</Link>
							</li>
						</ul>
						
					</div>
				</nav>
			)}
		</div>
	)
}

export default NavBar
