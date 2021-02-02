import { Switch, Route, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import "./App.css";

import Navbar from "./components/Navbar/Navbar";
import Auth from "./components/Auth/Auth";

import AddQuestionForm from "./features/Questions/AddQuestionForm";
import QuestionsList from "./features/Questions/QuestionsList";
import Question from "./features/Questions/Question";
import DisabledInput from "./features/Answers/DisabledInput";
import { loggedin, loggedout } from "./features/Auth/authSlice";

const Main = ({ children }) => {
	return children;
};

let user = {
	email: "user@eg.com",
	password: "123456",
};

function App() {
	let auth = useSelector((state) => state.auth);
	let isAuthenticated = auth.authState;

	const history = useHistory();
	const dispatch = useDispatch();

	const authenticate = (email, password) => {
		if (email && password) {
			if (email === user.email && password === user.password) {
				dispatch(
					loggedin({
						authState: true,
					})
				);
				history.push("/");
			} else {
				console.log("Wrong Email or Password");
			}
		}
	};

	const logout = () => {
		dispatch(loggedout({ authState: false }));
	};

	return (
		<>
			<Navbar isAuthenticated={isAuthenticated} logout={logout} />
			<Switch>
				<Route path="/" exact>
					<Main>
						{isAuthenticated ? (
							<AddQuestionForm />
						) : (
							<DisabledInput home />
						)}
						<QuestionsList />
					</Main>
				</Route>
				<Route
					path="/all-questions"
					exact
					render={() => (
						<>
							<QuestionsList />
						</>
					)}
				/>
				<Route path="/question/:id" component={Question} />
				<Route path="/auth" exact>
					<Auth user={user} authenticate={authenticate} />
				</Route>
				)} />
			</Switch>
		</>
	);
}

export default App;
