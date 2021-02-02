import { Link } from "react-router-dom";

const DisabledInput = ({ home }) => {
	const description = home ? "ask new questions" : "add new answer";
	return (
		<>
			<div className="disabled-input">
				<p>
					You need to <Link to="/auth">Login</Link> to {description}
				</p>
			</div>
		</>
	);
};

export default DisabledInput;
