import React from "react";
import { Link, useNavigate } from "react-router";

function Navbar() {
	const navigate = useNavigate();

	const onLogout = (e) => {
		console.log("Logout clicked!");
		navigate("/"); // Home component (path = /)
	};

	return (
		<nav className="navbar navbar-expand-lg bg-info" data-bs-theme="light">
			<div className="container-fluid">
				<Link className="navbar-brand" to="/user/">
					Online Bookshop
				</Link>

				<div className="collapse navbar-collapse" id="navbarNav">
					<ul className="navbar-nav">
						<li className="nav-item">
							<Link className="nav-link" to="/user/categories">
								Categories
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="/user/books">
								Books
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="/user/cart">
								Cart
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="/user/orders">
								Orders
							</Link>
						</li>
						
						<li className="nav-item justify-content-end"> 
							<button onClick={onLogout} className="btn btn-sm btn-outline-dark">
								Logout
							</button>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
