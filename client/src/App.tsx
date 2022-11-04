import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { useLocalStorage } from "./hooks/useLocalStorage";

/* Routes, Pages */
import Home from "./routes/Home";
import Login from "./routes/Login";
import ProtectedRoute from "./routes/ProtectedRoute";

const App = () => {
	/* Use to save the authentication for protected pages */
	const [isAuth, setIsAuth] = useLocalStorage("auth", false);
	/* States for form */
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	console.log(isAuth);
	return (
		<>
			<Routes>
				<Route
					index
					element={
						<ProtectedRoute isAuth={isAuth} navigateTo="/account/login">
							<Home />
						</ProtectedRoute>
					}
				/>

				<Route
					path="account/login"
					element={
						<ProtectedRoute isAuth={!isAuth} navigateTo="/">
							<Login
								setUsername={setUsername}
								setPassword={setPassword}
								setIsAuth={setIsAuth}
								username={username}
								password={password}
								isAuth={isAuth}
							/>
						</ProtectedRoute>
					}
				/>
			</Routes>
		</>
	);
};

export default App;
