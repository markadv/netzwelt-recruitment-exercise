import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";

/* Routes, Pages */
import Home from "./routes/Home";
import Login from "./routes/Login";
import ProtectedRoute from "./routes/ProtectedRoute";

const App = () => {
	const [isAuth, setIsAuth] = useState(false);
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	return (
		<>
			<Routes>
				<Route
					index
					element={
						<ProtectedRoute isAuth={isAuth}>
							<Home />
						</ProtectedRoute>
					}
				/>

				<Route path="account/login" element={<Login setUsername={setUsername} setPassword={setPassword} username={username} password={password} />} />
			</Routes>
		</>
	);
};

export default App;
