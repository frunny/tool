import React from "react"
import Dropdown from "./Dropdown"
// ----------------------------------------------
export default function Navbar() {
	return (
		<header className="navbar">			

			{/* medium and smaller screens */}
			<div className="sm:block md:block lg:hidden">
					<nav className="nav">
						<div className="nav-company-logo">
							
						</div>
						<div className="nav-flex-auto">
						</div>
						<button className="button">
							<Dropdown />
						</button>					
					</nav>
			</div>				

			{/* large screens */}
			<div className="hidden sm:hidden md:hidden lg:block">
				<nav className="nav">
					<div className="nav-company-logo">
						
					</div>
					<div className="nav-flex-auto">
					</div>
					<ul className="nav-items">
						<li><a href="">Home</a></li>
						<li><a href="">Features</a></li>
						<li><a href="">Pricing</a></li>
						<li><a href="">Contact</a></li>
					</ul>
					<button className="button">
						Sign Up
					</button>					
				</nav>
			</div>

	
		</header>
	)
}
