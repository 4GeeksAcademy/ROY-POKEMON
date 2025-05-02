import { Link } from "react-router-dom";

export const Navbar = () => {

	return (
		<nav className="navbar  bg-dark">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1 text-light">Home</span>
				</Link>
				<div className="ml-auto">
					
				</div>
			</div>
		</nav>
	);
};