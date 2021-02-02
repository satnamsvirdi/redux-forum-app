import { useState } from "react";
import "./Auth.css";

const Auth = ({ user, authenticate }) => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleEmailChange = (e) => {
		setEmail(e.target.value);
	};
	const handlePasswordChange = (e) => {
		setPassword(e.target.value);
	};

	return (
		<>
			<form className="form">
				<label htmlFor="email" className="form-control-label mb-0.5">
					Email
				</label>
				<input
					className="form-control-input mb-0.5"
					type="email"
					id="email"
					placeholder="Enter your email here"
					value={email}
					onChange={handleEmailChange}
				/>
				<label htmlFor="password" className="form-control-label mb-0.5">
					Password
				</label>
				<input
					className="form-control-input mb-1"
					type="password"
					id="password"
					placeholder="Enter your password here"
					value={password}
					onChange={handlePasswordChange}
				/>

				<button
					className="btn btn-primary "
					type="button"
					onClick={() => authenticate(email, password)}
				>
					Login
				</button>
			</form>
		</>
	);
};

export default Auth;
