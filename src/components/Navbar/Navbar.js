import { Link, useHistory } from "react-router-dom";
import "./Navbar.css";

const Navbar = ({ isAuthenticated, logout }) => {
	let history = useHistory();

	const authLink = isAuthenticated ? (
		<a href="#" onClick={() => logout()} className="navbar-link mr-1">
			Logout
		</a>
	) : (
		<Link to="/auth" className="navbar-link mr-1">
			Login
		</Link>
	);

	return (
		<nav className="navbar-container">
			<Link to="/" className="navbar-brand navbar-link">
				Forum App
			</Link>
			<div className="navbar-links">
				<Link to="/all-questions" className="navbar-link mr-1">
					All Questions
				</Link>
				{authLink}
				<a
					href="#"
					onClick={() => history.push("/")}
					className="navbar-link"
				>
					Link
				</a>
			</div>
		</nav>
	);
};

export default Navbar;
